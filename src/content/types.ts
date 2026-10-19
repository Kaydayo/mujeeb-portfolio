// Shapes for everything in src/content. Edit the content files; the sections render from them.

export interface Contact { email: string; github: string; linkedin: string; whatsapp: string }  // whatsapp: digits only, with country code

/** One thing the hologram can say. Add `audio` (a URL to a recording) and it lip-syncs to it. */
export interface VoiceLine { text: string; audio?: string }

export interface Job {
  co: string;          // company name
  logo: OrgKey;        // which logo to show
  sub: string;         // dates
  role: string;
  area: string;        // team / location
  k: string;           // one-line headline on the dial screen
  body: string[];      // bullet points on the dial screen
  tint: string;        // background tint while this job is on the dial
}

export interface CaseFile { t: string; tags: string; p: string; f: "billing" | "lock" | "revoke" | "disputes" }

/** [label, isDomainSkill] — domain skills are drawn as dark bubbles. */
export type Skill = [string, 0 | 1];

export interface Clip { src: string; label: string; w: number; h: number }
export interface Build { name: string; split: number; year: string; tags: string[]; what: string; clips: Clip[]; site?: string }  // site: optional live URL

export type OrgKey = "chipper" | "maxng" | "casha" | "tpp" | "funaab" | "decagon" | "anthropic" | "scrumstudy" | "nysc" | "paper";
export interface Org { n: string; m: string; c: string }  // name, monogram, brand colour

export interface PosterDesign {
  bg: string; accent: string; paper: string; ink: string;
  logos?: OrgKey[];
  icon?: "paper";
  motif: "rings" | "stripes"; motifColor: string;
  kicker: string; big: string; bigSize: number; field: string; meaning: string; foot: string;
}

export interface RecordEntry {
  slug: string;                       // used in the share link: #record/<slug>
  k: string; logo: OrgKey; t: string; org: string;
  caption: string;                    // line under the poster on the wall
  meta: [string, string][];
  text: string[];
  list: [string, string][];
  doc?: { src: string; alt: string; note: string };  // a copy of the certificate, shown on the record page
  poster: PosterDesign;
}
