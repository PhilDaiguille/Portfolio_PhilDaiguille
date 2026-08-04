// Application layer: orchestrates domain/infrastructure for the home page use case.
import { experiences } from "../infrastructure/data/experiences";
import { skillGroups } from "../infrastructure/data/skills";
import { education } from "../infrastructure/data/education";
import { travaux, seoProject, loisirs, veille } from "../infrastructure/data/showcase";
import { homeNavLinks } from "../infrastructure/data/nav-links";

export function getHomeContent() {
  return {
    experiences,
    skillGroups,
    education,
    travaux,
    seoProject,
    loisirs,
    veille,
    navLinks: homeNavLinks,
  };
}
