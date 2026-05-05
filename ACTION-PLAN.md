# SEO Action Plan — BuySecureVPN.com

**Current Score:** 69/100 | **Target:** 85+ | **Gap:** 16 points
**Audit Date:** May 5, 2026

---

## Critical Priority (Fix Immediately)

### 1. Fix placeholder text on /about/ page
- **File:** `src/app/about/page.tsx` line 223
- **Issue:** "[Business address]" and "[Registration details]" are visible to users and crawlers
- **Impact:** Catastrophic E-E-A-T failure on a YMYL-adjacent site
- **Effort:** 5 minutes
- **Score Impact:** +2 Content Quality, +2 AI Readiness

### 2. Add canonical + OG + Twitter metadata to ~25 VPN feature pages
- **Files:** `src/app/vpn/kill-switch/page.tsx`, `src/app/vpn/protocols/page.tsx`, `src/app/vpn/split-tunneling/page.tsx`, `src/app/vpn/tor-vs-vpn/page.tsx`, `src/app/vpn/dedicated-ip/page.tsx`, `src/app/vpn/double-vpn/page.tsx`, `src/app/vpn/obfuscation/page.tsx`, `src/app/vpn/port-forwarding/page.tsx`, `src/app/vpn/smart-dns/page.tsx`, `src/app/vpn/always-on/page.tsx`, `src/app/vpn/vpn-vs-proxy/page.tsx`, `src/app/vpn/wireguard/page.tsx`, `src/app/vpn/china-vpn/page.tsx`, `src/app/vpn/free/page.tsx`, `src/app/vpn/ip-leak-test/page.tsx`, `src/app/vpn/speed-test-results/page.tsx`, `src/app/vpn/servers/page.tsx`, `src/app/vpn/streaming-guide/page.tsx`, all `/vpn/vpn-for-*` pages
- **Issue:** These pages have title + description but no canonical, openGraph, or twitter metadata
- **Impact:** Google may index URL variants as duplicates; zero social sharing previews
- **Effort:** 1-2 hours (template pattern, repeat for each page)
- **Score Impact:** +5 Technical, +3 On-Page

### 3. Add structured data to /deals/ page
- **File:** `src/app/deals/page.tsx`
- **Issue:** Zero JSON-LD on the highest-conversion page
- **Schema needed:** OfferCatalog with nested Offer items + BreadcrumbList
- **Effort:** 30-45 minutes
- **Score Impact:** +3 Schema

---

## High Priority (Fix Within 1 Week)

### 4. Add /deals/ to main navigation
- **File:** `src/lib/navigation.ts`
- **Issue:** Money page invisible from primary nav
- **Effort:** 5 minutes
- **Score Impact:** +2 On-Page

### 5. Add `og:url` to country page metadata
- **File:** `src/app/vpn/best/[slug]/page.tsx` line 51-56
- **Issue:** openGraph object missing `url` field on ~202 pages
- **Effort:** 5 minutes (single template fix)
- **Score Impact:** +1 Technical

### 6. Fix ArticleLayout author name (slug → display name)
- **File:** `src/components/layouts/ArticleLayout.tsx` (Article schema section)
- **Issue:** Author `name` renders as "marcus-johnson" instead of "Marcus Johnson"
- **Fix:** Look up author display name from author data before inserting into schema
- **Effort:** 15 minutes
- **Score Impact:** +2 Schema, +1 Content

### 7. Fix price:undefined bug in /best/vpn/ schema
- **File:** `src/app/best/vpn/page.tsx` (ItemList schema section)
- **Issue:** When salePrice is empty, Offer has no price field — invalid schema
- **Fix:** Conditionally include Offer only when price is defined
- **Effort:** 15 minutes
- **Score Impact:** +1 Schema

### 8. Add `<lastmod>` dates to sitemap.xml
- **File:** `public/sitemap.xml` or sitemap generation script
- **Issue:** All 533 URLs lack lastmod dates — crawl priority signal
- **Effort:** 30 minutes (generate from frontmatter dates or git history)
- **Score Impact:** +2 Technical

