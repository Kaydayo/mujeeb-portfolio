// Experience: a dial that turns as you scroll through each job, plus an "index" view listing them all.
import { $ } from "../lib/dom";
import { gsap, ScrollTrigger, scrollToPinProgress } from "../lib/scroll";
import { scramble } from "../lib/text";
import { logo } from "../lib/logo";
import { JOBS } from "../content/experience";

let current = -1;

function drawTicks() {
  let s = "";
  for (let i = 0; i < 180; i++) {
    const a = (i / 180) * Math.PI * 2, big = i % 15 === 0, r1 = big ? 78 : 84, r2 = 90;
    s += `<line x1="${(Math.cos(a) * r1).toFixed(2)}" y1="${(Math.sin(a) * r1).toFixed(2)}" x2="${(Math.cos(a) * r2).toFixed(2)}" y2="${(Math.sin(a) * r2).toFixed(2)}" stroke="${big ? "var(--ink)" : "#b9beb6"}" stroke-width="${big ? 1.4 : 0.45}" stroke-linecap="round"/>`;
  }
  $("#ticks").innerHTML = s;
}

/** SVG path for the progress arc, p in 0..1. */
function arcPath(p: number) {
  const a0 = -Math.PI / 2, a1 = a0 + Math.max(0.001, p) * Math.PI * 2, r = 96;
  return `M ${Math.cos(a0) * r} ${Math.sin(a0) * r} A ${r} ${r} 0 ${p > 0.5 ? 1 : 0} 1 ${Math.cos(a1) * r} ${Math.sin(a1) * r}`;
}

function show(i: number) {
  if (i === current) return; current = i;
  const job = JOBS[i];
  scramble($("#lgCo"), job.co); scramble($("#lgRole"), job.role, 500);
  $("#lgLogo").innerHTML = logo(job.logo);
  $("#lgSub").textContent = job.sub; $("#lgArea").textContent = job.area;
  $("#lgCount").textContent = `0${i + 1} / 0${JOBS.length}`;
  $("#lgScreen").innerHTML = `<span class="k">${job.k}</span><ul>${job.body.map((b) => `<li>${b}</li>`).join("")}</ul>`;
  gsap.fromTo("#lgScreen > *", { y: 12, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out" });
  $("#logs").style.setProperty("--tint", job.tint);
}

/** "latest | index" toggle: index lists every job; clicking one turns the dial to it. */
function initIndex() {
  const toggle = $("#logs .toggle");
  toggle.innerHTML = '<button type="button" class="on" data-v="latest">latest</button><button type="button" data-v="index">index</button>';
  $("#logs").insertAdjacentHTML("beforeend", `<div id="logIndex" aria-hidden="true">${JOBS.map((j, i) =>
    `<button type="button" class="li-row" data-i="${i}">${logo(j.logo)}<b>${j.co}</b><span>${j.role} · ${j.area}</span><i>${j.sub}</i></button>`).join("")}</div>`);
  const panel = $("#logIndex"), buttons = [...toggle.children] as HTMLElement[];

  const view = (v: string) => {
    buttons.forEach((b) => b.classList.toggle("on", b.dataset.v === v));
    const open = v === "index"; panel.setAttribute("aria-hidden", String(!open));
    if (open) {
      panel.classList.add("open");
      gsap.fromTo(panel, { opacity: 0 }, { opacity: 1, duration: 0.35 });
      gsap.fromTo(".li-row", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.7, ease: "expo.out" });
    } else gsap.to(panel, { opacity: 0, duration: 0.25, onComplete: () => panel.classList.remove("open") });
  };
  buttons.forEach((b) => b.addEventListener("click", () => view(b.dataset.v!)));
  panel.addEventListener("click", (e) => {
    const row = (e.target as Element).closest<HTMLElement>(".li-row"); if (!row) return;
    view("latest"); scrollToPinProgress($("#logs"), (+row.dataset.i! + 0.5) / JOBS.length, 1.1);
  });
}

export function initExperience() {
  $("#lgCo").parentElement!.insertAdjacentHTML("afterbegin", '<span class="lg-logo" id="lgLogo"></span>');
  drawTicks();
  show(0); $("#arc").setAttribute("d", arcPath(0.02));
  ScrollTrigger.create({
    trigger: "#logs", start: "top top", end: "+=" + JOBS.length * 70 + "%", pin: true, scrub: true,
    onUpdate: (self) => {
      const p = self.progress;
      $("#ticks").setAttribute("transform", `rotate(${p * 150})`);
      $("#arc").setAttribute("d", arcPath(0.02 + p * 0.98));
      show(Math.min(JOBS.length - 1, Math.floor(p * JOBS.length)));
    },
  });
  initIndex();
}
