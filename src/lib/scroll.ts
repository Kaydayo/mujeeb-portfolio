// Smooth scrolling (Lenis) wired into GSAP ScrollTrigger, plus helpers every section uses.
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { reduceMotion } from "./dom";

gsap.registerPlugin(ScrollTrigger);

/** null when the visitor prefers reduced motion; native scrolling is used then. */
export const lenis: Lenis | null = reduceMotion ? null : new Lenis({ lerp: 0.085, smoothWheel: true });

if (lenis) {
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop(); // the boot screen owns the page until the visitor is "connected"
}

export const lockScroll = () => lenis?.stop();
export const unlockScroll = () => lenis?.start();

/** Smooth-scroll to an element or a pixel offset. */
export function scrollToTarget(target: HTMLElement | number, duration = 1.4) {
  if (lenis) lenis.scrollTo(target, { duration });
  else if (typeof target === "number") scrollTo({ top: target, behavior: "smooth" });
  else target.scrollIntoView({ behavior: "smooth" });
}

/** Scroll to a fraction (0..1) of a pinned section's scroll distance. */
export function scrollToPinProgress(trigger: Element, fraction: number, duration = 1.2) {
  const st = ScrollTrigger.getAll().find((s) => s.trigger === trigger && s.pin);
  if (st) scrollToTarget(st.start + (st.end - st.start) * fraction + 2, duration);
}

export { gsap, ScrollTrigger };
