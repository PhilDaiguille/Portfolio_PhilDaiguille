// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import { legacyRedirects } from "./src/infrastructure/data/routes.ts";

const site = "https://www.phildaiguille.fr";
// Build GitHub Pages (workflow deploy.yml) : site servi sous /Portfolio_PhilDaiguille/.
// `site` reste le domaine principal pour que canonical, og:image et sitemap y pointent.
const base = process.env.GITHUB_PAGES === "true" ? "/Portfolio_PhilDaiguille" : undefined;

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  // Astro ne préfixe pas la destination des redirections par `base` : on le fait ici.
  redirects: Object.fromEntries(
    Object.entries(legacyRedirects).map(([from, to]) => [from, (base ?? "") + to]),
  ),
  image: {
    // srcset + sizes générés pour chaque <Image>, bornés par son `width`.
    layout: "constrained",
    responsiveStyles: false,
  },
  integrations: [
    sitemap({
      // Les anciennes URLs ne sont que des redirections : hors sitemap.
      filter: (page) =>
        !Object.keys(legacyRedirects).some((path) => page === new URL(path, site).href),
    }),
  ],
});
