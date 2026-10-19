// Draws each "On record" poster onto a 2D canvas from its PosterDesign (src/content/records.ts).
// The canvas then becomes a texture on a crumpled paper mesh (wall.ts) and the image on the record page.
import type { OrgKey, PosterDesign } from "../../content/types";

export const POSTER_W = 1024, POSTER_H = 1434;
const W = POSTER_W, H = POSTER_H;
type Ctx = CanvasRenderingContext2D;
type Logos = Partial<Record<OrgKey, HTMLImageElement>>;

const font = (weight: number, size: number, family = "Archivo") => `${weight} ${size}px "${family}", "Arial Black", Impact, sans-serif`;
function stretch(ctx: Ctx, v: string) { try { (ctx as any).fontStretch = v; } catch { /* older browsers */ } }
/** Seeded random, so every visit prints the same grain. */
const seeded = (s: number) => () => (s = (s * 16807) % 2147483647) / 2147483647;

/** Letters spread across a width, each tipped and bounced a little, like hand-set wood type. */
function woodType(ctx: Ctx, text: string, cx: number, y: number, width: number, size: number, fill: string, o: { amp?: number; bounce?: number; seed?: number; shadow?: string; sx?: number; sy?: number } = {}) {
  stretch(ctx, "expanded"); ctx.font = font(900, size); ctx.textBaseline = "alphabetic"; ctx.textAlign = "center";
  const chars = [...text], ws = chars.map((ch) => ctx.measureText(ch).width), k = width / ws.reduce((a, b) => a + b, 0);
  ctx.save(); ctx.translate(cx - width / 2, y); ctx.scale(k, 1);
  let x = 0;
  chars.forEach((ch, i) => {
    const tilt = (o.amp || 0) * Math.sin(i * 1.9 + (o.seed || 0)), dy = (o.bounce || 0) * Math.sin(i * 2.3 + (o.seed || 0) * 1.3);
    ctx.save(); ctx.translate(x + ws[i] / 2, dy); ctx.rotate(tilt);
    if (o.shadow) { ctx.fillStyle = o.shadow; ctx.fillText(ch, o.sx || 10, o.sy || 10); }
    ctx.fillStyle = fill; ctx.fillText(ch, 0, 0); ctx.restore(); x += ws[i];
  });
  ctx.restore(); stretch(ctx, "normal");
}

/** Letter-spaced capitals, centred on cx. */
function tracked(ctx: Ctx, text: string, cx: number, y: number, size: number, color: string, track = 0.22, weight = 700) {
  ctx.font = font(weight, size); ctx.fillStyle = color; ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  const chars = [...text.toUpperCase()], ws = chars.map((c) => ctx.measureText(c).width);
  let x = cx - (ws.reduce((a, b) => a + b, 0) + track * size * (chars.length - 1)) / 2;
  chars.forEach((c, i) => { ctx.fillText(c, x, y); x += ws[i] + track * size; });
}

