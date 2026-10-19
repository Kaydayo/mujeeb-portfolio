// An original Afrobeats groove, synthesised live with Web Audio (nothing sampled).
// 104 bpm: kick, rim, shekere, 3-2 bell, log drum, a picked highlife-style guitar line and warm keys.
import { sound } from "./sound";

const BPM = 104, S16 = 60 / BPM / 4;
// Abmaj9 – Fm9 – Dbmaj7 – Eb6/9, two bars each (MIDI notes)
const CHORDS = [[56, 63, 67, 70, 72], [53, 60, 63, 67, 68], [49, 56, 60, 63, 65], [51, 58, 63, 65, 67]];
// guitar: 16-step pattern of chord-tone indexes (null = rest)
const GUITAR = [2, null, 3, 2, null, 4, 3, null, 2, null, 3, null, 4, 3, 2, null];
// log drum: [step, semitone offset]
const LOG = [[0, 0], [3, 0], [6, 7], [8, 5], [11, 0], [14, 3]];
const hz = (m: number) => 440 * 2 ** ((m - 69) / 12);

let ctx: AudioContext, master: GainNode, verb: ConvolverNode, analyser: AnalyserNode, noiseBuf: AudioBuffer;
let timer = 0, next = 0, step = 0, on = false, level = 0;

function boot() {
  ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -16; comp.ratio.value = 3.5; comp.attack.value = 0.004; comp.release.value = 0.18;
  master = ctx.createGain(); master.gain.value = 0;
  analyser = ctx.createAnalyser(); analyser.fftSize = 256;
  const air = ctx.createBiquadFilter(); air.type = "highshelf"; air.frequency.value = 7000; air.gain.value = 2.5;
  master.connect(air); air.connect(comp); comp.connect(analyser); analyser.connect(ctx.destination);

  noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;

  // a short synthetic room for the reverb send
  const ir = ctx.createBuffer(2, ctx.sampleRate * 2, ctx.sampleRate);
  for (let c = 0; c < 2; c++) { const x = ir.getChannelData(c); for (let i = 0; i < x.length; i++) x[i] = (Math.random() * 2 - 1) * (1 - i / x.length) ** 3.2; }
  verb = ctx.createConvolver(); verb.buffer = ir;
  const wet = ctx.createGain(); wet.gain.value = 0.2; verb.connect(wet); wet.connect(master);
}

// ---------------------------------------------------------------- voices
const out = (node: AudioNode, wet = 0, pan = 0) => {
  const p = ctx.createStereoPanner(); p.pan.value = pan; node.connect(p); p.connect(master);
  if (wet) { const w = ctx.createGain(); w.gain.value = wet; node.connect(w); w.connect(verb); }
};
function env(g: GainNode, t: number, a: number, peak: number, d: number) {
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
}
function kick(t: number) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(44, t + 0.12);
  env(g, t, 0.002, 0.95, 0.3); o.connect(g); out(g); o.start(t); o.stop(t + 0.4);
}
function noise(t: number, f: number, q: number, peak: number, d: number, type: BiquadFilterType, wet = 0, pan = 0) {
  const s = ctx.createBufferSource(); s.buffer = noiseBuf;
  const b = ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q;
  const g = ctx.createGain(); env(g, t, 0.001, peak, d);
  s.connect(b); b.connect(g); out(g, wet, pan); s.start(t, Math.random() * 0.5); s.stop(t + d + 0.05);
}
function bell(t: number, f: number, peak: number) {
  const o = ctx.createOscillator(), m = ctx.createOscillator(), mg = ctx.createGain(), g = ctx.createGain();
  m.frequency.value = f * 2.76; mg.gain.value = f * 1.2; m.connect(mg); mg.connect(o.frequency); o.frequency.value = f;
  env(g, t, 0.002, peak, 0.18); o.connect(g); out(g, 0.25, 0.35);
  o.start(t); m.start(t); o.stop(t + 0.25); m.stop(t + 0.25);
}
/** The signature low "woo": a sine with a pitch glide and a little saturation. */
function logDrum(t: number, m: number) {
  const o = ctx.createOscillator(), g = ctx.createGain(), ws = ctx.createWaveShaper();
  const c = new Float32Array(256); for (let i = 0; i < 256; i++) c[i] = Math.tanh((i / 128 - 1) * 2.2); ws.curve = c;
  const f = hz(m + 24);
  o.frequency.setValueAtTime(f * 1.9, t); o.frequency.exponentialRampToValueAtTime(f, t + 0.045);
  env(g, t, 0.004, 0.42, 0.34); o.connect(ws); ws.connect(g); out(g, 0.05); o.start(t); o.stop(t + 0.45);
}
/** Plucked guitar: two detuned saws through a fast-closing lowpass. */
function pluck(t: number, m: number, peak: number, pan: number) {
  const f = ctx.createBiquadFilter(), g = ctx.createGain();
  f.type = "lowpass"; f.Q.value = 6; f.frequency.setValueAtTime(5200, t); f.frequency.exponentialRampToValueAtTime(700, t + 0.16);
  env(g, t, 0.002, peak * 0.5, 0.32); f.connect(g); out(g, 0.28, pan);
  for (const cents of [0, 7]) { const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.value = hz(m); o.detune.value = cents; o.connect(f); o.start(t); o.stop(t + 0.4); }
}
function keys(t: number, notes: number[], d: number) {
  notes.forEach((n, k) => {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    o.type = "sine"; o2.type = "triangle"; o.frequency.value = hz(n); o2.frequency.value = hz(n) * 1.004;
    f.type = "lowpass"; f.frequency.value = 1500;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.04, t + 0.03); g.gain.exponentialRampToValueAtTime(0.01, t + d * 0.6); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(f); o2.connect(f); f.connect(g); out(g, 0.45, (k - 2) * 0.15);
    o.start(t); o2.start(t); o.stop(t + d + 0.05); o2.stop(t + d + 0.05);
  });
}

