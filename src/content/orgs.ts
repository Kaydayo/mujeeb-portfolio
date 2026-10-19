import type { Org, OrgKey } from "./types";

/**
 * Companies and institutions. The real logo is public/logos/<key>.png (square, ~256px);
 * if the file is missing, a monogram in the brand colour is shown instead.
 */
export const ORGS: { [K in OrgKey]: Org } = {
  chipper: { n: "Chipper Cash", m: "C", c: "#3d2fd1" },
  maxng: { n: "Maxng", m: "Mx", c: "#0f6b5c" },
  casha: { n: "Casha!", m: "C!", c: "#ff5a1f" },
  tpp: { n: "The People Practice", m: "TPP", c: "#1d1f22" },
  funaab: { n: "FUNAAB", m: "FU", c: "#0f7a3d" },
  decagon: { n: "Decagon", m: "D", c: "#0b1f3a" },
  anthropic: { n: "Anthropic", m: "A\\", c: "#d97757" },
  scrumstudy: { n: "SCRUMstudy", m: "S", c: "#1c64b4" },
  nysc: { n: "NYSC", m: "NY", c: "#1f6b2e" },
  paper: { n: "Publication", m: "§", c: "#2f5bff" },
};
