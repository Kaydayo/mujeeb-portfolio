import type { RecordEntry } from "./types";

/**
 * "On record": one poster on the wall and one detail page per entry.
 * `poster` controls the printed poster (colours, the big word, the "what it means" line).
 */
export const RECORDS: RecordEntry[] = [
  {
    slug: "education", k: "file 01 · education", logo: "funaab", t: "BSc, Mathematical Science", org: "Federal University of Agriculture, Abeokuta",
    caption: "Federal University of Agriculture, Abeokuta · 2014–2019",
    meta: [["dates", "2014 – 2019"], ["where", "Abeokuta, Nigeria"], ["focus", "Statistics"]],
    text: ["A Bachelor of Science in Mathematical Science at the Federal University of Agriculture, Abeokuta, with statistics as the focus."],
    list: [["Degree", "Bachelor of Science, Mathematical Science"], ["Certificate", "Bachelor's degree, Statistics"], ["Research", "Published paper on life expectancy in Nigeria (2018), file 03"]],
    doc: { src: "certs/funaab-degree.jpg", alt: "Degree certificate: Bachelor of Science in Statistics, Second Class Upper Division, Federal University of Agriculture, Abeokuta, 10 May 2019", note: "Bachelor of Science in Statistics, Second Class Upper Division · 10 May 2019. Web copy, watermarked." },
    poster: { bg: "#0b7a3b", accent: "#f4c430", paper: "#fff6dc", ink: "#0c2614", logos: ["funaab"], motif: "rings", motifColor: "#f4c430",
      kicker: "Federal University of Agriculture, Abeokuta", big: "BSc", bigSize: 260, field: "Mathematical Science", meaning: "A degree in mathematics with a focus on statistics.", foot: "2014 — 2019 · Abeokuta" },
  },
  {
    slug: "training", k: "file 02 · training", logo: "decagon", t: "Diploma, Software Engineering", org: "Decagon Training Institute",
    caption: "Decagon Institute, Lagos · engineering and leadership · 2019–2020",
    meta: [["dates", "2019 – 2020"], ["where", "Lagos, Nigeria"], ["cohort", "SQ009"]],
    text: ["A software engineering diploma from Decagon in Lagos, taken through its Software Engineering and Leadership Training Program."],
    list: [["Diploma", "Software Engineering"], ["Programme", "Software Engineering and Leadership Training Program"]],
    poster: { bg: "#232a5c", accent: "#3bb54a", paper: "#f3f6ff", ink: "#0e1230", logos: ["decagon"], motif: "stripes", motifColor: "#3bb54a",
      kicker: "Decagon Training Institute · Lagos", big: "DIPLOMA", bigSize: 200, field: "Software Engineering", meaning: "Intensive software engineering and leadership training, cohort SQ009.", foot: "2019 — 2020 · Lagos" },
  },
  {
    slug: "publication", k: "file 03 · publication", logo: "paper", t: "Life expectancy in Nigeria", org: "Multivariate Analysis on Life Expectancy in Nigeria Using Regression Models",
    caption: "Published paper · a multivariate regression study · 2018",
    meta: [["year", "2018"], ["credit", "A.M.O"], ["method", "Multivariate regression"]],
    text: ["The study looks at the socio-economic and health factors behind life expectancy in Nigeria, using advanced regression models.", "It measures how income levels, access to healthcare and education affect life expectancy, with implications for policy-making and public health."],
    list: [["Variables", "Income levels, healthcare access, education"], ["Approach", "Multivariate analysis with regression models"], ["Use", "Evidence for policy-making and public health initiatives"]],
    poster: { bg: "#2f5bff", accent: "#ffd23f", paper: "#ffffff", ink: "#0b1b4d", icon: "paper", motif: "rings", motifColor: "#ffffff",
      kicker: "Published paper · 2018", big: "PAPER", bigSize: 230, field: "Life expectancy in Nigeria", meaning: "A regression study of how income, healthcare access and education affect life expectancy in Nigeria.", foot: "2018 · A.M.O" },
  },
  {
    slug: "certificates", k: "file 04 · certificates", logo: "anthropic", t: "Claude Code & Scrum", org: "Anthropic Skilljar · SCRUMstudy",
    caption: "Claude Code in Action · Claude Code 101 · Scrum Fundamentals Certified",
    meta: [["anthropic", "2 courses"], ["scrum", "SFC"], ["training", "SQ009"]],
    text: ["Certificates I keep on file: AI-assisted engineering from Anthropic, Scrum from SCRUMstudy, and the Decagon training programme."],
    list: [["Anthropic Skilljar", "Claude Code in Action"], ["Anthropic Skilljar", "Claude Code 101"], ["SCRUMstudy", "Scrum Fundamentals Certified (SFC)"], ["Decagon", "Software Engineering and Leadership Training Program, SQ009"], ["FUNAAB", "Bachelor's degree, Statistics"]],
    doc: { src: "certs/scrum-sfc.jpg", alt: "SCRUMstudy certificate: Scrum Fundamentals Certified, granted 22 September 2021, certificate ID 873930", note: "Scrum Fundamentals Certified (SFC™), SCRUMstudy · granted 22 September 2021 · certificate ID 873930." },
    poster: { bg: "#d97757", accent: "#fff4ec", paper: "#fff4ec", ink: "#2a140b", logos: ["anthropic", "scrumstudy"], motif: "stripes", motifColor: "#2a140b",
      kicker: "Anthropic Skilljar · SCRUMstudy", big: "CERTIFIED", bigSize: 170, field: "Claude Code & Scrum", meaning: "Claude Code in Action and Claude Code 101 from Anthropic, and Scrum Fundamentals Certified from SCRUMstudy.", foot: "On record · verified" },
  },
  {
    slug: "service", k: "file 05 · service", logo: "nysc", t: "NYSC, Kano", org: "National Youth Service Corps · Volunteer",
    caption: "Service year · community health and education outreach in Kusala · 2019–2020",
    meta: [["dates", "2019 – 2020"], ["where", "Kusala, Kano"], ["role", "Volunteer"]],
    text: ["My national service year was in Kusala, Kano, where I volunteered on skills, public health and education programmes alongside local leaders and organisations."],
    list: [["SAED programmes", "Skills Acquisition and Entrepreneurship Development work that gave local youth practical skills for self-reliance."], ["Community sensitisation", "Programmes on public health, education and environmental awareness in rural communities."], ["Outreach & advocacy", "Workshops and seminars on hygiene, nutrition and sustainable farming."], ["Leadership & teamwork", "Designed and ran community development projects with other corps members."]],
    poster: { bg: "#c9b47e", accent: "#0c7a43", paper: "#fffaf0", ink: "#1d2a12", logos: ["nysc"], motif: "rings", motifColor: "#0c7a43",
      kicker: "National Youth Service Corps · Volunteer", big: "SERVICE", bigSize: 200, field: "Kusala, Kano", meaning: "A national service year on skills, public health and education programmes with local communities.", foot: "2019 — 2020 · Kano" },
  },
];
