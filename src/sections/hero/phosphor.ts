// The terminal's phosphor colour (green / amber / blue / white), remembered per visitor.
import { $ } from "../../lib/dom";
import { sfx } from "../../lib/sound";

export const PHOSPHORS = [
  { name: "green", hex: "#41ff8b", rgb: [65, 255, 139] },
  { name: "amber", hex: "#ffb547", rgb: [255, 181, 71] },
  { name: "blue", hex: "#6ad8ff", rgb: [106, 216, 255] },
  { name: "white", hex: "#e8f1ff", rgb: [232, 241, 255] },
];

let index = 0;
try { index = Math.max(0, PHOSPHORS.findIndex((p) => p.name === localStorage.getItem("phos"))); } catch { /* storage blocked */ }

const listeners: ((hex: string) => void)[] = [];
export const phosphor = () => PHOSPHORS[index];
/** Called with the new colour whenever the visitor cycles the phosphor (the hologram re-tints). */
export const onPhosphorChange = (fn: (hex: string) => void) => listeners.push(fn);

function apply() {
  const p = phosphor(), root = document.documentElement.style;
  root.setProperty("--phos", p.hex);
  root.setProperty("--phos-rgb", p.rgb.join(","));
  $("#phosName").textContent = p.name;
  listeners.forEach((fn) => fn(p.hex));
}

export function initPhosphor() {
  $("#phosBtn").addEventListener("click", () => {
    index = (index + 1) % PHOSPHORS.length;
    try { localStorage.setItem("phos", phosphor().name); } catch { /* ignore */ }
    apply(); sfx("blip");
  });
  apply();
}
