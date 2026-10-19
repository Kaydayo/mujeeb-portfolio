//! Hologram engine, compiled to WebAssembly.
//!
//! 1. `gen_bust` samples points on the surface of a signed-distance-field head
//!    and shoulders (Newton projection onto the zero level set), with per-point
//!    Lambert shading and a jaw weight so the mouth can move while speaking.
//! 2. `step` runs spring physics every frame: points chase their home position
//!    (+ breathing, jaw, glitch bands) and are pushed away from the cursor.
//! JS reads POS straight out of linear memory into a Three.js BufferAttribute.
#![no_std]

#[panic_handler]
fn panic(_: &core::panic::PanicInfo) -> ! {
    core::arch::wasm32::unreachable()
}

const MAXP: usize = 60000;

static mut HOME: [f32; MAXP * 3] = [0.0; MAXP * 3];
static mut POS: [f32; MAXP * 3] = [0.0; MAXP * 3];
static mut VEL: [f32; MAXP * 3] = [0.0; MAXP * 3];
static mut SHADE: [f32; MAXP] = [0.0; MAXP];
static mut JAW: [f32; MAXP] = [0.0; MAXP];
static mut COUNT: usize = 0;
static mut RNG: u32 = 0x1234567;
static mut BAND_Y: f32 = 0.0;
static mut BAND_H: f32 = 0.0;
static mut BAND_X: f32 = 0.0;
static mut BAND_T: f32 = 0.0;

// ------------------------------------------------------------------ maths

fn floor(x: f32) -> f32 { let t = (x as i32) as f32; if t > x { t - 1.0 } else { t } }
fn sqrt(x: f32) -> f32 {
    if x <= 0.0 { return 0.0; }
    let mut y = f32::from_bits((x.to_bits() >> 1) + 0x1fbd_1df5);
    y = 0.5 * (y + x / y);
    y = 0.5 * (y + x / y);
    0.5 * (y + x / y)
}
fn abs(x: f32) -> f32 { if x < 0.0 { -x } else { x } }
fn min(a: f32, b: f32) -> f32 { if a < b { a } else { b } }
fn max(a: f32, b: f32) -> f32 { if a > b { a } else { b } }
fn clamp(x: f32, a: f32, b: f32) -> f32 { min(max(x, a), b) }
fn mix(a: f32, b: f32, t: f32) -> f32 { a + (b - a) * t }
fn sin(x: f32) -> f32 {
    const PI: f32 = 3.14159265;
    const TAU: f32 = 6.2831853;
    let x = x - TAU * floor((x + PI) / TAU);
    let y = 1.27323954 * x - 0.40528473 * x * abs(x);
    0.225 * (y * abs(y) - y) + y
}
fn rand() -> f32 {
    unsafe {
        let mut x = RNG;
        x ^= x << 13; x ^= x >> 17; x ^= x << 5;
        RNG = x;
        (x >> 8) as f32 / 16_777_216.0
    }
}

// ------------------------------------------------------------------ SDF bust

type V = [f32; 3];
fn len(v: V) -> f32 { sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]) }
fn sub(a: V, b: V) -> V { [a[0] - b[0], a[1] - b[1], a[2] - b[2]] }

fn ellipsoid(p: V, c: V, r: V) -> f32 {
    let q = sub(p, c);
    let k0 = len([q[0] / r[0], q[1] / r[1], q[2] / r[2]]);
    let k1 = len([q[0] / (r[0] * r[0]), q[1] / (r[1] * r[1]), q[2] / (r[2] * r[2])]);
    if k1 < 1e-6 { return -min(r[0], min(r[1], r[2])); }
    k0 * (k0 - 1.0) / k1
}
fn sphere(p: V, c: V, r: f32) -> f32 { len(sub(p, c)) - r }
fn capsule(p: V, a: V, b: V, r: f32) -> f32 {
    let pa = sub(p, a);
    let ba = sub(b, a);
    let h = clamp((pa[0] * ba[0] + pa[1] * ba[1] + pa[2] * ba[2]) / (ba[0] * ba[0] + ba[1] * ba[1] + ba[2] * ba[2]), 0.0, 1.0);
    len([pa[0] - ba[0] * h, pa[1] - ba[1] * h, pa[2] - ba[2] * h]) - r
}
fn smin(a: f32, b: f32, k: f32) -> f32 {
    let h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    mix(b, a, h) - k * h * (1.0 - h)
}
fn smax(a: f32, b: f32, k: f32) -> f32 { -smin(-a, -b, k) }

