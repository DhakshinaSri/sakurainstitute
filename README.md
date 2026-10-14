# Sakura Language & Career Institute – Website

A modern, accessible, SEO-friendly marketing website built with **React 19 + Vite**, styled with plain CSS
using the "Provence" palette (navy `#1E459F`, red `#CF2A2A`, yellow `#FABD32`, sand `#E1DCCA`).

## Quick start (VS Code)

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production build -> /dist (also regenerates sitemap.xml & robots.txt)
npm run preview    # preview the production build
```

Requires Node.js 18+ (20+ recommended).

## Before you go live (important)

1. Copy `.env.example` to `.env` and set:
   - `VITE_SITE_URL` – your real domain (used for canonical URLs, Open Graph, sitemap, robots.txt)
   - `VITE_CONTACT_EMAIL` – shown on the Contact page / footer
   - `VITE_FORM_ENDPOINT` – optional URL (Formspree, Getform, your API) that receives the enquiry form as JSON.
     Without it the form opens the visitor's email app (if `VITE_CONTACT_EMAIL` is set) or runs in demo mode.
2. A social-sharing image is included (`public/og-image.jpg`, 1200×630). Replace it any time with the same filename.
3. Deploy `/dist` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3…).
   Configure an **SPA fallback** so every path serves `index.html`
   (Netlify: `/* /index.html 200` in `public/_redirects`; Vercel: rewrites to `/index.html`).

## Project structure

```
index.html                 Base meta tags, Organization JSON-LD, fonts preload
scripts/generate-seo.mjs   Builds sitemap.xml + robots.txt from VITE_SITE_URL
public/                    favicon, manifest, robots.txt, sitemap.xml
src/
  main.jsx · App.jsx       Entry + routes (secondary pages are lazy-loaded)
  data/                    ALL website copy: courses, programs, FAQs, general content
  data/images.js           Photo registry (src, sizes, alt text) – swap pictures here
  assets/images/           Optimised WebP photos (2 sizes each)
  hooks/useSeo.js          Per-page title, description, canonical, OG tags, JSON-LD
  components/
    layout/                Header, Footer, Layout (skip link, focus management)
    ui/                    Button, Accordion, PageHero, CtaBanner, SectionHeading, Icon
    illustrations/         Logo, Blossom, HeroArt (inline SVG – no image downloads)
  pages/                   Home, About, Courses, Programs, OnlineLearning, Careers, FAQs, Contact, NotFound
  styles/                  global.css (tokens/base) · components.css · pages.css
```

To edit text, change the files in `src/data/` (and page files for headings/intro copy).
To change colours, edit the CSS variables at the top of `src/styles/global.css`.

## SEO

- One `<h1>` per page, logical heading order, semantic landmarks (`header`, `nav`, `main`, `footer`, `section`, `article`)
- Unique title + meta description + canonical + Open Graph/Twitter tags on every route
- JSON-LD structured data: `EducationalOrganization` (site-wide), `ItemList/Course` (Courses), `FAQPage` (FAQs)
- `sitemap.xml`, `robots.txt`, web manifest, descriptive internal links and breadcrumbs
- Self-hosted fonts (no third-party requests), code-splitting, small bundle (~80 KB gzip for the main chunk)

> Note: this is a client-rendered React app. Google renders JavaScript, but if you want pre-rendered HTML for
> every route (best for SEO on other crawlers/social previews), add a prerender step later
> (e.g. `vite-react-ssg`, `react-snap`, or migrate to Next.js/Astro). The component and data structure will carry over.

## Accessibility (WCAG 2.2 AA oriented)

- Verified with axe-core: **0 violations** on every route
- Skip-to-content link, visible 3px focus rings, full keyboard operation, focus moved to `<main>` on route change
- Accessible mobile menu (`aria-expanded`, Escape to close), accordion (ARIA disclosure pattern), breadcrumb nav
- Form: real labels, required/invalid state, inline error messages announced via `role="alert"`, focus to first error
- Colour pairs meet 4.5:1 contrast; decorative SVG/icons hidden from assistive tech
- Respects `prefers-reduced-motion`; touch targets ≥ 44px
- Typography: 18px base, **medium (500) body weight**, bold headings, nothing below 15px

## Content notes

All copy comes from the supplied *Sakura Language & Career Institute* document. No testimonials, pricing,
phone numbers or statistics were invented. The legal disclaimers (JLPT certification, no guarantee of
employment/visa) are kept on the relevant pages.
