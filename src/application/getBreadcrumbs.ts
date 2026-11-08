import { routeLabels } from "../infrastructure/data/routes";

export interface Crumb {
  name: string;
  href: string;
}

/** "/projets/bts-sio/" → Accueil > Projets > BTS SIO */
/** `current` nomme la page courante quand elle n'est pas dans routeLabels (pages dynamiques). */
export function getBreadcrumbs(pathname: string, current?: string): Crumb[] {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const segments = path.split("/").filter(Boolean);
  const crumbs: Crumb[] = [{ name: "Accueil", href: "/" }];
  segments.forEach((_, i) => {
    const href = `/${segments.slice(0, i + 1).join("/")}/`;
    const name = routeLabels[href] ?? (i === segments.length - 1 ? current : undefined);
    if (name) crumbs.push({ name, href });
  });
  return crumbs;
}
