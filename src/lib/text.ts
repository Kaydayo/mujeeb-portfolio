// Text effects: terminal scramble, and splitting a block into masked lines for the "lines rise in" reveal.

const GLYPHS = "█▓▒░<>/\\[]{}#$%&01=+*";

/** Resolve `text` into `el` left to right out of random glyphs. */
export function scramble(el: HTMLElement, text: string, dur = 700) {
  const start = performance.now();
  (function f(now: number) {
    const p = Math.min(1, (now - start) / dur);
    el.textContent = [...text].map((ch, i) => (ch === " " ? " " : i / text.length < p ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join("");
    if (p < 1) requestAnimationFrame(f);
  })(start);
}

/**
 * Re-wrap each child block of `el` into one masked span per rendered line.
 * Words are measured after layout, so call again on resize. Inline elements (logos, <em>) stay whole.
 * Returns the inner spans to animate (translate them from yPercent 105 to 0).
 */
export function splitLines(el: HTMLElement): HTMLElement[] {
  el.classList.remove("split");
  if (!el.dataset.src) el.dataset.src = el.innerHTML; else el.innerHTML = el.dataset.src;

  for (const block of [...el.children] as HTMLElement[]) {
    const atoms: Node[] = [];
    for (const n of [...block.childNodes]) {
      if (n.nodeType !== Node.TEXT_NODE) { atoms.push(n); continue; }
      for (const w of n.textContent!.split(/(\s+)/)) {
        if (!w) continue;
        if (/^\s+$/.test(w)) atoms.push(document.createTextNode(" "));
        else { const s = document.createElement("span"); s.textContent = w; atoms.push(s); }
      }
    }
    block.textContent = "";
    atoms.forEach((a) => block.appendChild(a));

    // group atoms by the vertical centre of the line they landed on
    const lines: Node[][] = []; let top: number | null = null, cur: Node[] | null = null;
    const tol = parseFloat(getComputedStyle(block).fontSize) * 0.5;
    for (const a of atoms) {
      if (a.nodeType === Node.TEXT_NODE) { cur?.push(a); continue; }
      const r = (a as Element).getBoundingClientRect(), t = r.top + r.height / 2;
      if (top === null || Math.abs(t - top) > tol) { top = t; cur = []; lines.push(cur); }
      cur!.push(a);
    }

    block.textContent = "";
    for (const l of lines) {
      const mask = document.createElement("span"), inner = document.createElement("span");
      mask.className = "lnm";
      while (l.length && l[l.length - 1].nodeType === Node.TEXT_NODE) l.pop();
      l.forEach((a) => inner.appendChild(a));
      mask.appendChild(inner); block.appendChild(mask);
    }
  }
  el.classList.add("split");
  return [...el.querySelectorAll<HTMLElement>(".lnm > span")];
}