/// Head-and-shoulders bust, face looking down +z, roughly 1.8 units tall.
fn bust(p: V) -> f32 {
    let x = abs(p[0]);
    let q = [x, p[1], p[2]];
    // cranium + hair volume
    let mut d = ellipsoid(p, [0.0, 0.36, -0.02], [0.30, 0.37, 0.34]);
    d = smin(d, ellipsoid(p, [0.0, 0.47, -0.06], [0.315, 0.31, 0.33]), 0.06);
    // cheeks, jaw, chin
    d = smin(d, ellipsoid(p, [0.0, 0.14, 0.07], [0.235, 0.24, 0.25]), 0.10);
    d = smin(d, ellipsoid(p, [0.0, 0.0, 0.13], [0.13, 0.11, 0.15]), 0.08);
    // brow ridge
    d = smin(d, ellipsoid(q, [0.1, 0.36, 0.25], [0.11, 0.035, 0.06]), 0.05);
    // nose bridge + tip + nostrils
    d = smin(d, capsule(p, [0.0, 0.33, 0.29], [0.0, 0.2, 0.37], 0.034), 0.04);
    d = smin(d, sphere(p, [0.0, 0.19, 0.37], 0.05), 0.03);
    d = smin(d, ellipsoid(q, [0.14, 0.21, 0.2], [0.09, 0.06, 0.08]), 0.06);
    d = smin(d, sphere(q, [0.035, 0.18, 0.33], 0.035), 0.02);
    // eye sockets, then eyeballs
    d = smax(d, -ellipsoid(q, [0.105, 0.3, 0.29], [0.07, 0.045, 0.06]), 0.035);
    d = smin(d, sphere(q, [0.105, 0.295, 0.255], 0.045), 0.012);
    // lips and mouth line
    d = smin(d, ellipsoid(p, [0.0, 0.095, 0.305], [0.085, 0.022, 0.035]), 0.02);
    d = smin(d, ellipsoid(p, [0.0, 0.05, 0.3], [0.075, 0.024, 0.035]), 0.02);
    d = smax(d, -ellipsoid(p, [0.0, 0.073, 0.335], [0.07, 0.006, 0.04]), 0.008);
    // ears
    d = smin(d, ellipsoid(q, [0.3, 0.26, 0.0], [0.035, 0.085, 0.06]), 0.03);
    // neck
    d = smin(d, capsule(p, [0.0, -0.02, -0.03], [0.0, -0.32, -0.03], 0.145), 0.1);
    // shoulders and chest
    d = smin(d, ellipsoid(p, [0.0, -0.5, -0.04], [0.72, 0.22, 0.28]), 0.16);
    d = smin(d, ellipsoid(q, [0.44, -0.5, -0.04], [0.3, 0.17, 0.23]), 0.12);
    d = smin(d, ellipsoid(p, [0.0, -0.8, 0.0], [0.62, 0.36, 0.3]), 0.12);
    // collar
    d = smin(d, capsule(q, [0.0, -0.34, 0.13], [0.17, -0.29, 0.06], 0.025), 0.05);
    // flat bottom cut
    smax(d, -(p[1] + 0.98), 0.02)
}

