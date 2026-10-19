// Interface sounds (key clicks, blips, static) and the global sound switch.

let ctx: AudioContext | null = null;

/** Global "sound on/off" (the pill in the nav). */
export const sound = { on: true };

/** Shared AudioContext, created on first use and resumed after a user gesture. */
export function audio(): AudioContext | null {
  if (!ctx) {
    try { ctx = new (window.AudioContext || (window as any).webkitAudioContext)(); } catch { /* no audio */ }
  }
  if (ctx && ctx.state === "suspended") ctx.resume();
  return ctx;
}

export type Sfx = "key" | "blip" | "static";

export function sfx(kind: Sfx) {
  if (!sound.on) return;
  const a = audio(); if (!a) return;
  const t = a.currentTime, g = a.createGain();
  g.connect(a.destination);
  if (kind === "static") {
    const len = 0.35, buf = a.createBuffer(1, a.sampleRate * len, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const src = a.createBufferSource(), f = a.createBiquadFilter();
    f.type = "bandpass"; f.frequency.value = 2400; f.Q.value = 0.6;
    src.buffer = buf; src.connect(f); f.connect(g);
    g.gain.setValueAtTime(0.05, t); src.start(t);
    return;
  }
  const o = a.createOscillator();
  o.type = "square";
  o.frequency.setValueAtTime(kind === "key" ? 1800 + Math.random() * 600 : 880, t);
  if (kind === "blip") o.frequency.exponentialRampToValueAtTime(1760, t + 0.06);
  g.gain.setValueAtTime(kind === "key" ? 0.006 : 0.025, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + (kind === "key" ? 0.025 : 0.09));
  o.connect(g); o.start(t); o.stop(t + 0.12);
}
