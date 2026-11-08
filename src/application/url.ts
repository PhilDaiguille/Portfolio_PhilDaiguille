// Le site est servi à la racine (Vercel) ou sous /Portfolio_PhilDaiguille/ (GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Vrai pour la copie GitHub Pages : on la garde hors de l'index Google (le canonical pointe vers le domaine). */
export const isMirror = base !== "";

/** Préfixe un chemin interne absolu ("/projets/") par la base ; laisse ancres et URLs externes intactes. */
export const withBase = (href: string) =>
  href.startsWith("/") && !href.startsWith("//") ? base + href : href;

/** Chemin de la page sans la base : sert au canonical et au fil d'Ariane. */
export const stripBase = (pathname: string) =>
  base && pathname.startsWith(base) ? pathname.slice(base.length) || "/" : pathname;
