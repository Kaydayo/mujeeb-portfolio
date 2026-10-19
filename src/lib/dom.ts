// Small DOM helpers and environment flags used everywhere.

export const $ = <T extends HTMLElement = HTMLElement>(sel: string): T => document.querySelector(sel) as T;
export const $$ = <T extends HTMLElement = HTMLElement>(sel: string): T[] => [...document.querySelectorAll(sel)] as T[];

/** The visitor asked for less motion: skip the boot typing, physics drops and replays. */
export const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
/** Touch-first device: lighter hologram, no magnetic buttons. */
export const coarsePointer = matchMedia("(pointer: coarse)").matches;

/** Run `fn` only while `el` is on screen. Returns a getter for the current state. */
export function whileVisible(el: Element, opts: IntersectionObserverInit = {}): () => boolean {
  let on = false;
  new IntersectionObserver(([e]) => (on = e.isIntersecting), opts).observe(el);
  return () => on;
}
