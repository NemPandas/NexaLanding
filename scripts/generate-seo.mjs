import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const projectDir = new URL("..", import.meta.url).pathname.replace(/^\/(.:\/)/, "$1");
const config = JSON.parse(readFileSync(join(projectDir, "seo.config.json"), "utf8"));
const template = readFileSync(join(projectDir, "dist", "index.html"), "utf8");

function readSiteUrl() {
  let env = {};
  try {
    for (const line of readFileSync(join(projectDir, ".env"), "utf8").split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (match) env[match[1]] = match[2].replace(/^['"]|['"]$/g, "");
    }
  } catch {}
  return (process.env.SITE_URL || process.env.VITE_SITE_URL || env.SITE_URL || env.VITE_SITE_URL || "").replace(/\/+$/, "");
}

const siteUrl = readSiteUrl();
const absolute = (path) => siteUrl ? `${siteUrl}${path === "/" ? "" : path}` : path;
const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function render(page, language, localized) {
  const routePath = page.path === "/" ? "" : page.path;
  const currentPath = localized ? `/${language}${routePath}` : page.path;
  const canonical = absolute(currentPath);
  const alternateHu = absolute(`/hu${routePath}`);
  const alternateEn = absolute(`/en${routePath}`);
  const alternateDefault = absolute(page.path);
  const meta = page[language];
  const robots = page.index ? "index, follow, max-image-preview:large" : "noindex, follow";
  const socialImage = absolute("/og.png");
  const structuredData = siteUrl && page.path === "/" ? `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: config.siteName, url: siteUrl, logo: `${siteUrl}/favicon.svg` },
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: config.siteName, url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` } }
    ]
  })}</script>` : "";
  const tags = `
    <meta name="robots" content="${robots}" />
    <meta name="theme-color" content="#05030d" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="hu" href="${alternateHu}" />
    <link rel="alternate" hreflang="en" href="${alternateEn}" />
    <link rel="alternate" hreflang="x-default" href="${alternateDefault}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${config.siteName}" />
    <meta property="og:locale" content="${language === "hu" ? "hu_HU" : "en_US"}" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${socialImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Nexa – Digital products. Real value." />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${socialImage}" />
    ${structuredData}`;
  return template
    .replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/, `<meta name="description" content="${escapeHtml(meta.description)}" />`)
    .replace(/\s*<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/g, "")
    .replace(/\s*<meta\s+name="theme-color"\s+content="[^"]*"\s*\/?>/g, "")
    .replace("</head>", `${tags}\n  </head>`);
}

for (const page of config.pages) {
  for (const language of ["hu", "en"]) {
    const target = join(projectDir, "dist", language, page.path === "/" ? "" : page.path.slice(1), "index.html");
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, render(page, language, true));
  }
  if (page.path !== "/") {
    const target = join(projectDir, "dist", page.path.slice(1), "index.html");
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, render(page, "en", false));
  }
}
writeFileSync(join(projectDir, "dist", "index.html"), render(config.pages[0], "en", false));

const indexablePages = config.pages.filter((page) => page.index);
if (siteUrl) {
  const urls = indexablePages.flatMap((page) => [page.path, `/hu${page.path === "/" ? "" : page.path}`, `/en${page.path === "/" ? "" : page.path}`]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((path) => `  <url><loc>${escapeHtml(absolute(path))}</loc></url>`).join("\n")}\n</urlset>\n`;
  writeFileSync(join(projectDir, "dist", "sitemap.xml"), sitemap);
  writeFileSync(join(projectDir, "dist", "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
}
