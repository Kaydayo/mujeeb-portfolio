// "On record": a wall of printed posters you scroll sideways through. Each poster is a crumpled,
// hanging sheet (vertex shader), lit from its own surface normals, swaying with scroll speed.
// Click the poster in the middle (or "open the file") to open its record page.
import * as THREE from "three";
import { $ } from "../../lib/dom";
import { gsap, ScrollTrigger, scrollToPinProgress } from "../../lib/scroll";
import { sfx } from "../../lib/sound";
import { loadLogoImages } from "../../lib/logo";
import { RECORDS } from "../../content/records";
import type { OrgKey } from "../../content/types";
import { drawPoster, POSTER_W, POSTER_H, POSTER_FONTS } from "./poster-art";
import { openRecord } from "./record-page";

const N = RECORDS.length;
/** Painted poster canvases, shared with the record page. */
export const posterCanvases: HTMLCanvasElement[] = RECORDS.map(() => {
  const c = document.createElement("canvas"); c.width = POSTER_W; c.height = POSTER_H; return c;
});

const scroll = { target: 0, smooth: 0, velocity: 0 };
let shown = -1;

/** Title and line under the wall follow whichever poster is nearest the middle. */
function caption(i: number) {
  if (i === shown) return;
  const dir = i > shown ? 1 : -1; shown = i;
  $("#pstN").textContent = `0${i + 1} / 0${N}`;
  $("#pstT").innerHTML = `<span>${RECORDS[i].t.replace(/&/g, "&amp;")}</span>`;
  $("#pstS").textContent = RECORDS[i].caption;
  gsap.fromTo("#pstT span", { yPercent: 110 * dir }, { yPercent: 0, duration: 0.8, ease: "expo.out" });
  gsap.fromTo("#pstS", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
  sfx("blip");
}

const VERT = /* glsl */ `
  uniform float uTime, uVel, uSeed, uHover; uniform vec2 uMouse;
  varying vec2 vUv; varying vec3 vPos;
  float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
  float crumple(vec2 p){ float a = 0., w = .5; for (int i = 0; i < 5; i++) { a += w * abs(n(p) * 2. - 1.); p *= 2.07; w *= .5; } return a; }
  void main(){
    vUv = uv; vec3 p = position;
    p.z += (crumple(uv * vec2(3.2, 4.4) + uSeed * 7.) - .45) * .085;      // creased paper, fixed per poster
    float hang = pow(1. - uv.y, 1.6);                                       // pinned along the top edge
    p.z += sin(uv.y * 3.4 + uTime * 1.3 + uSeed * 5.) * .035 * (.4 + hang); // breathing in a draught
    p.z += uVel * hang * 1.1; p.x += -uVel * hang * .35;                   // swings as the wall slides
    float d = distance(uv, uMouse);
    p.z += uHover * .16 * exp(-d * d * 18.) * sin(d * 26. - uTime * 6.);    // ripple under the pointer
    vec4 mv = modelViewMatrix * vec4(p, 1.); vPos = mv.xyz; gl_Position = projectionMatrix * mv;
  }`;

const FRAG = /* glsl */ `
  uniform sampler2D uMap; uniform float uDim;
  varying vec2 vUv; varying vec3 vPos;
  void main(){
    vec3 nrm = normalize(cross(dFdx(vPos), dFdy(vPos)));                    // faceted normal from the creases
    vec3 L = normalize(vec3(-.45, .65, .9));
    float diff = clamp(dot(nrm, L), 0., 1.), spec = pow(clamp(dot(reflect(-L, nrm), vec3(0., 0., 1.)), 0., 1.), 24.);
    vec3 col = texture2D(uMap, vUv).rgb * (.62 + .48 * diff) + spec * .1;
    col = mix(col, col * .9 + .06, uDim);                                    // posters off-centre sit back a little
    gl_FragColor = vec4(col, 1.);
    #include <colorspace_fragment>
  }`;

function initWebGL() {
  const cab = $("#cabinet"), canvas = $<HTMLCanvasElement>("#postergl");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75)); renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(28, 1, 0.1, 100); cam.position.set(0, 0, 10);
  const PW = 2, PH = (PW * POSTER_H) / POSTER_W, GAP = 2.75;

  const shadowTex = (() => {
    const c = document.createElement("canvas"); c.width = c.height = 128;
    const x = c.getContext("2d")!, g = x.createRadialGradient(64, 64, 8, 64, 64, 64);
    g.addColorStop(0, "rgba(13,16,14,.5)"); g.addColorStop(1, "rgba(13,16,14,0)"); x.fillStyle = g; x.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  })();

  const geo = new THREE.PlaneGeometry(PW, PH, 64, 90);
  const items = posterCanvases.map((c, i) => {
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, extensions: { derivatives: true } as any,
      uniforms: { uMap: { value: tex }, uTime: { value: 0 }, uVel: { value: 0 }, uSeed: { value: i * 1.37 + 0.3 }, uHover: { value: 0 }, uMouse: { value: new THREE.Vector2(0.5, 0.5) }, uDim: { value: 0 } },
    });
    const mesh = new THREE.Mesh(geo, mat); mesh.userData.i = i;
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(PW * 1.5, PH * 1.25), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
    scene.add(shadow, mesh);
    return { mesh, mat, shadow, hover: 0 };
  });

  // poster ~58% of the height on wide screens, never wider than ~62% of a phone
  const resize = () => {
    const w = cab.clientWidth, h = cab.clientHeight; renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix();
    const k = 2 * Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
    cam.position.z = Math.max(PH / 0.58 / k, PW / 0.62 / k / cam.aspect);
  };
  resize(); addEventListener("resize", resize);

  // pointer: ripple on the poster underneath; click the middle one to open it, others to bring them over
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(); let hovered: number | null = null;
  canvas.addEventListener("pointermove", (e) => {
    const rc = canvas.getBoundingClientRect(); ndc.set(((e.clientX - rc.left) / rc.width) * 2 - 1, -((e.clientY - rc.top) / rc.height) * 2 + 1);
    ray.setFromCamera(ndc, cam);
    const hit = ray.intersectObjects(items.map((o) => o.mesh))[0];
    hovered = hit ? hit.object.userData.i : null;
    if (hit) items[hovered!].mat.uniforms.uMouse.value.copy(hit.uv!);
    canvas.style.cursor = hit ? "pointer" : "";
  });
  canvas.addEventListener("pointerleave", () => (hovered = null));
  canvas.addEventListener("click", () => {
    if (hovered == null) return;
    if (hovered === shown) openRecord(hovered); else scrollToPinProgress(cab, hovered / (N - 1));
  });

  let visible = false; new IntersectionObserver(([e]) => (visible = e.isIntersecting), { rootMargin: "100px" }).observe(cab);
  let last = performance.now();
  gsap.ticker.add(() => {
    const now = performance.now(), dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (!visible) return;
    const prev = scroll.smooth; scroll.smooth += (scroll.target - scroll.smooth) * Math.min(1, dt * 7);
    scroll.velocity += ((scroll.smooth - prev) / Math.max(dt, 0.001) - scroll.velocity) * Math.min(1, dt * 6);
    const offset = scroll.smooth * (N - 1) * GAP, t = now / 1000;
    items.forEach((o, i) => {
      const x = i * GAP - offset, near = Math.max(0, 1 - Math.abs(x) / GAP), s = 0.84 + near * 0.2;
      o.mesh.position.set(x, 0.12 + Math.sin(t * 0.8 + i) * 0.02, near * 0.3); o.mesh.scale.setScalar(s);
      o.mesh.rotation.set(0, -x * 0.06, Math.sin(i * 2.1) * 0.03 * (1 - near * 0.6));
      o.shadow.position.set(x + 0.18, 0.02, -0.25); o.shadow.scale.setScalar(s);
      o.hover += ((hovered === i ? 1 : 0) - o.hover) * Math.min(1, dt * 5);
      const u = o.mat.uniforms; u.uTime.value = t; u.uVel.value = THREE.MathUtils.clamp(scroll.velocity * 0.09, -0.6, 0.6); u.uHover.value = o.hover; u.uDim.value = 1 - near;
    });
    caption(Math.round(scroll.smooth * (N - 1)));
    renderer.render(scene, cam);
  });
  caption(0);
}

