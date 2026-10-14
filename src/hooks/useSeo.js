import { useEffect } from "react";
import { SITE } from "../data/site.js";

const upsert = (selector, create) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const setMeta = (attr, key, content) => {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute(attr, key);
    return m;
  });
  el.setAttribute("content", content);
};

/**
 * Updates <title>, description, canonical, Open Graph / Twitter tags and
 * optional JSON-LD structured data for the current page.
 */
export default function useSeo({ title, description, path = "/", jsonLd, noindex = false }) {
  useEffect(() => {
    const url = `${SITE.url}${path === "/" ? "/" : path}`;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    const canonical = upsert('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.rel = "canonical";
      return l;
    });
    canonical.href = url;

    document.getElementById("page-jsonld")?.remove();
    if (jsonLd) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = "page-jsonld";
      s.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(s);
    }
    return () => document.getElementById("page-jsonld")?.remove();
  }, [title, description, path, jsonLd, noindex]);
}
