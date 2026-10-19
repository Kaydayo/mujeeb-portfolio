// Contact card (spotlight follows the pointer, magnetic "message me" button that opens WhatsApp)
// and the footer marquee whose speed follows scroll velocity.
import { $, coarsePointer } from "../lib/dom";
import { gsap, ScrollTrigger } from "../lib/scroll";
import { scramble } from "../lib/text";
import { sfx } from "../lib/sound";
import { CONTACT } from "../content/profile";

export function initContact() {
  const mail = $<HTMLAnchorElement>("#mail"); mail.textContent = CONTACT.email; mail.href = "mailto:" + CONTACT.email;
  const card = $("#card");
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px"); card.style.setProperty("--my", e.clientY - r.top + "px");
  });
  const heading = $("#connect");
  heading.addEventListener("pointerenter", () => scramble(heading, "Let's connect", 600));
  ScrollTrigger.create({ trigger: heading, start: "top 80%", once: true, onEnter: () => scramble(heading, "Let's connect", 1100) });

  const btn = $<HTMLAnchorElement>("#writeBtn");
  btn.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Mujeeb, I found you through your portfolio.")}`;
  if (!coarsePointer) {
    btn.addEventListener("pointermove", (e) => { const r = btn.getBoundingClientRect(); gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.35, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.4 }); });
    btn.addEventListener("pointerleave", () => gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,.4)" }));
  }
  btn.addEventListener("click", () => sfx("blip"));
}

// ---------------------------------------------------------------- footer marquee
let marq: HTMLElement, x = 0, lastY = scrollY, velocity = 0;
export function initMarquee() { marq = $("#marq"); marq.innerHTML += marq.innerHTML; }
/** Called every frame. */
export function tickMarquee() {
  const y = scrollY; velocity += (y - lastY - velocity) * 0.1; lastY = y;
  x -= 1.1 + Math.abs(velocity) * 0.25;
  const half = marq.scrollWidth / 2; if (-x > half) x += half;
  marq.style.transform = `translateX(${x}px)`;
}
