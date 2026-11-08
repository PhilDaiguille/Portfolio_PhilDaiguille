// Arborescence du site : source unique pour le fil d'Ariane (visible + JSON-LD).
export const routeLabels: Record<string, string> = {
  "/projets/": "Projets",
  "/projets/bts-sio/": "BTS SIO",
  "/loisirs/": "Loisirs",
  "/loisirs/dessin/": "Dessin",
  "/loisirs/photographie/": "Photographie",
  "/veille/": "Veille technologique",
  "/veille/ux-ui/": "UX / UI",
};

// Anciennes URLs (site HTML) → nouvelles.
export const legacyRedirects: Record<string, string> = {
  "/blog/": "/veille/ux-ui/",
  "/projet/personnel/": "/projets/#premiers-projets",
  "/projets/personnels/": "/projets/#premiers-projets",
  "/projet/bts-sio/java/": "/projets/bts-sio/",
  "/projet/bts-sio/php/": "/projets/bts-sio/#ap-web",
};
