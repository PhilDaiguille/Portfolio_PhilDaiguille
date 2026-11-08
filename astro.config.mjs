// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import { legacyRedirects } from "./src/infrastructure/data/routes.ts";

const site = "https://www.phildaiguille.fr";

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: "always",
  redirects: legacyRedirects,
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
