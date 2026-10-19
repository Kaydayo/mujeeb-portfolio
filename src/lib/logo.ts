import { ORGS } from "../content/orgs";
import type { OrgKey } from "../content/types";

/** Markup for a square logo tile: the real PNG over a monogram that shows if the PNG is missing. */
export function logo(key: OrgKey, size?: string): string {
  const o = ORGS[key] ?? { m: "?", c: "#0d100e", n: key };
  return `<span class="logo" style="--c:${o.c}${size ? `;--s:${size}` : ""}" title="${o.n}"><b>${o.m}</b><img src="logos/${key}.png" alt="${o.n} logo" onerror="this.remove()" loading="lazy"></span>`;
}

/** Load logo images for canvas drawing (posters). Missing files resolve to undefined. */
export function loadLogoImages(keys: OrgKey[]): Promise<Partial<Record<OrgKey, HTMLImageElement>>> {
  const out: Partial<Record<OrgKey, HTMLImageElement>> = {};
  return Promise.all(keys.map((k) => new Promise<void>((res) => {
    const im = new Image();
    im.onload = () => { out[k] = im; res(); };
    im.onerror = () => res();
    im.src = `logos/${k}.png`;
  }))).then(() => out);
}
