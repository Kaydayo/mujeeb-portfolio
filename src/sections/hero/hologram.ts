// The hologram: a Rust/WebAssembly particle engine (holo/src/lib.rs) rendered with Three.js.
// WASM owns the particle positions; Three reads them straight out of WASM memory every frame.
import * as THREE from "three";
import { $, coarsePointer } from "../../lib/dom";
import { pointer } from "../../lib/pointer";
import { phosphor, onPhosphorChange } from "./phosphor";
import { voice, tickVoice } from "./holotape";

/** Exports of holo.wasm (see holo/src/lib.rs). */
interface HoloWasm {
  memory: WebAssembly.Memory;
  pos_ptr(): number; home_ptr(): number; shade_ptr(): number; jaw_ptr(): number;
  max_points(): number; count(): number; set_count(n: number): void;
  gen_bust(n: number): number; scatter(amount: number): void;
  step(dt: number, t: number, mouth: number, cx: number, cy: number, cr: number, glitch: number, stiffness: number): void;
}

let H: HoloWasm;
let pointCount = 0;
let assembled = false;          // false while booting: points drift loosely; true: they snap into the face
let heroVisible = true;

export const isHeroVisible = () => heroVisible;
export const markAssembled = () => (assembled = true);
export const scatter = (amount: number) => H?.scatter(amount);

async function fetchBytes(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return new Uint8Array(await res.arrayBuffer());
}

/** Instantiate the WASM engine. Resolves to its size in bytes (shown in the boot log). */
export async function loadHolo(): Promise<number> {
  const bytes = await fetchBytes("assets/holo.wasm");
  const { instance } = await WebAssembly.instantiate(bytes, {});
  H = instance.exports as unknown as HoloWasm;
  return bytes.length;
}

/**
 * Copy the portrait point cloud (tools/portrait.py → assets/portrait.bin) into WASM memory.
 * File format: int16 × 5 per point (x, y, z, shade, jaw), scaled by 1e4.
 */
export async function loadPortrait(limit: number): Promise<number> {
  const q = new Int16Array((await fetchBytes("assets/portrait.bin")).buffer);
  const n = Math.min(limit, q.length / 5, H.max_points());
  const mem = H.memory.buffer;
  const home = new Float32Array(mem, H.home_ptr(), n * 3), shade = new Float32Array(mem, H.shade_ptr(), n), jaw = new Float32Array(mem, H.jaw_ptr(), n);
  for (let i = 0; i < n; i++) {
    home[i * 3] = q[i * 5] / 1e4; home[i * 3 + 1] = q[i * 5 + 1] / 1e4; home[i * 3 + 2] = q[i * 5 + 2] / 1e4;
    shade[i] = q[i * 5 + 3] / 1e4; jaw[i] = (q[i * 5 + 4] / 1e4) * 0.45;
  }
  H.set_count(n); H.scatter(3);
  return (pointCount = n);
}

// ---------------------------------------------------------------- scene
let renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera;
let holo: THREE.Group, holoMat: THREE.ShaderMaterial, reflMat: THREE.ShaderMaterial, posAttr: THREE.BufferAttribute;
let dust: THREE.Points, cone: THREE.Mesh, glow: THREE.Mesh;
const rings: THREE.Line[] = [];
let glOK = false;

const POINT_VS = /* glsl */ `
  attribute float shade; attribute float rnd; uniform float uTime, uSize, uRefl; varying float vS, vY, vR;
  void main(){ vec3 p = position; vY = p.y; vS = shade; vR = rnd;
    if (uRefl > .5) p.x += sin(p.y * 22. + uTime * 1.8) * .012;           // reflection ripples
    vec4 mv = modelViewMatrix * vec4(p, 1.);
    gl_PointSize = uSize * (.5 + shade * .6) * (.8 + rnd * .5) / -mv.z; gl_Position = projectionMatrix * mv; }`;

const POINT_FS = /* glsl */ `
  uniform vec3 uColor; uniform float uTime, uOp, uRefl, uSpeak; varying float vS, vY, vR;
  void main(){ vec2 c = gl_PointCoord - .5; float d = length(c); if (d > .5) discard;
    float a = smoothstep(.5, .05, d);
    float scan = .66 + .34 * sin(vY * 170. - uTime * 9.);                  // scanlines
    float band = fract(uTime * .16) * 2.6 - 1.3;
    float sweep = exp(-pow((vY - band) * 9., 2.)) * 1.4;                   // bright band sweeping up
    float fl = .9 + .1 * sin(uTime * 61. + vR * 6.);                       // flicker
    vec3 col = uColor * (vS * 1.15 * scan * (1. + uSpeak * .25) + sweep) + vec3(.75) * (sweep * .2 + smoothstep(.9, 1.25, vS) * .4);
    float al = a * uOp * fl * (.45 + vS * .55);
    if (uRefl > .5) al *= .14 * clamp(1. - (vY + 1.) / 1.6, 0., 1.);
    gl_FragColor = vec4(col, al); }`;

