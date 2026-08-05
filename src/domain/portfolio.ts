// Domain: pure business models, no framework dependency.

/**
 * A local optimizable image, or a remote URL string.
 * `ImageMetadata` is Astro's ambient global for imported images — ne pas le redéclarer,
 * son champ `format` est une union littérale que `<Image>` exige.
 */
export type ImageSource = ImageMetadata | string;

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  year: string;
  role: string;
  organization: string;
  logo: ImageSource;
  link: string;
  details?: string[];
}

export interface Skill {
  name: string;
  icon: string;
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
  href: string;
  image?: ImageSource;
  external?: boolean;
}

export interface CarouselProject {
  title: string;
  image: ImageSource;
  href: string;
}
