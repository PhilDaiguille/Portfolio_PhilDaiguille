// Application layer: orchestrates domain/infrastructure for the home page use case.
import { experiences } from "../infrastructure/data/experiences";
import { skillGroups, otherSkills } from "../infrastructure/data/skills";
import { education } from "../infrastructure/data/education";
import { loisirs, veille } from "../infrastructure/data/showcase";
import { projects } from "../infrastructure/data/projects";
import { homeNavLinks } from "../infrastructure/data/nav-links";

export function getHomeContent() {
  return {
    experiences,
    skillGroups,
    otherSkills,
    education,
    featured: projects.slice(0, 4),
    loisirs,
    veille,
    navLinks: homeNavLinks,
  };
}