export function initScene() {
  const canvas = $<HTMLCanvasElement>("#gl"), hex = phosphor().hex;
  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.setClearColor(0x030604, 1);
  scene = new THREE.Scene(); scene.fog = new THREE.Fog(0x030604, 5, 14);
  camera = new THREE.PerspectiveCamera(30, 1, 0.05, 60);

  // particles: positions live in WASM memory (zero copy)
  const max = H.max_points(), geo = new THREE.BufferGeometry();
  posAttr = new THREE.BufferAttribute(new Float32Array(H.memory.buffer, H.pos_ptr(), max * 3), 3);
  posAttr.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute("position", posAttr);
  geo.setAttribute("shade", new THREE.BufferAttribute(new Float32Array(H.memory.buffer, H.shade_ptr(), max), 1));
  const rnd = new Float32Array(max); for (let i = 0; i < max; i++) rnd[i] = Math.random();
  geo.setAttribute("rnd", new THREE.BufferAttribute(rnd, 1));
  geo.setDrawRange(0, pointCount); geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 4);

  const mat = (refl: number) => new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(hex) }, uTime: { value: 0 }, uSize: { value: 10 * renderer.getPixelRatio() }, uOp: { value: 1 }, uRefl: { value: refl }, uSpeak: { value: 0 } },
    vertexShader: POINT_VS, fragmentShader: POINT_FS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  holoMat = mat(0); reflMat = mat(1);
  holo = new THREE.Group(); scene.add(holo);
  const pts = new THREE.Points(geo, holoMat); pts.frustumCulled = false; holo.add(pts);
  const refl = new THREE.Points(geo, reflMat); refl.frustumCulled = false; refl.scale.y = -1; refl.position.y = -2.0; holo.add(refl);

  // projector rings and tick marks on the floor
  const lineMat = (o: number) => new THREE.LineBasicMaterial({ color: new THREE.Color(hex), transparent: true, opacity: o, blending: THREE.AdditiveBlending, depthWrite: false });
  const circle = (r: number, segs: number, o: number, dashed = false) => {
    const g = new THREE.BufferGeometry(), p: number[] = [];
    for (let i = 0; i <= segs; i++) { const a = (i / segs) * Math.PI * 2; p.push(Math.cos(a) * r, 0, Math.sin(a) * r); }
    g.setAttribute("position", new THREE.Float32BufferAttribute(p, 3));
    const l = dashed ? new THREE.LineSegments(g, lineMat(o)) : new THREE.Line(g, lineMat(o));
    l.position.y = -1.0; scene.add(l); rings.push(l);
  };
  circle(0.72, 96, 0.7); circle(0.88, 48, 0.35, true); circle(1.15, 180, 0.18); circle(1.7, 240, 0.08);
  const tg = new THREE.BufferGeometry(), tp: number[] = [];
  for (let i = 0; i < 120; i++) { const a = (i / 120) * Math.PI * 2, l = i % 10 ? 0.04 : 0.1; tp.push(Math.cos(a) * 1.3, 0, Math.sin(a) * 1.3, Math.cos(a) * (1.3 + l), 0, Math.sin(a) * (1.3 + l)); }
  tg.setAttribute("position", new THREE.Float32BufferAttribute(tp, 3));
  const ticks = new THREE.LineSegments(tg, lineMat(0.35)); ticks.position.y = -1; scene.add(ticks); rings.push(ticks);

  // light cone from the projector
  cone = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 0.6, 2.15, 64, 1, true), new THREE.ShaderMaterial({
    uniforms: { uColor: holoMat.uniforms.uColor, uTime: holoMat.uniforms.uTime },
    vertexShader: `varying vec2 vUv; varying vec3 vN; void main(){ vUv = uv; vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
    fragmentShader: `uniform vec3 uColor; uniform float uTime; varying vec2 vUv; varying vec3 vN; void main(){ float edge = pow(1. - abs(vN.z), 2.); float a = (1. - vUv.y) * (1. - vUv.y) * .045 + edge * (1. - vUv.y) * .045; a *= .85 + .15 * sin(vUv.x * 80. + uTime * 2.); gl_FragColor = vec4(uColor, a); }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
  }));
  cone.position.y = 0.06; scene.add(cone);

  // soft glow on the floor
  const gc = document.createElement("canvas"); gc.width = gc.height = 128;
  const gx = gc.getContext("2d")!, grd = gx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, "rgba(255,255,255,.9)"); grd.addColorStop(0.25, "rgba(255,255,255,.25)"); grd.addColorStop(1, "rgba(255,255,255,0)");
  gx.fillStyle = grd; gx.fillRect(0, 0, 128, 128);
  glow = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(gc), color: new THREE.Color(hex), transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = -1.01; scene.add(glow);

  // dust drifting up through the beam
  const dn = coarsePointer ? 300 : 700, dp = new Float32Array(dn * 3);
  for (let i = 0; i < dn; i++) { dp[i * 3] = (Math.random() - 0.5) * 9; dp[i * 3 + 1] = Math.random() * 5 - 1.5; dp[i * 3 + 2] = (Math.random() - 0.5) * 7 - 1; }
  const dg = new THREE.BufferGeometry(); dg.setAttribute("position", new THREE.BufferAttribute(dp, 3));
  dust = new THREE.Points(dg, new THREE.PointsMaterial({ color: new THREE.Color(hex), size: 0.012, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
  scene.add(dust);

  onPhosphorChange((h) => {
    const c = new THREE.Color(h);
    holoMat.uniforms.uColor.value.copy(c); reflMat.uniforms.uColor.value.copy(c);
    rings.forEach((r) => (r.material as THREE.LineBasicMaterial).color.copy(c));
    (glow.material as THREE.MeshBasicMaterial).color.copy(c); (dust.material as THREE.PointsMaterial).color.copy(c);
  });

  addEventListener("resize", resize); resize();
  new IntersectionObserver(([e]) => (heroVisible = e.isIntersecting)).observe($("#hero"));
  glOK = true;
}

function resize() {
  if (!renderer) return;
  const r = $("#hero").getBoundingClientRect();
  renderer.setSize(r.width, r.height, false); camera.aspect = r.width / r.height; camera.updateProjectionMatrix();
}

// ---------------------------------------------------------------- frame loop
const ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), hit = new THREE.Vector3(), ndc = new THREE.Vector2();
let stiffness = 4, tPrev = 0, tSim = 0;
const px = { x: 0, y: 0 };  // smoothed pointer for camera parallax

function frame(now: number) {
  const dt = Math.min((now - tPrev) / 1000, 0.05); tPrev = now; tSim += dt;
  px.x += (pointer.nx - px.x) * 0.06; px.y += (pointer.ny - px.y) * 0.06;
  tickVoice(tSim);
  stiffness += ((assembled ? 70 : 4) - stiffness) * 0.02;

  if (glOK && heroVisible) {
    const hr = $("#hero").getBoundingClientRect(), p = Math.min(1, Math.max(0, -hr.top / hr.height));
    const narrow = innerWidth < 760, hx = narrow ? 0 : -0.15;
    // scrolling flies the camera up and away from the projector
    camera.position.set(px.x * 0.2, 0.1 + p * 1.6 - px.y * 0.12, (narrow ? 5.6 : 4.5) + p * 3);
    camera.lookAt(0, (narrow ? 0.55 : 0.02) - p * 0.6, 0);
    holo.position.x = hx;
    holo.rotation.y = px.x * 0.28 + Math.sin(tSim * 0.3) * 0.05;
    holo.rotation.x = px.y * 0.06;

    // the pointer pushes particles away (a "hand" in the hologram's local space)
    let cr = 0, cx = 0, cy = 0;
    if (pointer.inside) {
      ndc.set((pointer.x / innerWidth) * 2 - 1, -((pointer.y - hr.top) / hr.height) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      if (ray.ray.intersectPlane(plane, hit)) { holo.worldToLocal(hit); cx = hit.x; cy = hit.y; cr = 0.22; }
    }
    H.step(dt, tSim, voice.mouth, cx, cy, cr, 0.1 + voice.glitch * 0.8 + (voice.speaking ? 0.12 : 0), stiffness);
    posAttr.needsUpdate = true;

    holoMat.uniforms.uTime.value = tSim; reflMat.uniforms.uTime.value = tSim; holoMat.uniforms.uSpeak.value = voice.mouth;
    (glow.material as THREE.MeshBasicMaterial).opacity = 0.3 * (1 + voice.mouth * 0.5); glow.position.x = hx; cone.position.x = hx;
    rings.forEach((r, i) => { r.rotation.y += dt * (i % 2 ? -0.12 : 0.18) * (1 + i * 0.2); r.position.x = hx; });
    const dpos = dust.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < dpos.count; i++) { let y = dpos.getY(i) + dt * 0.05; if (y > 3.5) y = -1.5; dpos.setY(i, y); }
    dpos.needsUpdate = true;
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
}

export function startHologram() {
  requestAnimationFrame((t) => { tPrev = t; frame(t); });
}
