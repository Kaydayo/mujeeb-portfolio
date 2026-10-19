// About: photo card with a giant name riding over its edge, then numbered rows whose lines rise in.
import { $, $$ } from "../lib/dom";
import { gsap, ScrollTrigger } from "../lib/scroll";
import { splitLines } from "../lib/text";
import { logo } from "../lib/logo";
import { COMPANIES, STACK } from "../content/profile";

const dotList = (items: string[]) =>
  items.map((html, i) => `${html}${i < items.length - 1 ? '<span class="sep">•</span>' : ""}`);

function renderRows() {
  $("#ckCos").innerHTML = "<p>" + dotList(COMPANIES.map(([k, name, years]) => `${logo(k)}${name}<small>${years}</small>`))
    .map((h) => `<span class="co">${h}</span>`).join(" ") + "</p>";
  $("#ckSkills").innerHTML = "<p>" + dotList(STACK).map((h) => `<span class="it">${h}</span>`).join(" ") + "</p>";
}

function animateCard() {
  const name = $("#ckName");
  name.innerHTML = [...name.textContent!].map((c) => `<span class="ch">${c}</span>`).join("");
  gsap.fromTo(".ck-card img", { yPercent: -8, scale: 1.12 }, { yPercent: 8, scale: 1, ease: "none", scrollTrigger: { trigger: ".ck-card", start: "top bottom", end: "bottom top", scrub: true } });
  gsap.fromTo(".ck-card", { clipPath: "inset(14% 8% 0% 8% round 40px)" }, { clipPath: "inset(0% 0% 0% 0% round 22px)", ease: "none", scrollTrigger: { trigger: ".ck-card", start: "top 95%", end: "top 30%", scrub: true } });
  gsap.fromTo("#ckName", { yPercent: 55 }, { yPercent: -6, ease: "none", scrollTrigger: { trigger: ".ck-card", start: "center bottom", end: "bottom 30%", scrub: true } });
  gsap.fromTo("#ckName .ch", { yPercent: 100 }, { yPercent: 0, stagger: 0.05, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: "#ckName", start: "top 92%" } });
  gsap.from(".ck-tag", { opacity: 0, y: 16, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".ck-tag", start: "top 92%" } });
}

/** Each row: a rule draws across, the index fades in, then the lines rise one after another. */
function animateRows() {
  let built = false;
  const build = () => {
    for (const row of $$(".ck-row")) {
      const lines = splitLines(row.querySelector<HTMLElement>(".ck-lines")!);
      const rule = row.querySelector(".ck-rule"), labels = [row.querySelector(".ck-idx"), row.querySelector(".ck-k")];
      if (!built) {
        gsap.set(rule, { scaleX: 0 }); gsap.set(labels, { opacity: 0 });
        ScrollTrigger.create({ trigger: row, start: "top 82%", once: true, onEnter: () => {
          gsap.to(rule, { scaleX: 1, duration: 1.4, ease: "expo.inOut" });
          gsap.to(labels, { opacity: 1, duration: 0.8, delay: 0.3 });
          gsap.fromTo(row.querySelectorAll(".lnm > span"), { yPercent: 105 }, { yPercent: 0, stagger: 0.08, duration: 1.1, ease: "expo.out", delay: 0.35 });
          row.dataset.shown = "1";
        } });
      }
      if (!row.dataset.shown) gsap.set(lines, { yPercent: 105 });
    }
    built = true;
  };
  document.fonts.ready.then(build);
  let width = innerWidth;
  addEventListener("resize", () => { if (Math.abs(innerWidth - width) < 40) return; width = innerWidth; build(); });
}

export function initAbout() {
  renderRows();
  animateCard();
  animateRows();
}
