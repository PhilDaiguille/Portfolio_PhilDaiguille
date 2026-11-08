// Domain: pure business models, no framework dependency.

/**
 * A local optimizable image, or a remote URL string.
 * `ImageMetadata` is Astro's ambient global for imported images — ne pas le redéclarer,
 * son champ `format` est une union littérale que `<Image>` exige.
 */
import type { AstroComponent } from "@lucide/astro";

export type ImageSource = ImageMetadata | string;

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
  /** Icône Lucide de la barre de navigation mobile. */
  icon: AstroComponent;
}

export interface Experience {
  year: string;
  role: string;
  organization: string;
  logo: ImageSource;
  /** Logo blanc sur transparent : inversé pour rester lisible sur la tuile claire. */
  logoInvert?: boolean;
  link: string;
  details?: string[];
  /** Postes successifs dans la même entreprise, du plus récent au plus ancien. */
  steps?: { year: string; role: string }[];
}

export interface Skill {
  name: string;
  /** Absent = pastille texte. */
  icon?: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Education {
  title: string;
  school: string;
}

export interface ShowcaseLink {
  title: string;
  description?: string;
  href: string;
  image?: ImageSource;
  /** Icône Lucide, prioritaire sur `image`. */
  icon?: AstroComponent;
  external?: boolean;
}

export interface CarouselProject {
  title: string;
  image: ImageSource;
  href: string;
}

export interface Project {
  title: string;
  /** 1-2 phrases : ce que ça fait, pour qui. */
  summary: string;
  stack: string[];
  year: string;
  tag?: string;
  demo?: string;
  /** Absent pour les dépôts privés. */
  repo?: string;
  image?: ImageSource;
  /** Présent = page détail générée sur /projets/<slug>/. */
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  slug: string;
  context: string;
  role: string;
  highlights: { title: string; text: string }[];
  learned: string;
}
