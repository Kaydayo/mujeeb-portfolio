// Icons for the skill bubbles. Tech skills use the official marks from Simple Icons (filled);
// domain skills and the few marks Simple Icons doesn't carry are simple line drawings (stroked).
import {
  siTypescript, siGo, siPython, siNodedotjs, siNestjs, siNextdotjs, siPostgresql,
  siRedis, siMongodb, siGraphql, siReact, siDocker, siLangchain,
} from "simple-icons";

const BRAND: Record<string, string> = {
  "TypeScript": siTypescript.path, "Go": siGo.path, "Python": siPython.path, "Node.js": siNodedotjs.path,
  "NestJS": siNestjs.path, "Next.js": siNextdotjs.path, "PostgreSQL": siPostgresql.path, "Redis": siRedis.path,
  "MongoDB": siMongodb.path, "GraphQL": siGraphql.path, "React": siReact.path, "Docker": siDocker.path,
  "LangChain": siLangchain.path,
};

const LINE: Record<string, string> = {
  "AWS": "M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.2 4.4 4.4 0 0 0 7 18z",                 // cloud
  "pgvector": "M4 20 19 5m0 0h-6m6 0v6M4 20h15M4 20V5",                                      // vectors from an origin
  "Card issuing": "M3 6h18v12H3zM3 10h18M6 15h4",                                          // card
  "Chargebacks": "M9 5 4 10l5 5M4 10h10a5 5 0 0 1 0 10h-3",                                 // money coming back
  "Settlement": "M4 8h15l-3-3M20 16H5l3 3",                                                 // two-way transfer
  "Billing jobs": "M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18M12 7v5l3 2",                         // clock
  "Idempotency": "M6 11h12v9H6zM9 11V8a3 3 0 0 1 6 0v3",                                    // lock
  "TDD": "M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18M8 12l3 3 5-6",                                 // passing check
};

/** SVG markup for a skill's icon, or "" if it has none. Drawn in currentColor so it inverts with the bubble. */
export function skillIcon(name: string): string {
  if (BRAND[name]) return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="${BRAND[name]}"/></svg>`;
  if (LINE[name]) return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${LINE[name]}"/></svg>`;
  return "";
}
