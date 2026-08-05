import type { ShowcaseLink } from "../../domain/portfolio";
import travauxPersonnel from "../../assets/images/assetexp/web_development_coding_code_browse_browser_icon-icons.com_59980.webp";
import travauxJava from "../../assets/images/assetexp/3709742-board-forum-information-text-web_108094.webp";
import dessinIcon from "../../assets/images/assetexp/design.webp";
import photoIcon from "../../assets/images/assetexp/photo.webp";
import veilleIcon from "../../assets/images/assetexp/tech_icon_158131.webp";

export const travaux: ShowcaseLink[] = [
  { title: "Mes projets", href: "/projet/personnel/", image: travauxPersonnel },
  {
    title: "Mes projets d'écoles - Atelier Professionel",
    href: "/projet/bts-sio/java/",
    image: travauxJava,
  },
];

export const loisirs: ShowcaseLink[] = [
  { title: "Arts plastiques / Arts numériques", href: "/loisirs/dessin/", image: dessinIcon },
  { title: "Photographie", href: "/loisirs/photographie/", image: photoIcon },
];

export const veille: ShowcaseLink = { title: "UX UI", href: "/blog/", image: veilleIcon };
