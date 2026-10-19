// The opening: a typed `ssh guest@lagos-01` session that loads the WASM engine and the portrait,
// then wipes away to reveal the hologram. Any key or tap skips the typing.
import { $, coarsePointer, reduceMotion } from "../../lib/dom";
import { gsap, ScrollTrigger, unlockScroll } from "../../lib/scroll";
import { audio, sfx } from "../../lib/sound";
import { loadHolo, loadPortrait, initScene, startHologram, scatter, markAssembled } from "./hologram";
import { say } from "./holotape";

let skip = reduceMotion, done = false, wantVoice = false, entered = false;

const fingerprint = "SHA256:" + Array.from(crypto.getRandomValues(new Uint8Array(24)), (b) => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b & 63]).join("");
const lastLogin = new Date().toLocaleString("en-GB", { timeZone: "Africa/Lagos", weekday: "short", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" });

/** [prompt, text, typed?, answer] — answers starting with @ are filled in from real work. */
const SCRIPT: [string, string, 0 | 1, string?][] = [
  ["$ ", "ssh guest@lagos-01", 1],
  ["", `<span class="d">The authenticity of host 'lagos-01' can't be established.\nED25519 key fingerprint is ${fingerprint}.</span>`, 0],
  ["", "Are you sure you want to continue connecting (yes/no)? ", 0, "yes"],
  ["", `<span class="d">Warning: Permanently added 'lagos-01' (ED25519) to the list of known hosts.</span>`, 0],
  ["", "guest@lagos-01's password: ", 0, "••••••••"],
  ["", `<span class="d">Last login: ${lastLogin} WAT</span>`, 0],
  ["", `\n<span class="inv">TERMLINK · PERSONNEL RECORD · MUJEEB</span>`, 0],
  ["", "> loading holo.wasm ............ ", 0, "@wasm"],
  ["", "> decoding portrait ............ ", 0, "@pts"],
  ["", "> warming projector ............ ", 0, "ok"],
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, skip ? 0 : ms));

async function typeInto(el: HTMLElement, text: string) {
  for (let i = 0; i < text.length; i++) {
    if (skip) { el.insertAdjacentText("beforeend", text.slice(i)); return; }
    el.insertAdjacentText("beforeend", text[i]);
    if (Math.random() < 0.5) sfx("key");
    await sleep(12 + Math.random() * 30);
  }
}

function setProgress(v: number) {
  $("#pct").textContent = String(Math.round(v)).padStart(3, "0") + "%";
  $("#bootbar").style.width = v + "%";
}

export async function runBoot() {
  const log = $("#bootLog"), caret = document.createElement("span"); caret.className = "caret";
  let wasmBytes = 0;
  const holoReady = loadHolo().then((n) => (wasmBytes = n));

  for (let i = 0; i < SCRIPT.length; i++) {
    const [prompt, body, typed, answer] = SCRIPT[i];
    const line = document.createElement("div"); log.appendChild(line); line.appendChild(caret);
    if (prompt) line.insertAdjacentText("afterbegin", prompt);
    if (typed) { caret.remove(); await typeInto(line, body); line.appendChild(caret); await sleep(160); }
    else caret.insertAdjacentHTML("beforebegin", body);

    if (answer) {
      await sleep(240);
      let a = answer;
      if (a === "@wasm") { await holoReady; a = `ok (${(wasmBytes / 1024).toFixed(1)} KB, rust)`; }
      if (a === "@pts") {
        await holoReady; const t = performance.now();
        const n = await loadPortrait(coarsePointer ? 26000 : 46000);
        a = `ok (${n.toLocaleString()} pts, ${Math.max(1, Math.round(performance.now() - t))} ms)`;
      }
      caret.remove(); await typeInto(line, a); line.appendChild(caret);
    }
    setProgress(Math.min(100, ((i + 1) / SCRIPT.length) * 100));
    await sleep(i < 2 ? 110 : 80);
  }
  caret.remove();
  log.insertAdjacentHTML("beforeend", `\n<span class="inv">CONNECTED</span> <span class="d">press any key, or wait…</span>`);
  await sleep(650);
  enter();
}

/** CRT switch-on: wipe the terminal away, flash a scanline, raise the name, start the hologram. */
function enter() {
  if (entered) return; entered = done = true;
  try { initScene(); } catch (e) { console.warn("WebGL unavailable", e); }
  scatter(4.2);
  gsap.timeline({ defaults: { ease: "power3.inOut" } })
    .to("#boot", { clipPath: "ellipse(160% 0% at 50% 0%)", duration: reduceMotion ? 0.01 : 1.1 })
    .set("#boot", { display: "none" })
    .fromTo("#crtline", { opacity: 1, scaleX: 0 }, { scaleX: 1, duration: 0.25, ease: "power2.out" }, "-=.55")
    .to("#crtline", { scaleY: 400, opacity: 0, duration: 0.4, ease: "power2.in" })
    .add(() => { document.body.classList.remove("booting"); unlockScroll(); markAssembled(); ScrollTrigger.refresh(); sfx("static"); }, "-=.5")
    .from(".giant .ln > span", { yPercent: 110, duration: 1.2, ease: "expo.out" }, "-=.35")
    .from(".role .ln > span", { yPercent: 110, duration: 1, ease: "expo.out" }, "-=1")
    .from(".stamp > *, .holotape > *, .hero-meta", { y: 14, opacity: 0, stagger: 0.06, duration: 0.7, ease: "power2.out" }, "-=.9")
    .add(() => { if (wantVoice) setTimeout(() => say("intro"), 1400); });
  startHologram();
}

/** A key press or tap during boot skips the typing and lets the intro speak (audio needs a gesture). */
export function initBootSkip() {
  const anyKey = () => { audio(); wantVoice = true; if (!done) skip = true; };
  addEventListener("keydown", anyKey, { once: true });
  $("#boot").addEventListener("pointerdown", anyKey, { once: true });
  $("#skip").addEventListener("click", (e) => { e.stopPropagation(); anyKey(); });
}
