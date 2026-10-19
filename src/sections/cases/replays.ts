// Little monitor replays for each case file, drawn on a 2D canvas in VT323.
// Each replay is a pure function of time `t` (seconds), so it can be scrubbed or looped.

type Ctx = CanvasRenderingContext2D;
const ink = (a: number) => `rgba(236,240,236,${a})`;
const ease = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : 1 - Math.pow(1 - x, 3));

function text(c: Ctx, s: string, x: number, y: number, a: number, size = 15, align: CanvasTextAlign = "left") {
  c.fillStyle = ink(a); c.font = `${size}px VT323, monospace`; c.textAlign = align; c.textBaseline = "middle"; c.fillText(s, x, y);
}
function box(c: Ctx, x: number, y: number, w: number, h: number, a: number, fill = 0) {
  c.strokeStyle = ink(a); c.lineWidth = 1; c.beginPath();
  if (c.roundRect) c.roundRect(x, y, w, h, 4); else c.rect(x, y, w, h);
  if (fill) { c.fillStyle = ink(fill); c.fill(); }
  c.stroke();
}

/** Two runs of a fee job straddle midnight; the retry hits the existing period key and is skipped. */
function billing(c: Ctx, w: number, h: number, t: number) {
  const L = t % 7, bx = w * 0.46;
  c.setLineDash([3, 5]); c.strokeStyle = ink(0.3); c.beginPath(); c.moveTo(bx, 34); c.lineTo(bx, h - 16); c.stroke(); c.setLineDash([]);
  text(c, "OCT 31 23:59:58", bx - 10, 22, 0.5, 15, "right"); text(c, "NOV 01 00:00:01", bx + 10, 22, 0.5);
  const lx = w - 18 - w * 0.3; box(c, lx, h / 2 - 46, w * 0.3, 92, 0.5);
  text(c, "LEDGER.CHARGES", lx + 10, h / 2 - 30, 0.5);
  [{ y: h * 0.42, s: 0.3, l: "RUN #1" }, { y: h * 0.72, s: 2.6, l: "RUN #2 RETRY" }].forEach((r, k) => {
    const p = ease((L - r.s) / 1.5), x0 = 16, x1 = lx - 130, x = x0 + (x1 - x0) * p;
    const bounced = k === 1 && L > r.s + 1.5, bxp = bounced ? x1 - ease((L - r.s - 1.6) / 0.9) * 110 : x;
    box(c, bxp, r.y - 13, 116, 26, bounced ? 0.4 : 0.9, bounced ? 0 : 0.1); text(c, r.l, bxp + 58, r.y, bounced ? 0.45 : 1, 15, "center");
    if (p >= 1 && k === 0) { text(c, "charge:acct_7f3a:2026-10", lx + 10, h / 2 - 4, 1); text(c, "OK  CHARGED  N1,000.00", lx + 10, h / 2 + 18, 0.8); }
    if (bounced) text(c, "409 KEY EXISTS · SKIPPED", x1 + 110, r.y + 28, Math.sin(t * 12) > 0 ? 1 : 0.5, 15, "right");
  });
}

/** Five workers race for one Redis lock; only the holder gets the key, the rest back off. */
function lock(c: Ctx, w: number, h: number, t: number) {
  const cx = w * 0.64, cy = h / 2, N = 5, cyc = 1.8, holder = Math.floor(t / cyc) % N, ph = (t % cyc) / cyc;
  box(c, cx - 76, cy - 38, 152, 76, 0.8, 0.06);
  text(c, "REDIS", cx, cy - 20, 0.55, 15, "center"); text(c, "lock:resource", cx, cy, 1, 15, "center"); text(c, "ttl 5s", cx, cy + 20, 0.7, 15, "center");
  for (let i = 0; i < N; i++) {
    const y = 30 + i * ((h - 60) / (N - 1)), x = 30, on = i === holder;
    c.beginPath(); c.arc(x, y, 9, 0, 7); c.fillStyle = ink(on ? 1 : 0.06); c.fill(); c.strokeStyle = ink(on ? 1 : 0.4); c.stroke();
    text(c, "W" + (i + 1), x + 16, y, on ? 1 : 0.5);
    c.strokeStyle = ink(on ? 0.9 : 0.18); c.setLineDash(on ? [] : [3, 6]); c.beginPath(); c.moveTo(x + 40, y); c.quadraticCurveTo(cx - 120, y, cx - 78, cy); c.stroke(); c.setLineDash([]);
    text(c, on ? "OK  HOLDS 5s" : "nil retry", w - 10, y, on ? 1 : 0.35, 15, "right");
  }
  c.strokeStyle = ink(1); c.lineWidth = 2; c.beginPath(); c.arc(cx, cy, 52, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (1 - ph)); c.stroke(); c.lineWidth = 1;
}

