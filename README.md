# Mujeeb Adebowale — portfolio

The site opens as an SSH session into `lagos-01`, which boots a hologram of me built from my photo. After that come paper-styled sections: about, experience, case files, skills, builds and "on record".

## Stack

| Piece | What it does |
|---|---|
| **Vite + TypeScript** | Dev server, type checking and production build |
| **Three.js** (0.158) | The hologram in the hero and the paper posters in "On record" |
| **Rust → WebAssembly** (`holo/`) | Hologram particle physics: springs, the cursor push, mouth and glitch |
| **GSAP + ScrollTrigger** (3.12) | Pinned sections, scroll-scrubbed motion and reveals |
| **Lenis** (1.1) | Smooth scrolling, wired into ScrollTrigger |
| **Web Audio** | Interface sounds (key clicks, blips, static) |
| **YouTube IFrame API** | The soundtrack in Builds, set in `src/content/profile.ts` (`MUSIC`) |

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check, then build to dist/
npm run preview    # serve dist/ locally
```

`dist/` is a static folder that works from any host or sub-path, such as Vercel, Netlify, GitHub Pages or S3.

## Where things live

```
index.html                  page markup (sections, overlays)
src/
  main.ts                   boots every section in page order + the shared frame loop
  content/                  ← all the copy. Edit these to change what the site says
    profile.ts              contact, hologram voice lines, About companies + stack
    experience.ts           jobs (experience dial), case files, skill bubbles
    builds.ts               personal projects + their demo clips
    records.ts              education/certificates/service: poster design + record page
    orgs.ts                 company/institution names, monograms, brand colours
    types.ts                the shapes of all of the above
  lib/                      shared helpers
    scroll.ts               Lenis + ScrollTrigger setup, scrollTo helpers
    sound.ts, youtube.ts    UI sounds; the hidden YouTube player for the Builds soundtrack
    text.ts                 scramble effect, split-into-lines reveal
    logo.ts, pointer.ts, dom.ts
  sections/
    hero/                   boot.ts (ssh), hologram.ts (WASM + Three), holotape.ts (voice), phosphor.ts
    nav.ts, about.ts, experience.ts, skills.ts, builds.ts, contact.ts
    cases/                  pinned list + replays.ts (the little monitor animations)
    on-record/              wall.ts (paper posters in WebGL), poster-art.ts (canvas drawing), record-page.ts
  styles/                   one stylesheet per section, ordered by index.css
public/
  assets/                   holo.wasm, portrait.bin (hologram points), photo.jpg
  logos/<key>.png           256×256 logos, keys match content/orgs.ts
  demos/                    screen recordings (.mp4 + .webm for each)
holo/                       Rust crate for the hologram engine
tools/portrait.py           photo → portrait.bin point cloud
```

## Common edits

- **Change any text:** edit the file under `src/content/`. The sections render from it.
- **Add a job:** add an entry to `JOBS` in `content/experience.ts` and drop its logo at `public/logos/<key>.png`. Then add the key to `OrgKey` in `types.ts` and give it a monogram in `orgs.ts`.
- **Add a project:**
  1. Put `name.mp4` and `name.webm` in `public/demos/`.
  2. Add the project to `BUILDS`. `split` is the letter where the giant name opens.
- **Add a qualification:** add a `RECORDS` entry. Its `poster` block designs the printed poster, and the poster draws itself.
- **Use your real voice:** record each line and put the files in `public/assets/voice/`. Then add `audio: "assets/voice/intro.mp3"` to that line in `profile.ts`. Captions follow the recording and the mouth follows its volume.
- **New photo for the hologram:**
  1. Replace `tools/source-photo.jpg`.
  2. Run `npm run portrait`. This needs Python with numpy, scipy and Pillow.
  3. Replace `public/assets/photo.jpg` with a square crop of the photo.

## Deploy

The build is a static site (`npm run build` → `dist/`), so any static host works.

1. **Vercel:** import the GitHub repo at vercel.com. It detects Vite (build `npm run build`, output `dist`) and gives you a `*.vercel.app` address.
2. **Free domain via [is-a.dev](https://is-a.dev):** fork [is-a-dev/register](https://github.com/is-a-dev/register), add `domains/<name>.json` and open a pull request:
   ```json
   {
     "owner": { "username": "<your GitHub username>" },
     "records": { "CNAME": "cname.vercel-dns.com" }
   }
   ```
3. Once it's merged, add `<name>.is-a.dev` under the Vercel project's **Settings → Domains**. Vercel issues the HTTPS certificate.

## Rebuilding the WebAssembly

A prebuilt `public/assets/holo.wasm` is included. You only need to rebuild it if you change `holo/src/lib.rs`:

```bash
rustup target add wasm32-unknown-unknown   # once
npm run wasm
```

The crate is `#![no_std]` with no dependencies. It exports raw pointers, so JavaScript can read the particle positions straight out of WASM memory into a Three.js buffer without copying.

## Notes

- If the visitor prefers reduced motion, the boot typing, smooth scroll, physics and replays are skipped.
- On phones (≤ 760px) the layout stacks: the hologram transcript gets a dark panel, the experience dial shrinks its text to fit, and the nav collapses into an "index" menu.
- Without WebGL2, "On record" falls back to a flat strip of the same posters.
- The music in Builds streams from YouTube through the official embed player; set the video in `MUSIC` in `src/content/profile.ts`.
