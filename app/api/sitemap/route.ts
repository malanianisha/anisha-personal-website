import { NextResponse } from "next/server";
import { siteConfig } from "@/data/siteMeta";

export async function GET() {
  const baseUrl = siteConfig.url;

  const routes = ["", "/projects", "/about", "/artwork", "/contact"];

  const urls = routes
    .map((route) => {
      const loc = `${baseUrl}${route}`;
      return `<url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