fn grad(p: V) -> V {
    let e = 0.0015;
    let gx = bust([p[0] + e, p[1], p[2]]) - bust([p[0] - e, p[1], p[2]]);
    let gy = bust([p[0], p[1] + e, p[2]]) - bust([p[0], p[1] - e, p[2]]);
    let gz = bust([p[0], p[1], p[2] + e]) - bust([p[0], p[1], p[2] - e]);
    let l = max(len([gx, gy, gz]), 1e-6);
    [gx / l, gy / l, gz / l]
}

// ------------------------------------------------------------------ exports

#[unsafe(no_mangle)] pub extern "C" fn pos_ptr() -> *const f32 { (&raw const POS) as *const f32 }
#[unsafe(no_mangle)] pub extern "C" fn home_ptr() -> *mut f32 { (&raw mut HOME) as *mut f32 }
#[unsafe(no_mangle)] pub extern "C" fn shade_ptr() -> *mut f32 { (&raw mut SHADE) as *mut f32 }
#[unsafe(no_mangle)] pub extern "C" fn jaw_ptr() -> *mut f32 { (&raw mut JAW) as *mut f32 }
#[unsafe(no_mangle)] pub extern "C" fn max_points() -> u32 { MAXP as u32 }
#[unsafe(no_mangle)] pub extern "C" fn count() -> u32 { unsafe { COUNT as u32 } }
#[unsafe(no_mangle)] pub extern "C" fn set_count(n: u32) { unsafe { COUNT = (n as usize).min(MAXP); } }

/// Sample `n` surface points. Returns how many were accepted.
#[unsafe(no_mangle)]
pub extern "C" fn gen_bust(n: u32, seed: u32) -> u32 {
    unsafe { RNG = seed | 1; }
    let n = (n as usize).min(MAXP);
    let home = unsafe { &mut *(&raw mut HOME) };
    let shade = unsafe { &mut *(&raw mut SHADE) };
    let jaw = unsafe { &mut *(&raw mut JAW) };
    let light = { let l = [0.35f32, 0.55, 0.75]; let m = len(l); [l[0] / m, l[1] / m, l[2] / m] };
    let mut k = 0usize;
    let mut tries = 0usize;
    while k < n && tries < n * 12 {
        tries += 1;
        // bias ~45% of samples to the face so it reads at a glance
        let face = rand() < 0.45;
        let mut p = if face {
            [(rand() - 0.5) * 0.6, -0.05 + rand() * 0.55, 0.05 + rand() * 0.35]
        } else {
            [(rand() - 0.5) * 1.7, -1.0 + rand() * 1.85, (rand() - 0.5) * 0.9]
        };
        for _ in 0..7 {
            let d = bust(p);
            let g = grad(p);
            p = [p[0] - g[0] * d, p[1] - g[1] * d, p[2] - g[2] * d];
        }
        if abs(bust(p)) > 0.004 { continue; }
        if face && p[2] < 0.05 { continue; }
        let g = grad(p);
        let lam = max(0.0, g[0] * light[0] + g[1] * light[1] + g[2] * light[2]);
        // rim light from behind-left gives the silhouette a halo
        let rim = max(0.0, 1.0 - abs(g[2])) * 0.35;
        shade[k] = clamp(0.18 + lam * 0.85 + rim, 0.0, 1.25);
        // lower lip + jaw drop when the mouth opens
        let w = clamp((0.085 - p[1]) / 0.12, 0.0, 1.0)
            * clamp((p[2] - 0.0) / 0.22, 0.0, 1.0)
            * clamp((p[1] + 0.12) / 0.08, 0.0, 1.0)
            * clamp((0.26 - abs(p[0])) / 0.1, 0.0, 1.0);
        jaw[k] = w;
        home[k * 3] = p[0];
        home[k * 3 + 1] = p[1];
        home[k * 3 + 2] = p[2];
        k += 1;
    }
    unsafe { COUNT = k; }
    scatter(3.0);
    k as u32
}

