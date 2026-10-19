// Hero: Lagos clock, film grain, the phosphor switch, the holotape and the boot.
import { $, reduceMotion } from "../../lib/dom";
import { initPhosphor } from "./phosphor";
import { initHolotape } from "./holotape";
import { initBootSkip, runBoot } from "./boot";
import { isHeroVisible } from "./hologram";

const lagosTime = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit" });

function tickClock() {
  const t = lagosTime.format(new Date());
  $("#clock").textContent = t; $("#bootclock").textContent = "lagos " + t;
  const now = new Date(), dayOfYear = Math.floor((+now - +new Date(now.getFullYear(), 0, 0)) / 864e5);
  $("#dayline").textContent = `${now.toLocaleDateString("en-GB", { weekday: "short", month: "short", day: "2-digit" })} · day ${String(dayOfYear).padStart(3, "0")}`;
}

/** A tile of random noise, jittered every few frames while the hero is on screen. */
function initGrain() {
  const size = 180, g = document.createElement("canvas"); g.width = g.height = size;
  const x = g.getContext("2d")!, im = x.createImageData(size, size), d = im.data;
  for (let i = 0; i < d.length; i += 4) { const v = Math.random() * 255; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; }
  x.putImageData(im, 0, 0);
  const el = $("#grain"); el.style.backgroundImage = `url(${g.toDataURL()})`;
  if (reduceMotion) return;
  let k = 0;
  (function jitter() {
    if (isHeroVisible() && k++ % 3 === 0) el.style.transform = `translate(${(Math.random() * size) | 0}px, ${(Math.random() * size) | 0}px)`;
    requestAnimationFrame(jitter);
  })();
}

export function initHero() {
  tickClock(); setInterval(tickClock, 15000);
  initGrain();
  initPhosphor();
  initHolotape();
  initBootSkip();
}

export { runBoot };
