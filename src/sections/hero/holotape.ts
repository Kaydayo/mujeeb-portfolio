// The holotape: what the hologram says. Captions type out at reading pace and drive the mouth;
// if a line has a recording (`audio`), captions follow playback and the mouth follows its volume.
import { $, $$ } from "../../lib/dom";
import { audio, sfx, sound } from "../../lib/sound";
import { LINES } from "../../content/profile";

/** Live state the hologram reads every frame. */
export const voice = {
  speaking: false,
  mouthTarget: 0,   // where the mouth wants to be (0 closed .. 1 open)
  mouth: 0,         // smoothed mouth opening
  glitch: 0,        // extra glitch, kicked on each new line and decays
  el: null as HTMLAudioElement | null,
  analyser: null as AnalyserNode | null,
  buf: null as Uint8Array<ArrayBuffer> | null,
};

let capTimer = 0;
const caption = () => $("#caption");

function setCaption(text: string, upto: number) {
  caption().innerHTML = `<span class="said">${text.slice(0, upto)}</span><span class="rest">${text.slice(upto)}</span>`;
}
function setTape(on: boolean) {
  $("#tapeT1").textContent = on ? "transmitting…" : "play holotape";
  $("#playIcon").innerHTML = on ? '<path d="M3 2h4v12H3zM9 2h4v12H9z"/>' : '<path d="M4 2l10 6-10 6z"/>';
}
export function stopTalking() {
  voice.speaking = false; clearInterval(capTimer);
  if (voice.el) { voice.el.pause(); voice.el = null; }
  setTape(false);
}

export function say(key: string) {
  const line = LINES[key] ?? { text: key }, text = line.text;
  stopTalking(); voice.glitch = 1; sfx("static");
  setCaption(text, 0); setTape(true); voice.speaking = true;
  $("#tapeT2").textContent = `msg · ${key}`;
  const finish = () => { voice.speaking = false; clearInterval(capTimer); setCaption(text, text.length); setTape(false); };

  if (line.audio && sound.on) {
    const el = (voice.el = new Audio(line.audio)), a = audio();
    if (a) {
      const src = a.createMediaElementSource(el);
      voice.analyser = a.createAnalyser(); voice.analyser.fftSize = 512; voice.buf = new Uint8Array(voice.analyser.fftSize);
      src.connect(voice.analyser); voice.analyser.connect(a.destination);
    }
    el.onended = finish; el.play().catch(finish);
    capTimer = window.setInterval(() => { if (el.duration) setCaption(text, Math.floor((text.length * el.currentTime) / el.duration)); }, 50);
    return;
  }

  const cps = 16, t0 = performance.now();
  capTimer = window.setInterval(() => {
    const n = Math.min(text.length, Math.floor(((performance.now() - t0) / 1000) * cps));
    setCaption(text, n);
    const ch = text[n] || " ";
    voice.mouthTarget = /[aeiou]/i.test(ch) ? 0.55 + Math.random() * 0.4 : /[ ,.:;]/.test(ch) ? 0 : 0.25 + Math.random() * 0.2;
    if (n >= text.length) finish();
  }, 1000 / cps);
}

/** Free text from the prompt: match a keyword, else guess the intent. */
function ask(q: string) {
  const s = q.trim().toLowerCase(); if (!s) return; audio();
  const key = Object.keys(LINES).find((k) => s.includes(k))
    ?? (/(who|about|you)/.test(s) ? "whoami" : /(tech|stack|tools|language)/.test(s) ? "stack" : /(project|side|build)/.test(s) ? "builds" : /(hire|job|role|work|contact|email)/.test(s) ? "hire" : "help");
  say(key);
}

/** Per frame: smooth the mouth, decay the glitch, animate the equaliser bars. */
export function tickVoice(t: number) {
  const v = voice;
  if (v.analyser && v.el && !v.el.paused) {
    v.analyser.getByteTimeDomainData(v.buf!);
    let s = 0; for (const b of v.buf!) { const x = (b - 128) / 128; s += x * x; }
    v.mouthTarget = Math.min(1, Math.sqrt(s / v.buf!.length) * 6);
  } else if (!v.speaking) v.mouthTarget *= 0.7;
  v.mouth += (v.mouthTarget - v.mouth) * 0.4;
  v.glitch *= 0.96;

  const bars = $("#eq").children as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < bars.length; i++) {
    const h = v.speaking ? (v.mouth * 0.75 + Math.random() * 0.25) * (0.4 + 0.6 * Math.sin(i * 0.7 + t * 9) ** 2) : 0.06 + 0.04 * Math.sin(i + t * 2);
    bars[i].style.height = 8 + h * 92 + "%"; bars[i].style.opacity = v.speaking ? "0.9" : "0.35";
  }
}

export function initHolotape() {
  $("#playBtn").addEventListener("click", () => { audio(); voice.speaking ? stopTalking() : say("intro"); });
  setCaption(LINES.intro.text, 0);
  const eq = $("#eq"); for (let i = 0; i < 28; i++) eq.appendChild(document.createElement("i"));
  $("#tform").addEventListener("submit", (e) => { e.preventDefault(); const inp = $<HTMLInputElement>("#tin"); ask(inp.value); inp.value = ""; });
  $("#tin").addEventListener("keydown", () => sfx("key"));
  $$("[data-cmd]").forEach((b) => b.addEventListener("click", () => ask(b.dataset.cmd!)));
}
