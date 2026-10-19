import type { Contact, VoiceLine } from "./types";

export const CONTACT: Contact = {
  email: "olukayodedayo100@gmail.com",
  github: "https://github.com/kaydayo",
  linkedin: "https://www.linkedin.com/in/mujeeb-adebowale-794762199",
};

/**
 * What the hologram says. `intro` plays after the boot; the others answer the chips
 * and anything typed into the prompt. To use a real recording, add `audio: "assets/voice/intro.mp3"`
 * (drop the file in public/assets/voice) and the mouth follows the recording's volume.
 */
export const LINES: { [key: string]: VoiceLine } = {
  intro: { text: "Connection established. Hi, I'm Mujeeb Adebowale, a senior software engineer in Lagos. At Chipper Cash I work on the card issuing and payments infrastructure behind card spending across Africa. If it has to be correct at three in the morning, it's my kind of problem. Scroll down. The logs are open." },
  whoami: { text: "I'm Mujeeb Adebowale. Senior software engineer at Chipper Cash, on card issuing and payments. Before that I led a team at Maxng, built backend services at Casha, and started full-stack at The People Practice." },
  stack: { text: "TypeScript and Go, on Node and NestJS. Postgres for anything that has to balance, Redis for locks and idempotency, Mongo where documents fit, and React when ops needs a console. Lately, LLM apps with embeddings, pgvector and function calling." },
  builds: { text: "After hours I'm building Peguin, a Mac app that gives your standup update for you; and Dopple, a multi-tenant platform for running a school. Scroll to the builds to watch both running." },
  hire: { text: "Send me the role and the hardest problem on your team. If it involves money moving correctly at scale, I'm interested. My contact details are at the bottom of the page." },
  help: { text: "Ask me something. Try whoami, stack, builds, or hire." },
};

/** "Where I've worked" row in About: logo key, name, years. */
export const COMPANIES: [import("./types").OrgKey, string, string][] = [
  ["chipper", "Chipper Cash", "now"],
  ["maxng", "Maxng", "23–25"],
  ["casha", "Casha!", "21–23"],
  ["tpp", "The People Practice", "18–21"],
];

/** "Stack & skills" row in About. */
export const STACK = ["TypeScript", "Go", "Python", "Node.js", "NestJS", "Next.js", "React", "GraphQL", "PostgreSQL", "Redis", "MongoDB", "Supabase", "Docker", "AWS", "pgvector", "LangChain", "Card issuing", "Chargebacks", "Settlement", "TDD"];

/** The soundtrack for the builds section: any YouTube video ID (the part after `watch?v=`). Leave it empty to hide the button. */
export const MUSIC = { youtubeId: "e8GzTXRAJ30", title: "Tems · Free Mind" };