/** Look-ahead scheduler: queues every 16th note that falls in the next 120 ms. */
function schedule() {
  while (next < ctx.currentTime + 0.12) {
    const s = step % 16, bar = Math.floor(step / 16), chord = CHORDS[Math.floor(bar / 2) % 4];
    const t = next + (s % 2 ? S16 * 0.18 : 0); // swing the off-beats
    if (s === 0 || s === 7 || s === 10) kick(t);
    if (s === 4 || s === 12) noise(t, 2100, 1.4, 0.28, 0.1, "bandpass", 0.3);                          // rim
    noise(t, 7800, 0.8, s % 4 === 2 ? 0.13 : 0.05, s % 4 === 2 ? 0.07 : 0.035, "highpass", 0, 0.25);    // shekere
    if ([0, 3, 6, 10, 12].includes(s)) bell(t, s === 0 ? 932 : 1109, 0.035);
    for (const [b, off] of LOG) if (b === s && bar % 4 !== 3) logDrum(t, chord[0] + off - 12);
    const gi = GUITAR[s]; if (gi !== null && bar >= 1) pluck(t, chord[gi % chord.length] + 12, s % 4 === 0 ? 0.32 : 0.22, -0.3);
    if (s === 0 && bar % 2 === 0) keys(t, chord, S16 * 30);
    next += S16; step++;
  }
}

const buf = new Uint8Array(128);

export const Groove = {
  get on() { return on; },
  get suspended() { return !!ctx && ctx.state !== "running"; },
  /** Current loudness 0..1, smoothed. */
  level() {
    if (!analyser || !on) return (level *= 0.9);
    analyser.getByteTimeDomainData(buf);
    let s = 0; for (const v of buf) s += ((v - 128) / 128) ** 2;
    return (level += (Math.sqrt(s / buf.length) * 3.2 - level) * 0.3);
  },
  start() {
    if (!ctx) boot();
    ctx.resume(); if (on) return;
    on = true; next = ctx.currentTime + 0.05; step = 0;
    master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setValueAtTime(0, ctx.currentTime);
    master.gain.linearRampToValueAtTime(sound.on ? 0.85 : 0, ctx.currentTime + 1.6);
    timer = window.setInterval(schedule, 25);
  },
  stop() {
    if (!on) return; on = false;
    master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
    setTimeout(() => clearInterval(timer), 700);
  },
  mute(m: boolean) { if (master) master.gain.setTargetAtTime(m || !on ? 0 : 0.85, ctx.currentTime, 0.05); },
  resume() { if (ctx) ctx.resume(); },
};

// any tap counts as the gesture browsers need before they will play sound
addEventListener("pointerdown", () => Groove.resume(), { passive: true });
