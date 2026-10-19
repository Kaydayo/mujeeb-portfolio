// The record page: opens over the site when a poster is clicked. Each record has its own
// shareable link (#record/<slug>), and the browser's back button closes it.
import { $ } from "../../lib/dom";
import { gsap, lockScroll, unlockScroll } from "../../lib/scroll";
import { sfx } from "../../lib/sound";
import { logo } from "../../lib/logo";
import { RECORDS } from "../../content/records";
import { posterCanvases } from "./wall";

let current = -1, isOpen = false;

function fill(i: number) {
  const r = RECORDS[i]; current = i;
  const img = $<HTMLImageElement>("#recImg");
  img.src = posterCanvases[i].toDataURL("image/jpeg", 0.86); img.alt = `Poster: ${r.t}`;
  $("#recN").textContent = `file 0${i + 1} / 0${RECORDS.length}`;
  $("#recK").innerHTML = logo(r.logo) + `<span>${r.k}</span>`;
  $("#recTitle").textContent = r.t; $("#recOrg").textContent = r.org;
  $("#recMeta").innerHTML = r.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  $("#recText").innerHTML = r.text.map((p) => `<p>${p}</p>`).join("");
  $("#recList").innerHTML = r.list.map(([b, t], n) => `<li><span>0${n + 1}</span><span><b>${b}.</b> ${t}</span></li>`).join("");
  const doc = $("#recDoc"); doc.hidden = !r.doc;
  if (r.doc) { $<HTMLImageElement>("#recDocImg").src = r.doc.src; $<HTMLImageElement>("#recDocImg").alt = r.doc.alt; $<HTMLAnchorElement>("#recDocLink").href = r.doc.src; $("#recDocNote").textContent = r.doc.note; }
  $("#recNextT").textContent = RECORDS[(i + 1) % RECORDS.length].t;
  $("#rec").scrollTop = 0;
  gsap.fromTo("#recImg", { rotationX: -28, y: 40, opacity: 0 }, { rotationX: 0, y: 0, opacity: 1, duration: 1.4, ease: "elastic.out(1, .55)", delay: 0.15 });
  gsap.fromTo(["#recK", "#recTitle", "#recOrg", "#recMeta", "#recText", "#recList", "#recDoc", "#recNext"], { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 1, ease: "expo.out", delay: 0.2 });
}

export function openRecord(i: number, pushHistory = true) {
  fill(i);
  if (!isOpen) {
    isOpen = true; $("#rec").classList.add("open"); lockScroll(); document.documentElement.style.overflow = "hidden";
    gsap.fromTo("#rec", { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 0.9, ease: "expo.inOut" });
    sfx("blip");
  }
  if (pushHistory) history.pushState({ rec: i }, "", "#record/" + RECORDS[i].slug);
  $("#recBack").focus({ preventScroll: true });
}

export function closeRecord(fromHistory = false) {
  if (!isOpen) return; isOpen = false; document.documentElement.style.overflow = "";
  gsap.to("#rec", { clipPath: "inset(0 0 100% 0)", duration: 0.7, ease: "expo.inOut", onComplete: () => { $("#rec").classList.remove("open"); unlockScroll(); } });
  if (!fromHistory) history.pushState({}, "", location.pathname + location.search);
}

export function initRecordPage() {
  $("#recBack").addEventListener("click", () => closeRecord());
  $("#recNext").addEventListener("click", () => {
    const n = (current + 1) % RECORDS.length;
    gsap.to(".rec-body", { opacity: 0, duration: 0.25, onComplete: () => { fill(n); gsap.set(".rec-body", { opacity: 1 }); history.replaceState({ rec: n }, "", "#record/" + RECORDS[n].slug); } });
  });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen) closeRecord(); });
  addEventListener("popstate", (e) => { const s = e.state; if (s && s.rec != null) openRecord(s.rec, false); else closeRecord(true); });
  // a shared link straight to a record
  addEventListener("load", () => {
    const m = location.hash.match(/^#record\/(\w+)/); if (!m) return;
    const i = RECORDS.findIndex((r) => r.slug === m[1]);
    if (i >= 0) setTimeout(() => openRecord(i, false), 1200);
  });
}