/// Throw every point outward so the next `step`s reassemble the figure.
#[unsafe(no_mangle)]
pub extern "C" fn scatter(radius: f32) {
    let n = unsafe { COUNT };
    let pos = unsafe { &mut *(&raw mut POS) };
    let vel = unsafe { &mut *(&raw mut VEL) };
    let home = unsafe { &*(&raw const HOME) };
    for i in 0..n {
        let o = i * 3;
        let a = rand() * 6.2831853;
        let r = radius * (0.4 + rand());
        pos[o] = home[o] + sin(a) * r;
        pos[o + 1] = home[o + 1] + (rand() - 0.5) * radius * 1.4;
        pos[o + 2] = home[o + 2] + sin(a + 1.5707963) * r;
        vel[o] = 0.0; vel[o + 1] = 0.0; vel[o + 2] = 0.0;
    }
}

/// One physics tick.
/// mouth 0..1, (cx, cy) cursor on the z=0 plane in model space, cr cursor radius (0 = off),
/// glitch 0..1 chance-ish of a horizontal tear, stiff spring constant.
#[unsafe(no_mangle)]
pub extern "C" fn step(dt: f32, t: f32, mouth: f32, cx: f32, cy: f32, cr: f32, glitch: f32, stiff: f32) {
    let n = unsafe { COUNT };
    let pos = unsafe { &mut *(&raw mut POS) };
    let vel = unsafe { &mut *(&raw mut VEL) };
    let home = unsafe { &*(&raw const HOME) };
    let jaw = unsafe { &*(&raw const JAW) };
    let dt = min(dt, 0.033);

    // occasional horizontal tear band
    unsafe {
        BAND_T -= dt;
        if BAND_T <= 0.0 {
            if rand() < glitch {
                BAND_Y = -1.0 + rand() * 1.85;
                BAND_H = 0.02 + rand() * 0.08;
                BAND_X = (rand() - 0.5) * 0.25;
                BAND_T = 0.06 + rand() * 0.12;
            } else {
                BAND_H = 0.0;
                BAND_T = 0.1 + rand() * 0.4;
            }
        }
    }
    let (by, bh, bx) = unsafe { (BAND_Y, BAND_H, BAND_X) };

    let breathe = sin(t * 1.3) * 0.006;
    let sway = sin(t * 0.45) * 0.012;
    let k = stiff;
    let damp = 1.0 - min(1.0, 7.5 * dt);
    let cr2 = cr * cr;

    for i in 0..n {
        let o = i * 3;
        let hx = home[o];
        let hy = home[o + 1];
        let hz = home[o + 2];
        let below = clamp(-hy, 0.0, 1.0);
        let mut tx = hx * (1.0 + breathe * below * 2.0) + sway * clamp(hy + 0.3, 0.0, 1.0);
        let mut ty = hy + breathe * below - jaw[i] * mouth * 0.07;
        let tz = hz;
        if bh > 0.0 && abs(hy - by) < bh { tx += bx; }
        if bh > 0.0 && abs(hy - by) < bh * 0.4 { ty += bx * 0.08; }

        let mut ax = (tx - pos[o]) * k;
        let mut ay = (ty - pos[o + 1]) * k;
        let mut az = (tz - pos[o + 2]) * k;

        if cr > 0.0 {
            let dx = pos[o] - cx;
            let dy = pos[o + 1] - cy;
            let d2 = dx * dx + dy * dy;
            if d2 < cr2 {
                let d = sqrt(d2) + 1e-4;
                let f = (1.0 - d / cr) * 9.0;
                ax += dx / d * f;
                ay += dy / d * f;
                az += f * 0.5 * if hz > 0.0 { 1.0 } else { -1.0 };
            }
        }
        vel[o] = (vel[o] + ax * dt) * damp;
        vel[o + 1] = (vel[o + 1] + ay * dt) * damp;
        vel[o + 2] = (vel[o + 2] + az * dt) * damp;
        pos[o] += vel[o] * dt;
        pos[o + 1] += vel[o + 1] * dt;
        pos[o + 2] += vel[o + 2] * dt;
    }
}