/** No WebGL: the same posters as a flat strip that slides sideways. */
function initFallback() {
  const cab = $("#cabinet"); $("#postergl").remove();
  const strip = document.createElement("div"); strip.className = "pst-fallback";
  posterCanvases.forEach((c, i) => { c.style.cursor = "pointer"; c.addEventListener("click", () => openRecord(i)); strip.appendChild(c); });
  cab.appendChild(strip);
  gsap.ticker.add(() => {
    scroll.smooth += (scroll.target - scroll.smooth) * 0.12;
    const w = posterCanvases[0].getBoundingClientRect().width, step = w + innerWidth * 0.06;
    strip.style.transform = `translate(${-w / 2 - scroll.smooth * (N - 1) * step}px, -46%)`;
    caption(Math.round(scroll.smooth * (N - 1)));
  });
  caption(0);
}

export async function initWall() {
  $("#pstOpen").addEventListener("click", () => openRecord(Math.max(0, shown)));
  ScrollTrigger.create({ trigger: "#cabinet", start: "top top", end: "+=" + N * 75 + "%", pin: true, scrub: true, onUpdate: (self) => (scroll.target = self.progress) });

  const keys = [...new Set(RECORDS.flatMap((r) => r.poster.logos ?? []))] as OrgKey[];
  await document.fonts.ready;
  await Promise.all(POSTER_FONTS.map((f) => document.fonts.load(f).catch(() => {})));
  const logos = await loadLogoImages(keys);
  RECORDS.forEach((r, i) => drawPoster(posterCanvases[i].getContext("2d")!, r.poster, logos, i + 1));

  const webgl2 = (() => { try { return !!document.createElement("canvas").getContext("webgl2"); } catch { return false; } })();
  webgl2 ? initWebGL() : initFallback();
}
