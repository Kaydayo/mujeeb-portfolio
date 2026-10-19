import type { Job, CaseFile, Skill } from "./types";

/** Experience dial, newest first. */
export const JOBS: Job[] = [
  { co: "Chipper Cash", logo: "chipper", sub: "01/2025 – now", role: "Senior Software Engineer", area: "Card issuing & payments", k: "card + payments infrastructure",
    body: ["Card and payment services that are safe to retry", "Scheduled billing that charges exactly once", "Internal tools for disputes and chargebacks", "Ops tooling for card operations at scale"], tint: "#eef1ec" },
  { co: "Maxng", logo: "maxng", sub: "12/2023 – 2025", role: "Senior Software Engineer III", area: "Lagos · team lead", k: "led a fintech build",
    body: ["NestJS, TypeScript, PostgreSQL", "Drove TDD adoption: 30% fewer bugs", "Reliability work on Postgres and MongoDB", "20% lift in customer satisfaction"], tint: "#ece9e5" },
  { co: "Casha!", logo: "casha", sub: "10/2021 – 11/2023", role: "Backend Engineer", area: "Lagos · fintech", k: "backend services",
    body: ["Node.js, TypeScript, NestJS, MongoDB", "SQL and NoSQL data stores", "Unit, integration and e2e testing", "Presented findings to senior execs"], tint: "#e6eaee" },
  { co: "The People Practice", logo: "tpp", sub: "10/2018 – 08/2021", role: "Full Stack Engineer", area: "Lagos", k: "full-stack product work",
    body: ["Built changes to design specifications", "Shipped application modules", "Internal tools for team communication"], tint: "#ebeee6" },
];

/** Case files: each one has a live replay drawn by sections/cases/replays.ts (matched by `f`). */
export const CASES: CaseFile[] = [
  { t: "Exactly-once billing", tags: "billing · idempotency · scheduled jobs", f: "billing",
    p: "A scheduled charge should never run twice, even when a job retries across a boundary like midnight. Keying each charge to its account and billing period turns a repeat run into a safe no-op." },
  { t: "Five workers, one key", tags: "redis · distributed locks · concurrency", f: "lock",
    p: "When several workers race for the same resource, only one should do the work. A short-lived lock lets one worker win while the others wait and reuse its result." },
  { t: "Bulk operations, safely", tags: "ops tooling · validation · batching", f: "revoke",
    p: "Operators often work from messy pasted lists. Good tooling cleans and validates every entry, flags what doesn't belong and runs the rest in small batches behind a confirmation step." },
  { t: "Deadline-aware queues", tags: "queues · internal tools · prioritisation", f: "disputes",
    p: "Some work has hard deadlines. A queue sorted by time left, with everything needed to act in one place, keeps the most urgent item on top." },
];

/** Physics bubbles. 1 = domain skill (drawn dark). */
export const SKILLS: Skill[] = [
  ["TypeScript", 0], ["Go", 0], ["Python", 0], ["Node.js", 0], ["NestJS", 0], ["Next.js", 0], ["PostgreSQL", 0], ["Redis", 0], ["MongoDB", 0], ["GraphQL", 0], ["React", 0], ["Docker", 0], ["AWS", 0], ["pgvector", 0], ["LangChain", 0],
  ["Card issuing", 1], ["Chargebacks", 1], ["Settlement", 1], ["Billing jobs", 1], ["Idempotency", 1], ["TDD", 1],
];