/** Messy pasted IDs get normalised, junk is flagged, valid ones go out in batches of 25. */
const pasted = Array.from({ length: 36 }, (_, i) => {
  const u = crypto.randomUUID ? crypto.randomUUID() : "3f2a9c1e-77b0-4c2d-9e51-0b6d3a1f8e" + (10 + i), r = i % 7;
  return r === 3 ? { s: "item-" + (1000 + i), ok: false } : r === 5 ? { s: "  " + u.toUpperCase() + "\\r", ok: true } : { s: u + (r === 1 ? " \\r\\n" : ""), ok: true };
});
function revoke(c: Ctx, w: number, h: number, t: number) {
  const rows = 7, rh = (h - 40) / rows, sh = t * 1.1, base = Math.floor(sh), fr = sh - base;
  text(c, "PASTED INPUT", 14, 18, 0.45); text(c, "NORMALISED", w * 0.46, 18, 0.45);
  for (let k = -1; k < rows; k++) {
    const it = pasted[(base + k + 360) % pasted.length], y = 40 + (k + 1 - fr) * rh;
    if (y < 32 || y > h - 6) continue;
    text(c, it.s.slice(0, 24) + (it.s.length > 24 ? "…" : ""), 14, y, 0.55);
    const clean = it.s.replace(/\\r|\\n/g, "").trim().toLowerCase();
    text(c, it.ok ? clean.slice(0, 16) + "…" : "X NOT A UUID", w * 0.46, y, it.ok ? 1 : Math.sin(t * 10) > 0 ? 0.9 : 0.4);
  }
  const sent = Math.floor(t * 0.95), inBatch = sent % 25, batch = Math.floor(sent / 25), bw = 96, bx = w - bw - 14, by = h / 2 - 44;
  box(c, bx, by, bw, 88, 0.8); c.fillStyle = ink(0.18); c.fillRect(bx + 1, by + 87 - (86 * inBatch) / 25, bw - 2, (86 * inBatch) / 25);
  text(c, inBatch + "/25", bx + bw / 2, by + 34, 1, 22, "center"); text(c, "BATCH #" + (batch + 1), bx + bw / 2, by + 60, 0.6, 15, "center");
  if (inBatch < 2 && batch) text(c, "SENT x25", bx + bw / 2, by + 106, 1, 15, "center");
}

/** A queue that keeps re-sorting itself by time left until each deadline. */
const reasons = ["review", "follow-up", "approval", "reconcile", "report", "handover"];
const disputesState = reasons.map((r, i) => ({ r, id: "task_" + (0x3a10 + i * 917).toString(16), due: 20 + i * 31 + (i % 2) * 17, left: 0, y: undefined as number | undefined }));
function disputes(c: Ctx, w: number, h: number, t: number) {
  disputesState.forEach((it) => { it.left = it.due - ((t * 9) % 200); if (it.left < 2) it.left += 200; });
  const sorted = [...disputesState].sort((a, b) => a.left - b.left);
  sorted.forEach((it, i) => (it.y = it.y === undefined ? i : it.y + (i - it.y) * 0.12));
  const rh = (h - 36) / 5.4; text(c, "DEADLINE-AWARE QUEUE", 14, 16, 0.45);
  for (const it of sorted) {
    const y = 32 + it.y! * rh; if (y > h - 8) continue;
    const urgent = it.left < 48, m = y + (rh - 7) / 2;
    box(c, 10, y, w - 20, rh - 7, urgent ? 0.9 : 0.25, urgent ? 0.08 : 0);
    text(c, it.id, 22, m, 1); text(c, it.r, w * 0.3, m, 0.55);
    const bw = w * 0.18, frac = Math.min(it.left / 200, 1);
    c.fillStyle = ink(0.12); c.fillRect(w - 70 - bw, m - 2, bw, 4); c.fillStyle = ink(urgent ? 1 : 0.7); c.fillRect(w - 70 - bw, m - 2, bw * frac, 4);
    text(c, Math.round(it.left) + "h", w - 22, m, urgent ? (Math.sin(t * 8) > 0 ? 1 : 0.5) : 0.7, 15, "right");
  }
}

export const REPLAYS = { billing, lock, revoke, disputes };
