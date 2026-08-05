// Application layer: orchestrates domain/infrastructure for the home page use case.
import { experiences } from "../infrastructure/data/experiences";
import { skillGroups } from "../infrastructure/data/skills";
import { education } from "../infrastructure/data/education";
import { travaux, loisirs, veille } from "../infrastructure/data/showcase";
import { homeNavLinks } from "../infrastructure/data/nav-links";

export function getHomeContent() {
  return {
    experiences,
    skillGroups,
    education,
    travaux,
    loisirs,
    veille,
    navLinks: homeNavLinks,
  };
}
