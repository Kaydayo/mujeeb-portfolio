// Builds: one full screen per project. The giant name splits open around the real recording,
// then the clip zooms to fill the frame. The soundtrack (a YouTube video) plays only while this section is on screen.
import { $, $$ } from "../lib/dom";
import { gsap, ScrollTrigger, lockScroll, unlockScroll } from "../lib/scroll";
import { YouTubeMusic } from "../lib/youtube";
import { BUILDS } from "../content/builds";
import { MUSIC } from "../content/profile";

const H264 = !!document.createElement("video").canPlayType('video/mp4; codecs="avc1.640028"');
/** Browsers without H.264 get the .webm next to each .mp4. */
const clipSrc = (src: string) => (H264 ? src : src.replace(/\.mp4$/, ".webm"));

function renderRows() {
  const list = $("#euList");
  BUILDS.forEach((b, i) => {
    const left = b.name.slice(0, b.split), right = b.name.slice(b.split);
    list.insertAdjacentHTML("beforeend", `<article class="eu-row" data-i="${i}" aria-label="${b.name}">
      <div class="eu-stick"><i class="eu-plus tl"></i><i class="eu-plus tr"></i><i class="eu-plus bl"></i><i class="eu-plus br"></i>
        <span class="eu-count">0${i + 1} / 0${BUILDS.length}</span>
        <h3 class="eu-name"><span class="h">${left}</span><span class="eu-win"><video muted loop playsinline preload="none" data-src="${clipSrc(b.clips[0].src)}" aria-label="${b.name} demo"></video></span><span class="h">${right}</span></h3>
        <div class="eu-foot"><div class="eu-tags">${b.tags.map((t) => `<span>${t}</span>`).join("")}<span>${b.year}</span></div><p class="eu-what">${b.what}</p><button class="eu-view" type="button" data-cursor="watch">view project ↗</button></div>
      </div></article>`);
  });
}

/** Keep each closed name inside the frame whatever font loads. */
function fitNames() {
  for (const n of $$(".eu-name")) {
    n.style.fontSize = "";
    const w = [...n.querySelectorAll<HTMLElement>(".h")].reduce((t, h) => t + h.offsetWidth, 0), max = innerWidth * 0.9;
    if (w > max) n.style.fontSize = (parseFloat(getComputedStyle(n).fontSize) * max) / w + "px";
  }
}

function animateRow(row: HTMLElement, i: number) {
  const name = row.querySelector<HTMLElement>(".eu-name")!, win = row.querySelector<HTMLElement>(".eu-win")!;
  const video = row.querySelector("video")!, foot = row.querySelector<HTMLElement>(".eu-foot")!;
  const windowWidth = () => { const h = parseFloat(getComputedStyle(name).fontSize) * 1.08; return Math.min(h * 1.6, innerWidth * (innerWidth < 760 ? 0.62 : 0.42)); };

  row.querySelector(".eu-view")!.addEventListener("click", () => openLightbox(i));
  win.addEventListener("click", () => openLightbox(i)); win.style.cursor = "pointer";

  ScrollTrigger.create({
    trigger: row, start: "top top", end: "bottom bottom", scrub: true,
    onToggle: (self) => {
      if (!self.isActive) return video.pause();
      if (!video.src) video.src = video.dataset.src!;
      video.play().catch(() => {});
    },
    onUpdate: (self) => {
      const p = self.progress;
      // phase one (0 → .42): the word splits and the window opens
      const open = 1 - Math.pow(1 - Math.min(1, p / 0.42), 3);
      win.style.width = windowWidth() * open + "px";
      // phase two (.5 → 1): the word pushes past the edges and the clip fills the frame
      const g0 = Math.max(0, (p - 0.5) / 0.5), g = g0 * g0 * (3 - 2 * g0);
      const h = parseFloat(getComputedStyle(name).fontSize) * 1.08, w = windowWidth() || 1;
      const full = Math.max((innerWidth * 0.86) / w, (innerHeight * 0.72) / h);
      const centre = win.offsetLeft + win.offsetWidth / 2;
      name.style.transformOrigin = centre + "px 50%";
      gsap.set(name, { scale: 1 + (full - 1) * g, x: (name.offsetWidth / 2 - centre) * g });
      gsap.set(foot, { opacity: 1 - g * 1.6, y: g * 30 });
    },
  });
  gsap.from(name.querySelectorAll(".h"), { yPercent: 40, opacity: 0, duration: 1.2, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: row, start: "top 70%" } });
}

// ---------------------------------------------------------------- lightbox with every clip of a project
function openLightbox(i: number, clip = 0) {
  const b = BUILDS[i], video = $<HTMLVideoElement>("#lbVideo");
  $("#lbTitle").textContent = b.name;
  $("#lbTabs").innerHTML = b.clips.map((k, n) => `<button type="button" class="${n === clip ? "on" : ""}" data-c="${n}">${k.label}</button>`).join("");
  $$("#lbTabs button").forEach((btn) => btn.addEventListener("click", () => openLightbox(i, +btn.dataset.c!)));
  video.src = clipSrc(b.clips[clip].src); video.style.margin = "0 auto";
  $("#lb").hidden = false; lockScroll(); video.play().catch(() => {});
}
function closeLightbox() { $("#lb").hidden = true; $<HTMLVideoElement>("#lbVideo").pause(); unlockScroll(); }

function initLightbox() {
  const lb = $("#lb");
  $("#lbClose").addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) closeLightbox(); });
}

// ---------------------------------------------------------------- music while the builds are on screen
function initMusic() {
  const btn = $("#wkUnplug"), now = $("#wkNow");
  if (!MUSIC.youtubeId) { btn.parentElement!.hidden = true; return; }
  let playing = false;
  const set = (p: boolean) => {
    playing = p; p ? YouTubeMusic.play(MUSIC.youtubeId) : YouTubeMusic.pause();
    now.hidden = !p; now.textContent = `♪ now playing · ${MUSIC.title}`;
    btn.textContent = p ? "■ stop music" : "♪ play music"; btn.setAttribute("aria-pressed", String(p));
  };
  // browsers only play sound after a tap, so the visitor starts it; scrolling away pauses it
  btn.addEventListener("click", () => set(!playing));
  new IntersectionObserver(([e]) => { if (!e.isIntersecting && playing) set(false); }, { rootMargin: "-35% 0px -35% 0px" }).observe($("#works"));
}

export function initBuilds() {
  renderRows();
  document.fonts.ready.then(fitNames); addEventListener("resize", fitNames);
  $$(".eu-row").forEach(animateRow);
  initLightbox();
  initMusic();
  gsap.from(".eu-lede p", { y: 40, opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".eu-lede", start: "top 85%" } });
  gsap.from(".eu-num", { xPercent: -30, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: ".eu-num", start: "top 85%" } });
}
