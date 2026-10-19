// Résumé: an old desktop computer. The window minimises, maximises and closes like the real thing,
// and "Download" plays the copy dialog before the file arrives.
import { $, $$, reduceMotion } from "../lib/dom";
import { sfx } from "../lib/sound";

/** 32px pixel-style icons, drawn on a 16-unit grid so edges stay crisp. */
const ICONS: Record<string, string> = {
  doc: '<path fill="#fff" stroke="#000" d="M3.5 1.5h7l3 3v10h-10z"/><path fill="#c0c0c0" stroke="#000" d="M10.5 1.5v3h3"/><path stroke="#000080" d="M5 7h6M5 9h6M5 11h4"/>',
  folder: '<path fill="#ffd94a" stroke="#000" d="M1.5 4.5v9h13v-8h-7l-1-1z"/><path stroke="#fff3b0" d="M2.5 6.5h11"/>',
  term: '<path fill="#c0c0c0" stroke="#000" d="M1.5 2.5h13v10h-13z"/><path fill="#030604" d="M2.5 3.5h11v8h-11z"/><path stroke="#41ff8b" d="M4 6l2 1.5L4 9M7 10h3"/><path fill="#808080" d="M5 13h6v1.5H5z"/>',
  mail: '<path fill="#fff" stroke="#000" d="M1.5 4.5h13v8h-13z"/><path fill="none" stroke="#000080" d="M1.5 4.5l6.5 5 6.5-5"/>',
  peguin: '<ellipse cx="8" cy="9" rx="4.5" ry="5.5" fill="#111"/><ellipse cx="8" cy="10" rx="2.8" ry="4" fill="#fff"/><circle cx="6.8" cy="6" r=".8" fill="#fff"/><circle cx="9.2" cy="6" r=".8" fill="#fff"/><path fill="#ff9f1a" d="M7 7.3h2L8 8.6z"/><path fill="#ff9f1a" d="M4.8 14.2h2.4v1H4.8zM8.8 14.2h2.4v1H8.8z"/>',
};

function drawIcons() {
  for (const el of $$("[data-ic]")) el.innerHTML = `<svg viewBox="0 0 16 16" shape-rendering="crispEdges">${ICONS[el.dataset.ic!] ?? ""}</svg>`;
}

/** Window states: open on the desktop, minimised to the taskbar, or closed (desktop icon reopens it). */
function initWindow() {
  const win = $("#w95win"), tab = $("#w95tab");
  const show = (on: boolean) => { win.hidden = !on; tab.classList.toggle("on", on); };
  $$("#w95win [data-act]").forEach((b) => b.addEventListener("click", () => {
    sfx("blip");
    const act = b.dataset.act;
    if (act === "max") win.classList.toggle("max");
    if (act === "min") show(false);
    if (act === "close") { show(false); tab.hidden = true; win.classList.remove("max"); }
  }));
  tab.addEventListener("click", () => { sfx("blip"); show(win.hidden); });
  $("#w95open").addEventListener("click", () => { sfx("blip"); tab.hidden = false; show(true); });
}

/** "Download" first plays the copy dialog: a page flies between folders while the block bar fills. */
function initCopy() {
  const dl = $<HTMLAnchorElement>("#w95dl"), dlg = $("#w95copy"), fill = $("#cpFill"), eta = $("#cpEta");
  let timer = 0, go = false;
  const finish = (download: boolean) => {
    clearInterval(timer); clearTimeout(timer); dlg.hidden = true; dlg.classList.remove("run");
    if (download) { go = true; dl.click(); }
  };
  dl.addEventListener("click", (e) => {
    if (go) { go = false; return; }              // the real click, let the browser download
    if (reduceMotion) return;
    e.preventDefault(); if (!dlg.hidden) return; sfx("blip");
    const total = 2400, t0 = performance.now();
    dlg.hidden = false; dlg.classList.add("run"); fill.style.width = "0%";
    const anim = dlg.querySelector<HTMLElement>(".cp-anim")!; anim.style.setProperty("--span", anim.clientWidth - 70 + "px");
    timer = window.setInterval(() => {
      const p = Math.min(1, (performance.now() - t0) / total);
      fill.style.width = Math.floor(p * 20) * 5 + "%";   // whole blocks, like the original
      const left = Math.ceil(((1 - p) * total) / 1000);
      eta.textContent = p < 1 ? `Estimated time left: ${left} second${left === 1 ? "" : "s"} (it's ${new Date().getFullYear()})` : "Done.";
      if (p >= 1) { clearInterval(timer); timer = window.setTimeout(() => finish(true), 250); }
    }, 80);
  });
  $("#cpCancel").addEventListener("click", () => { sfx("blip"); finish(false); });
}

/** Taskbar clock, on Lagos time like the rest of the site. */
function initClock() {
  const el = $("#w95clock");
  const tick = () => (el.textContent = new Date().toLocaleTimeString("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit" }));
  tick(); setInterval(tick, 30000);
}

export function initResume() {
  drawIcons();
  initWindow();
  initCopy();
  initClock();
}
