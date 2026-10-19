"""Turn a portrait photo into hologram points: x, y, z, shade, jaw.

Background is removed by flood-filling the low-saturation grey that touches the
image border. Depth is a soft relief from the blurred subject mask plus a little
luminance detail. Shade is locally equalised luminance plus edges, so glasses,
eyes and lips read clearly as light.
"""
import sys, base64, json
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

src, out_bin, out_preview = sys.argv[1], sys.argv[2], sys.argv[3]
N = int(sys.argv[4]) if len(sys.argv) > 4 else 46000
im = Image.open(src).convert("RGB")
a = np.asarray(im).astype(np.float32)
H, W, _ = a.shape
crop = 8
a = a[crop:H - crop, crop:W - crop]
H, W, _ = a.shape

r, g, b = a[..., 0], a[..., 1], a[..., 2]
mx, mn = a.max(-1), a.min(-1)
sat = (mx - mn) / np.maximum(mx, 1)
val = mx
cand = (sat < 0.12) & (val > 120) & (val < 235)
lab, n = ndi.label(cand)
border = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
bg = np.isin(lab, list(border))
bg = ndi.binary_opening(bg, iterations=2)
subj = ~bg
subj = ndi.binary_closing(subj, iterations=3)
subj = ndi.binary_fill_holes(subj)
# keep the biggest blob only
lab2, n2 = ndi.label(subj)
if n2 > 1:
    sizes = ndi.sum(subj, lab2, range(1, n2 + 1))
    subj = lab2 == (1 + int(np.argmax(sizes)))

lum = 0.299 * r + 0.587 * g + 0.114 * b
# local contrast: subtract a heavy blur, divide by local std (cheap CLAHE stand-in)
mu = ndi.gaussian_filter(lum, 18)
sd = np.sqrt(np.maximum(ndi.gaussian_filter((lum - mu) ** 2, 18), 1))
loc = np.clip(0.5 + (lum - mu) / (3.2 * sd), 0, 1)
glob = (lum - lum[subj].min()) / (np.percentile(lum[subj], 99) - lum[subj].min() + 1e-6)
edges = np.hypot(ndi.sobel(ndi.gaussian_filter(lum, 1.2), 0), ndi.sobel(ndi.gaussian_filter(lum, 1.2), 1))
edges = np.clip(edges / np.percentile(edges[subj], 97), 0, 1)
shade = np.clip(0.18 + 0.55 * loc + 0.35 * np.clip(glob, 0, 1) + 0.45 * edges, 0, 1.3)

# relief depth: rounded from the mask, extra bulge for the head
soft = ndi.gaussian_filter(subj.astype(np.float32), 38)
yy, xx = np.mgrid[0:H, 0:W]
hx, hy = W * 0.5, H * 0.40
head = np.clip(1 - ((xx - hx) / (W * 0.30)) ** 2 - ((yy - hy) / (H * 0.40)) ** 2, 0, 1) ** 0.5
nose = np.exp(-(((xx - W * 0.5) / (W * 0.05)) ** 2 + ((yy - H * 0.47) / (H * 0.07)) ** 2))
depth = 0.16 * soft + 0.20 * head + 0.05 * nose + 0.025 * (glob - 0.5)

# jaw region (below the mouth line) for speech motion
mouth_y = H * 0.585
jaw = np.clip((yy - mouth_y) / (H * 0.03), 0, 1) * np.clip(1 - (yy - mouth_y) / (H * 0.17), 0, 1) \
    * np.clip(1 - np.abs(xx - W * 0.5) / (W * 0.16), 0, 1)

# sample points with density following shade (bright detail gets more points)
rng = np.random.default_rng(7)
ys, xs = np.nonzero(subj)
w = 0.25 + shade[ys, xs] ** 1.5
# fade out the bottom of the torso so the bust ends softly
w *= np.clip((H - ys) / (H * 0.12), 0.15, 1)
p = w / w.sum()
idx = rng.choice(len(xs), size=N, replace=True, p=p)
px = xs[idx] + rng.random(N) - 0.5
py = ys[idx] + rng.random(N) - 0.5
X = (px - W / 2) / W * 1.85
Y = 0.86 - py / H * 1.86
Z = depth[ys[idx], xs[idx]] + (rng.random(N) - 0.5) * 0.012
S = shade[ys[idx], xs[idx]]
J = jaw[ys[idx], xs[idx]]

q = np.empty(N * 5, dtype=np.int16)
q[0::5] = np.round(X * 10000); q[1::5] = np.round(Y * 10000); q[2::5] = np.round(Z * 10000)
q[3::5] = np.round(S * 10000); q[4::5] = np.round(J * 10000)
open(out_bin, "wb").write(q.tobytes())

# preview: front + three-quarter
pv = Image.new("RGB", (1200, 640), (3, 6, 4)); P = pv.load()
for k in range(N):
    for v, ang in ((0, 0.0), (1, 0.55)):
        u = X[k] * np.cos(ang) + Z[k] * np.sin(ang)
        cx = int(300 + v * 600 + u * 320); cy = int(320 - Y[k] * 320)
        if 0 <= cx < 1200 and 0 <= cy < 640:
            c = P[cx, cy]; s = S[k]
            P[cx, cy] = (min(255, c[0] + int(25 * s)), min(255, c[1] + int(150 * s)), min(255, c[2] + int(70 * s)))
pv.save(out_preview)
print("points", N, "subject px", int(subj.sum()), "bin bytes", q.nbytes)
