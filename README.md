# SecureWork — Remote Work Security & VPN Mega Site

A publisher-grade mega site covering remote work security globally, with country-level "Best VPN for X" pages for 120+ countries. Built with Next.js 16 + MDX + JSON datasets.

## Tech Stack

- **Next.js 16** (App Router, Turbopack, SSG)
- **TypeScript**
- **MDX** for editorial content
- **Tailwind CSS v4** for styling
- **JSON datasets** as source of truth (no database)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Run guardrails + build for production |
| `npm run build:next` | Build without guardrails |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run guardrails` | Run build-time content validation |

## Project Structure

```
src/
  app/                    # Next.js App Router pages (306 routes)
  components/
    layouts/              # ArticleLayout, MoneyLayout, CountryBestVpnLayout
    seo/                  # GlobalStructuredData, ProductSchema, HowToSchema
    ui/                   # 41 reusable UI components
  data/                   # JSON datasets (countries, providers, intents, etc.)
  lib/                    # Utilities (data loading, MDX, analytics, hreflang)
  types/                  # TypeScript type definitions
content/
  guides/                 # 14 MDX guide articles
  providers/              # 5 provider MDX reviews
  countries/              # 14 country editorial MDX blocks
  money/                  # Money page MDX content
scripts/
  guardrails.ts           # Build-time content validation
  expand-countries.ts     # Country context field expansion
```

## Key Features

- **306 static pages** generated at build time
- **120 countries** with unique context, FAQs, and editorial content
- **100 country + intent variant pages** (top 20 countries x 5 intents)
- **14 in-depth MDX guides** across VPN, security, and travel categories
- **5 provider MDX reviews** with speed tests and security audits
- **5 head-to-head VPN comparisons**
- **Interactive tools**: Wi-Fi Risk Audit, Security Checklist, VPN Compare
- **Full E-E-A-T compliance**: author pages, editorial policy, review board, corrections policy
- **SEO**: sitemaps, robots.txt, OG images, JSON-LD (Article, FAQ, Product, BreadcrumbList, WebSite, Organization), hreflang
- **Build-time guardrails** prevent thin/duplicate content
- **RSS feed**, newsletter, cookie consent, dark mode, search
- **Accessibility**: skip-to-content, semantic HTML, ARIA labels

## Content Model

- `countries.json` — 120 countries with unique internet/VPN/payment/travel notes
- `providers.json` — 5 VPN providers with features, pricing, ratings
- `intents.json` — 5 use cases (remote work, travel, privacy, streaming, teams)
- `authors.json` — 3 authors with credentials and sameAs links
- `comparisons.json` — 5 head-to-head matchups
- `categories.json` / `tags.json` — Content taxonomy
- `internalLinks.json` — Automated internal linking keywords

## Monetization

- **80% informational** (guides, explainers) — display ad placeholders
- **20% commercial** (best-of, reviews, country pages) — affiliate CTAs with disclosure
