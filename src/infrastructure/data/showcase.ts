import type { ShowcaseLink } from "../../domain/portfolio";
import Database from "@lucide/astro/icons/database";
import Palette from "@lucide/astro/icons/palette";
import Camera from "@lucide/astro/icons/camera";
import MonitorSmartphone from "@lucide/astro/icons/monitor-smartphone";

export const travaux: ShowcaseLink[] = [
  {
    title: "BTS SIO - Ateliers professionnels",
    description: "Application Java / JavaFX et site web PHP pour la Maison des Ligues.",
    href: "/projets/bts-sio/",
    icon: Database,
  },
];

export const loisirs: ShowcaseLink[] = [
  {
    title: "Arts plastiques / Arts numériques",
    description: "Dessins et illustrations, du papier au numérique.",
    href: "/loisirs/dessin/",
    icon: Palette,
  },
  {
    title: "Photographie",
    description: "Paysages, portraits et scènes urbaines.",
    href: "/loisirs/photographie/",
    icon: Camera,
  },
];

export const veille: ShowcaseLink[] = [
  {
    title: "UX / UI",
    description: "Pourquoi l'expérience et l'interface utilisateur sont devenues un enjeu crucial.",
    href: "/veille/ux-ui/",
    icon: MonitorSmartphone,
  },
];
