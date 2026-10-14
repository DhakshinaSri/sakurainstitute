// Generates public/sitemap.xml and public/robots.txt from VITE_SITE_URL before each build.
import { writeFileSync } from "node:fs";
import { loadEnv } from "vite";

const env = loadEnv("production", process.cwd(), "VITE_");
const site = (env.VITE_SITE_URL || "https://www.example.com").replace(/\/$/, "");

const routes = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.8" },
  { path: "/courses", priority: "0.9" },
  { path: "/programs", priority: "0.9" },
  { path: "/online-learning", priority: "0.8" },
  { path: "/careers", priority: "0.7" },
  { path: "/faqs", priority: "0.7" },
  { path: "/contact", priority: "0.8" },
];

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${site}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);
console.log(`SEO files generated for ${site}`);
