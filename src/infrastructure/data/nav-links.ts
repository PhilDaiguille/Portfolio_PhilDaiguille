import type { NavLink } from "../../domain/portfolio";
import House from "@lucide/astro/icons/house";
import FolderGit2 from "@lucide/astro/icons/folder-git-2";
import Briefcase from "@lucide/astro/icons/briefcase";
import Wrench from "@lucide/astro/icons/wrench";
import GraduationCap from "@lucide/astro/icons/graduation-cap";
import Mail from "@lucide/astro/icons/mail";
import Palette from "@lucide/astro/icons/palette";
import Newspaper from "@lucide/astro/icons/newspaper";

// Sur mobile, les 3 premiers liens deviennent les onglets de la barre du bas.
export const homeNavLinks: NavLink[] = [
  { label: "Projets", href: "#projets", icon: FolderGit2 },
  { label: "Expérience", href: "#Experience", icon: Briefcase },
  { label: "Compétences", href: "#Compétences", icon: Wrench },
  { label: "Formation", href: "#Formation", icon: GraduationCap },
  { label: "Contact", href: "#Contact", icon: Mail },
];

export const siteNavLinks: NavLink[] = [
  { label: "Accueil", href: "/", icon: House },
  { label: "Projets", href: "/projets/", icon: FolderGit2 },
  { label: "Loisirs", href: "/loisirs/", icon: Palette },
  { label: "Veille", href: "/veille/", icon: Newspaper },
  { label: "Contact", href: "#Contact", icon: Mail },
];
