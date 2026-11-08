// Pages index de section (/projets/, /loisirs/, /veille/).
import { travaux, loisirs, veille } from "../infrastructure/data/showcase";
import { carouselProjects } from "../infrastructure/data/carousel-projects";

export const getSections = () => ({ travaux, loisirs, veille });

export const getEarlyProjects = () =>
  carouselProjects.map((p) => ({ title: p.title, href: p.href, image: p.image, external: true }));
