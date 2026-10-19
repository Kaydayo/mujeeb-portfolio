// Entry point. Sections are initialised top to bottom (ScrollTrigger pins must be created in page order),
// then one frame loop drives the per-frame work that isn't owned by GSAP.
import "./styles/index.css";
import { reduceMotion } from "./lib/dom";
import { ScrollTrigger } from "./lib/scroll";
import { initCursor } from "./lib/pointer";
import { initHero, runBoot } from "./sections/hero";
import { initNav, updateActiveLink } from "./sections/nav";
import { initAbout } from "./sections/about";
import { initExperience } from "./sections/experience";
import { initCases, drawCaseReplay, casesOnScreen } from "./sections/cases";
import { initSkills, tickSkills } from "./sections/skills";
import { initBuilds } from "./sections/builds";
import { initWall } from "./sections/on-record/wall";
import { initRecordPage } from "./sections/on-record/record-page";
import { initResume } from "./sections/resume";
import { initContact, initMarquee, tickMarquee } from "./sections/contact";

document.body.classList.add("booting");

initCursor();
initHero();
initNav();
initAbout();
initExperience();
initCases();
initSkills();
initBuilds();
initWall().then(() => ScrollTrigger.refresh());
initRecordPage();
initResume();
initContact();
initMarquee();

function frame(now: number) {
  tickMarquee();
  updateActiveLink();
  if (!reduceMotion && casesOnScreen()) drawCaseReplay(now / 1000);
  tickSkills();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

runBoot();
