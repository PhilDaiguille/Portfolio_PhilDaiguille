import type { APIRoute } from "astro";

// Ancienne URL du sitemap (encore déclarée dans Search Console) : renvoie vers l'index généré par @astrojs/sitemap.
export const GET: APIRoute = ({ site }) =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${new URL("/sitemap-0.xml", site)}</loc></sitemap></sitemapindex>\n`,
    { headers: { "Content-Type": "application/xml" } },
  );