### 9. Add hreflang to provider pages
- **File:** `src/app/vpn/providers/[id]/page.tsx`
- **Issue:** 5 high-value provider pages have no hreflang alternates
- **Effort:** 15 minutes
- **Score Impact:** +1 Technical

### 10. Add ArticleSchema to VPN feature pages
- **Files:** Same ~25 VPN feature pages from item #2
- **Issue:** Article-format content with no schema
- **Effort:** 1 hour (create shared pattern)
- **Score Impact:** +2 Schema

---

## Medium Priority (Fix Within 1 Month)

### 11. Publish the 47-point testing methodology
- **Action:** Create a detailed /how-we-test/ or /methodology/ page disclosing the full rubric, tools used, test protocols, and scoring formula
- **Impact:** Major E-E-A-T boost — proves claims are backed by real process
- **Effort:** 2-3 hours
- **Score Impact:** +4 Content Quality, +2 AI Readiness

### 12. Add verifiable author identities
- **Action:** Create LinkedIn profiles for team members and link from /review-board/ and author pages. Add sameAs URLs to Person schema.
- **Impact:** Makes author credentials verifiable by Google's quality systems
- **Effort:** 1-2 hours
- **Score Impact:** +3 Content Quality

### 13. Expand provider reviews to 3,000+ words
- **Action:** Add speed test data tables, streaming compatibility matrices, server count charts, pricing comparison tables to NordVPN, Surfshark, Proton VPN, FastestVPN, and IPVanish reviews
- **Impact:** Competitive content depth + citable data points
- **Effort:** 3-5 hours per review
- **Score Impact:** +5 Content Quality, +3 AI Readiness

### 14. Fix duplicate H1 on country pages
- **File:** `src/components/layouts/CountryBestVpnLayout.tsx`
- **Issue:** Two H1 tags per page
- **Effort:** 15 minutes
- **Score Impact:** +1 On-Page

### 15. Make AggregateRating ratingCount consistent
- **Files:** `/best/vpn/page.tsx` and `/vpn/providers/[id]/page.tsx`
- **Issue:** 250 vs 1 — Google can flag discrepancies
- **Effort:** 15 minutes
- **Score Impact:** +1 Schema

### 16. Expand image sitemap
- **File:** Image sitemap generation script
- **Action:** Add provider logos, security page images, guide screenshots
- **Effort:** 30 minutes
- **Score Impact:** +1 Images

### 17. Add cross-links between provider review pages
- **Files:** 5 provider page.tsx files
- **Action:** Add "Compare with" section linking to other provider reviews and vs/ comparison pages
- **Effort:** 30 minutes
- **Score Impact:** +1 On-Page

### 18. Strengthen /countries/ index page
- **File:** `src/app/countries/page.tsx`
- **Action:** Add introductory copy, regional groupings, H3 headings
- **Effort:** 30 minutes
- **Score Impact:** +1 Content, +1 On-Page

---

## Low Priority (Backlog)

### 19. Add HowTo schema to step-by-step guides
- Rich results opportunity for /guides/vpn-setup-beginners/ etc.

### 20. Swap SVG logo for raster in Organization schema
- Google recommends PNG/JPG/WebP for structured data logo field

### 21. Add image:caption to image sitemap
- Extra context for Google Image Search ranking

### 22. Self-host flag icons as WebP
- Eliminate flagcdn.com external dependency and DNS lookup

### 23. Add SoftwareApplication schema to provider pages
- Enhanced SERP features for VPN software

### 24. Add intro paragraphs to guide content
- VPN setup guide needs device-specific screenshots and deeper content

### 25. Preload LCP images on country pages
- Add `<link rel="preload">` for hero images

---

## Projected Score After Fixes

| Phase | Items | Projected Score |
|-------|-------|-----------------|
| After Critical fixes (1-3) | 3 items | 75/100 |
| After High priority (4-10) | +7 items | 82/100 |
| After Medium priority (11-18) | +8 items | 89/100 |
| After Low priority (19-25) | +7 items | 92/100 |
