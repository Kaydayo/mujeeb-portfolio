// Case files: a pinned glass list that blurs past as you scroll, beside a monitor replaying the active case.
import { $ } from "../../lib/dom";
import { ScrollTrigger } from "../../lib/scroll";
import { CASES } from "../../content/experience";
import { REPLAYS } from "./replays";

let active = 0, items: HTMLElement[] = [];

function layout(f: number) {
  const h = Math.min(innerHeight * 0.64, 560), step = innerWidth < 900 ? h * 0.42 : h * 0.52;
  items.forEach((el, i) => {
    const d = i - f, ad = Math.abs(d);
    el.style.transform = `translateY(${d * step - 30}px)`;
    el.style.filter = `blur(${Math.min(ad * 7, 12).toFixed(1)}px)`;
    el.style.opacity = Math.max(0, 1 - ad * 0.55).toFixed(3);
  });
  active = Math.round(f);
  [...$("#caseDots").children].forEach((d, k) => d.classList.toggle("on", k === active));
  $("#caseN").textContent = `0${active + 1}/0${CASES.length}`;
  $("#caseLab").textContent = `replay · ${CASES[active].f}.log`;
}

/** Size the canvas for the device pixel ratio and clear it. */
function stage(cv: HTMLCanvasElement): [CanvasRenderingContext2D, number, number] {
  const d = Math.min(devicePixelRatio, 2), w = cv.clientWidth, h = cv.clientHeight;
  if (cv.width !== Math.round(w * d)) { cv.width = Math.round(w * d); cv.height = Math.round(h * d); }
  const c = cv.getContext("2d")!; c.setTransform(d, 0, 0, d, 0, 0); c.clearRect(0, 0, w, h);
  return [c, w, h];
}

/** Draw the replay for the active case at time t (seconds). Called from the main frame loop while visible. */
export function drawCaseReplay(t: number) {
  const [c, w, h] = stage($<HTMLCanvasElement>("#caseCv"));
  REPLAYS[CASES[active].f](c, w, h, t);
}
export const casesOnScreen = () => { const r = $("#cases").getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; };

export function initCases() {
  const list = $("#caseList"), dots = $("#caseDots");
  for (const c of CASES) {
    list.insertAdjacentHTML("beforeend", `<article class="citem"><h3>${c.t}</h3><div class="tags">${c.tags}</div><p>${c.p}</p></article>`);
    dots.appendChild(document.createElement("i"));
  }
  items = [...list.children] as HTMLElement[];
  layout(0);
  ScrollTrigger.create({ trigger: "#cases", start: "top top", end: "+=" + CASES.length * 70 + "%", pin: true, scrub: true, onUpdate: (self) => layout(self.progress * (CASES.length - 1)) });
  drawCaseReplay(2);
}
