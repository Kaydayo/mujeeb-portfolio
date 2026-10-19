// Top nav: anchor links, the active-section dot, the sound pill and the full-screen index on phones.
import { $, $$ } from "../lib/dom";
import { gsap, lockScroll, unlockScroll, scrollToTarget } from "../lib/scroll";
import { sound } from "../lib/sound";
import { YouTubeMusic } from "../lib/youtube";
import { voice } from "./hero/holotape";

const sections = () => $$("section[data-sec]");
let active = "";

/** Called every frame: highlight the nav link for whichever section crosses the middle of the screen. */
export function updateActiveLink() {
  const mid = innerHeight / 2; let id = active;
  for (const s of sections()) { const r = s.getBoundingClientRect(); if (r.top <= mid && r.bottom > mid) { id = s.dataset.sec!; break; } }
  if (id !== active) { active = id; $$(".nav ul a").forEach((a) => a.classList.toggle("on", a.dataset.sec === id)); }
}

function initAnchors() {
  $$<HTMLAnchorElement>('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
    const t = document.querySelector<HTMLElement>(a.getAttribute("href")!); if (!t) return;
    e.preventDefault(); scrollToTarget(t, 1.6);
  }));
}

function initSoundToggle() {
  const btn = $("#sndBtn");
  btn.addEventListener("click", () => {
    sound.on = !sound.on; YouTubeMusic.mute(!sound.on);
    btn.textContent = sound.on ? "sound on" : "sound off"; btn.setAttribute("aria-pressed", String(sound.on));
    if (!sound.on) voice.el?.pause();
  });
}

/** Phones: an "index" pill opens a full-screen menu that grows out of the button. */
function initMobileMenu() {
  $(".nav .right").insertAdjacentHTML("afterbegin", '<button class="pill menuBtn" id="menuBtn" type="button" aria-expanded="false" aria-controls="mmenu">index</button>');
  const menu = $("#mmenu"), btn = $("#menuBtn"), at = "calc(100% - 40px) 34px";
  let open = false;
  const set = (o: boolean) => {
    open = o; btn.setAttribute("aria-expanded", String(o)); btn.textContent = o ? "close" : "index"; menu.setAttribute("aria-hidden", String(!o));
    if (o) {
      menu.classList.add("open"); lockScroll();
      gsap.fromTo(menu, { clipPath: `circle(0% at ${at})` }, { clipPath: `circle(150% at ${at})`, duration: 0.8, ease: "expo.inOut" });
      gsap.fromTo("#mmenu a", { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.7, ease: "expo.out", delay: 0.2 });
    } else {
      unlockScroll();
      gsap.to(menu, { clipPath: `circle(0% at ${at})`, duration: 0.6, ease: "expo.inOut", onComplete: () => menu.classList.remove("open") });
    }
  };
  btn.addEventListener("click", () => set(!open));
  menu.querySelectorAll<HTMLAnchorElement>("a").forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault(); e.stopImmediatePropagation();
    const t = $(a.getAttribute("href")!); set(false);
    setTimeout(() => scrollToTarget(t, 1.4), 350);
  }));
}

export function initNav() {
  initMobileMenu();
  initAnchors();
  initSoundToggle();
  // the paper sheet arrives with a curved top edge that flattens as it rises
  gsap.to("#paper", { borderRadius: "0% 0% 0 0 / 0vw 0vw 0 0", ease: "none", scrollTrigger: { trigger: "#paper", start: "top bottom", end: "top 20%", scrub: true } });
}
