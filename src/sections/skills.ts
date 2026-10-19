// Skills: bubbles that fall into a pit with simple physics. Drag and throw them.
import { $, reduceMotion, whileVisible } from "../lib/dom";
import { ScrollTrigger } from "../lib/scroll";
import { sfx } from "../lib/sound";
import { SKILLS } from "../content/experience";
import { skillIcon } from "../lib/skill-icons";

interface Bubble { el: HTMLElement; r: number; x: number; y: number; vx: number; vy: number; grab: boolean }
const bubbles: Bubble[] = [];
let pit: HTMLElement, pitVisible = () => false;

function step(dt: number) {
  const W = pit.clientWidth, H = pit.clientHeight, gravity = 1400;
  for (const b of bubbles) { if (b.grab) continue; b.vy += gravity * dt; b.vx *= 0.995; b.x += b.vx * dt; b.y += b.vy * dt; }
  for (let iter = 0; iter < 3; iter++) {
    // circle–circle collisions with a little bounce
    for (let i = 0; i < bubbles.length; i++) for (let j = i + 1; j < bubbles.length; j++) {
      const a = bubbles[i], b = bubbles[j], dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 0.01, m = a.r + b.r;
      if (d >= m) continue;
      const o = (m - d) / 2, nx = dx / d, ny = dy / d, wa = a.grab ? 0 : b.grab ? 1 : 0.5, wb = 1 - wa;
      a.x -= nx * o * 2 * wa; a.y -= ny * o * 2 * wa; b.x += nx * o * 2 * wb; b.y += ny * o * 2 * wb;
      const rv = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
      if (rv < 0) { const imp = rv * 0.6; if (!a.grab) { a.vx += nx * imp; a.vy += ny * imp; } if (!b.grab) { b.vx -= nx * imp; b.vy -= ny * imp; } }
    }
    // walls and floor
    for (const b of bubbles) {
      if (b.x < b.r) { b.x = b.r; b.vx *= -0.5; }
      if (b.x > W - b.r) { b.x = W - b.r; b.vx *= -0.5; }
      if (b.y > H - b.r) { b.y = H - b.r; b.vy *= -0.35; b.vx *= 0.96; }
    }
  }
}
function render() { for (const b of bubbles) b.el.style.transform = `translate(${b.x - b.r}px, ${b.y - b.r}px)`; }

/** Called from the main frame loop. */
export function tickSkills() { if (pitVisible() && !reduceMotion) { step(1 / 60); render(); } }

export function initSkills() {
  pit = $("#pit");
  const W = pit.clientWidth, H = pit.clientHeight, small = W < 600;
  for (const [name, domain] of SKILLS) {
    const r = (small ? 40 : 58) + (name.length > 9 ? (small ? 8 : 14) : 0);
    const el = document.createElement("div");
    el.className = "bub" + (domain ? " domain" : ""); el.innerHTML = `${skillIcon(name)}<span>${name}</span>`; el.dataset.cursor = "drag";
    el.style.width = el.style.height = r * 2 + "px"; el.style.setProperty("--i", Math.round(r * 0.5) + "px"); pit.appendChild(el);
    bubbles.push({ el, r, x: r + Math.random() * (W - 2 * r), y: -Math.random() * H * 1.2, vx: (Math.random() - 0.5) * 60, vy: 0, grab: false });
  }
  for (let k = 0; k < 600; k++) step(1 / 60); // settle before first paint
  render();

  // drag and throw
  let drag: Bubble | null = null, lx = 0, ly = 0;
  pit.addEventListener("pointerdown", (e) => {
    const el = (e.target as Element).closest<HTMLElement>(".bub"); if (!el) return;
    drag = bubbles.find((b) => b.el === el)!; drag.grab = true; el.classList.add("grab"); el.setPointerCapture(e.pointerId);
    const r = pit.getBoundingClientRect(); lx = e.clientX - r.left; ly = e.clientY - r.top; sfx("blip");
  });
  pit.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const r = pit.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    drag.vx = (x - lx) * 40; drag.vy = (y - ly) * 40; drag.x = x; drag.y = y; lx = x; ly = y;
  });
  const release = () => { if (drag) { drag.grab = false; drag.el.classList.remove("grab"); drag = null; } };
  pit.addEventListener("pointerup", release); pit.addEventListener("pointercancel", release);

  pitVisible = whileVisible(pit);
  // when the pit scrolls into view, drop everything in from above
  ScrollTrigger.create({ trigger: pit, start: "top 70%", once: true, onEnter: () => { if (!reduceMotion) bubbles.forEach((b) => { b.y = -b.r - Math.random() * 500; b.vy = 0; }); } });
}
