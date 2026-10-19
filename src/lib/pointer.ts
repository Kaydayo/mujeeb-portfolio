// Pointer state shared by the custom cursor and the hologram (which bends toward the mouse).
import { $ } from "./dom";

export const pointer = {
  x: innerWidth / 2, y: innerHeight / 2,   // last client position
  nx: 0, ny: 0,                            // normalised -1..1, for parallax
  inside: false,                           // false once the pointer leaves the window
};

/** The round cursor that follows the pointer and grows with a label over [data-cursor] elements. */
export function initCursor() {
  const cur = $("#cur"), label = $("#curl");
  let cx = pointer.x, cy = pointer.y;
  addEventListener("pointermove", (e) => {
    pointer.x = e.clientX; pointer.y = e.clientY; pointer.inside = true;
    pointer.nx = (e.clientX / innerWidth) * 2 - 1; pointer.ny = (e.clientY / innerHeight) * 2 - 1;
    const t = (e.target as Element).closest?.("[data-cursor]") as HTMLElement | null;
    cur.classList.toggle("big", !!t); if (t) label.textContent = t.dataset.cursor!;
  }, { passive: true });
  document.addEventListener("pointerleave", () => (pointer.inside = false));
  (function follow() {
    cx += (pointer.x - cx) * 0.22; cy += (pointer.y - cy) * 0.22;
    cur.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(follow);
  })();
}

/** Mark the custom cursor as big with a label (used by canvases that hit-test themselves). */
export function setCursorLabel(text: string | null) {
  $("#cur").classList.toggle("big", !!text);
  if (text) $("#curl").textContent = text;
}
