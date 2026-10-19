import type { Job, CaseFile, Skill } from "./types";

/** Experience dial, newest first. */
export const JOBS: Job[] = [
  { co: "Chipper Cash", logo: "chipper", sub: "01/2025 – now", role: "Senior Software Engineer", area: "Card issuing & payments", k: "card + payments infrastructure",
    body: ["Redis idempotency lock ended a class of card-reveal failures", "Fixed fee billing double charges at month end", "Built Dispute Desk for chargebacks", "Bulk card revocation for fraud response"], tint: "#eef1ec" },
  { co: "Maxng", logo: "maxng", sub: "12/2023 – 2025", role: "Senior Software Engineer III", area: "Lagos · team lead", k: "led a fintech build",
    body: ["NestJS, TypeScript, PostgreSQL", "Drove TDD adoption: 30% fewer bugs", "Reliability work on Postgres and MongoDB", "20% lift in customer satisfaction"], tint: "#ece9e5" },
  { co: "Casha!", logo: "casha", sub: "10/2021 – 11/2023", role: "Backend Engineer", area: "Lagos · fintech", k: "backend services",
    body: ["Node.js, TypeScript, NestJS, MongoDB", "SQL and NoSQL data stores", "Unit, integration and e2e testing", "Presented findings to senior execs"], tint: "#e6eaee" },
  { co: "The People Practice", logo: "tpp", sub: "10/2018 – 08/2021", role: "Full Stack Engineer", area: "Lagos", k: "full-stack product work",
    body: ["Built changes to design specifications", "Shipped application modules", "Internal tools for team communication"], tint: "#ebeee6" },
];

/** Case files: each one has a live replay drawn by sections/cases/replays.ts (matched by `f`). */
export const CASES: CaseFile[] = [
  { t: "The midnight double charge", tags: "billing · idempotency · cron", f: "billing",
    p: "A monthly card fee job could double-charge around month boundaries. The fix keys every charge to its billing period, <code>fee:{card}:{yyyy-mm}</code>, so a retry that crosses midnight is skipped." },
  { t: "Five workers, one key", tags: "redis · distributed lock · sha-256", f: "lock",
    p: "Concurrent requests for a provider's ephemeral key returned 403s. Issuance now sits behind <code>SET … NX PX</code>, with the nonce stored only as a SHA-256 hash." },
  { t: "Bulk card revocation", tags: "ops tooling · batching · retool", f: "revoke",
    p: "Ops paste messy lists of card IDs. The tool strips <code>\\r\\n</code>, validates each UUID, drops junk and revokes in batches behind a confirmation step." },
  { t: "Dispute Desk", tags: "stripe disputes · queues · console", f: "disputes",
    p: "Disputes carry hard evidence deadlines. A deadline-aware queue, kanban, evidence builder and drawer keep the next thing that can be lost on top." },
];

/** Physics bubbles. 1 = domain skill (drawn dark). */
export const SKILLS: Skill[] = [
  ["TypeScript", 0], ["Go", 0], ["Python", 0], ["Node.js", 0], ["NestJS", 0], ["Next.js", 0], ["PostgreSQL", 0], ["Redis", 0], ["MongoDB", 0], ["GraphQL", 0], ["React", 0], ["Docker", 0], ["AWS", 0], ["pgvector", 0], ["LangChain", 0],
  ["Card issuing", 1], ["Chargebacks", 1], ["Settlement", 1], ["Billing jobs", 1], ["Idempotency", 1], ["TDD", 1],
];