function wrap(ctx: Ctx, text: string, maxW: number) {
  const lines: string[] = []; let cur = "";
  for (const w of text.split(" ")) { const t = cur ? cur + " " + w : w; if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t; }
  if (cur) lines.push(cur);
  return lines;
}
function roundRect(ctx: Ctx, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath(); ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function grain(ctx: Ctx) {
  const r = seeded(7);
  for (let i = 0; i < 9000; i++) { ctx.fillStyle = r() > 0.5 ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)"; ctx.fillRect(r() * W, r() * H, 2, 2); }
}

/** White rounded plate with the institution's logo (or its initials if the PNG is missing). */
function logoPlate(ctx: Ctx, logos: Logos, key: OrgKey, cx: number, cy: number, size: number, ink: string) {
  ctx.save(); ctx.shadowColor = "rgba(0,0,0,.18)"; ctx.shadowBlur = 30; ctx.shadowOffsetY = 12;
  roundRect(ctx, cx - size / 2, cy - size / 2, size, size, 36); ctx.fillStyle = "#fff"; ctx.fill(); ctx.restore();
  const im = logos[key];
  if (im) { ctx.save(); roundRect(ctx, cx - size / 2, cy - size / 2, size, size, 36); ctx.clip(); ctx.drawImage(im, cx - size / 2, cy - size / 2, size, size); ctx.restore(); }
  else { ctx.fillStyle = ink; ctx.font = font(900, size * 0.3); ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(key.slice(0, 2).toUpperCase(), cx, cy); }
}

/** A sheet of paper with lines and a rising chart, for the publication poster. */
function paperIcon(ctx: Ctx) {
  ctx.save(); ctx.translate(W / 2, 250); ctx.rotate(-0.06);
  ctx.shadowColor = "rgba(0,0,0,.2)"; ctx.shadowBlur = 30; ctx.shadowOffsetY = 12; ctx.fillStyle = "#fff"; ctx.fillRect(-120, -150, 240, 300); ctx.shadowColor = "transparent";
  ctx.fillStyle = "#0b1b4d"; for (let i = 0; i < 5; i++) ctx.fillRect(-90, -110 + i * 26, i === 0 ? 180 : 150 - i * 8, 10);
  ctx.strokeStyle = "#2f5bff"; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(-90, 110); ctx.lineTo(-40, 70); ctx.lineTo(10, 85); ctx.lineTo(90, 20); ctx.stroke();
  ctx.fillStyle = "#ffd23f"; for (const [x, y] of [[-90, 110], [-40, 70], [10, 85], [90, 20]]) { ctx.beginPath(); ctx.arc(x, y, 11, 0, 7); ctx.fill(); }
  ctx.restore();
}

function motif(ctx: Ctx, kind: PosterDesign["motif"], color: string) {
  ctx.save();
  if (kind === "rings") {
    ctx.globalAlpha = 0.14; ctx.strokeStyle = color; ctx.lineWidth = 22;
    for (let r = 120; r < 1100; r += 70) { ctx.beginPath(); ctx.arc(W / 2, 250, r, 0, 7); ctx.stroke(); }
  } else {
    ctx.globalAlpha = 0.12; ctx.fillStyle = color;
    for (let x = -H; x < W; x += 90) { ctx.beginPath(); ctx.moveTo(x, H); ctx.lineTo(x + 40, H); ctx.lineTo(x + 40 + H, 0); ctx.lineTo(x + H, 0); ctx.fill(); }
  }
  ctx.restore();
}

/** One template, every qualification: who awarded it, what it is, what it means. */
export function drawPoster(ctx: Ctx, d: PosterDesign, logos: Logos, seed: number) {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = d.bg; ctx.fillRect(0, 0, W, H);
  motif(ctx, d.motif, d.motifColor);

  // who awarded it
  if (d.logos?.length) {
    const n = d.logos.length, size = n > 1 ? 250 : 300, gap = 40, total = n * size + (n - 1) * gap;
    d.logos.forEach((k, i) => logoPlate(ctx, logos, k, W / 2 - total / 2 + size / 2 + i * (size + gap), 250, size, d.ink));
  } else paperIcon(ctx);
  ctx.font = font(700, 26);
  const kicker = wrap(ctx, d.kicker.toUpperCase(), 820);
  kicker.forEach((l, i) => tracked(ctx, l, W / 2, 470 + i * 40, 26, d.paper, 0.18));

  // what it is
  const by = 470 + kicker.length * 40;
  woodType(ctx, d.big, W / 2, by + 190, Math.min(880, d.big.length * 150), d.bigSize, d.accent, { amp: 0.05, bounce: 12, seed, shadow: d.ink, sx: 10, sy: 12 });
  ctx.font = `italic 400 76px "Instrument Serif", Georgia, serif`; ctx.fillStyle = d.paper; ctx.textAlign = "center"; ctx.textBaseline = "alphabetic";
  const field = wrap(ctx, d.field, 860);
  field.forEach((l, i) => ctx.fillText(l, W / 2, by + 290 + i * 76));

  // what it means
  const my = by + 290 + (field.length - 1) * 76 + 60;
  ctx.font = font(500, 34);
  const meaning = wrap(ctx, d.meaning, 760);
  roundRect(ctx, 90, my, W - 180, 96 + meaning.length * 44, 26); ctx.fillStyle = d.paper; ctx.fill();
  tracked(ctx, "What it means", W / 2, my + 52, 22, d.bg, 0.3);
  ctx.fillStyle = d.ink; ctx.textAlign = "center"; ctx.font = font(500, 34);
  meaning.forEach((l, i) => ctx.fillText(l, W / 2, my + 100 + i * 44));

  // dates and place
  ctx.fillStyle = d.ink; ctx.fillRect(0, H - 110, W, 110);
  tracked(ctx, d.foot, W / 2, H - 46, 28, d.paper, 0.3);
  grain(ctx);
}

/** Fonts the posters use; wait for these before drawing so text doesn't fall back. */
export const POSTER_FONTS = ["900 100px Archivo", "700 30px Archivo", "500 30px Archivo", "400 30px 'Instrument Serif'", "italic 400 30px 'Instrument Serif'"];
