import type { Build } from "./types";

/**
 * Personal projects. `split` is where the giant name opens to show the clip ("PEG|UIN").
 * `site` adds a "visit" link next to "view project". Clips live in public/demos; keep an .mp4 and a .webm of each (browsers without H.264 get the .webm).
 */
export const BUILDS: Build[] = [
  { name: "Peguin", split: 3, year: "2026 · in beta", tags: ["Electron", "Node", "Claude", "ElevenLabs", "BullMQ"],
    what: "A Mac app that writes your standup update from your commits, PRs and Claude Code prompts, joins Google Meet or Zoom as “your name (AI)”, says it's an AI, gives the update out loud and answers follow-ups only from your notes.",
    clips: [{ src: "demos/penguin-app.mp4", label: "the app", w: 1280, h: 800 }, { src: "demos/penguin-web.mp4", label: "peguin.co", w: 1280, h: 800 }], site: "https://www.peguin.co" },
  { name: "Dopple", split: 3, year: "2026 · v1", tags: ["NestJS", "Postgres RLS", "React", "Next.js", "NATS"],
    what: "A multi-tenant school platform. Every school gets its own address, its own data boundary and its own bank account for fees: live classes, timetables, exams, attendance and payments on shared infrastructure.",
    clips: [{ src: "demos/dopple-app.mp4", label: "school app", w: 1280, h: 800 }, { src: "demos/dopple-site.mp4", label: "marketing site", w: 1280, h: 800 }] },
];
