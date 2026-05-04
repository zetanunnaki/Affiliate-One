# Hosting Migration Guide

Current hosting: **GitHub Pages** (static HTML export from Next.js)

## Current Architecture

```
Next.js (output: "export") → /out/ directory → GitHub Pages
```

- Build command: `npm run build` (runs guardrails, feed, sitemap, responsive images, then `next build`)
- Output: ~600 static HTML files in `/out/`
- CDN: GitHub Pages with Cloudflare DNS (if configured)
- Domain: buysecurevpn.com

## Migration Options

### Option A: Cloudflare Pages (Recommended)

**Why:** Free tier handles our traffic. Automatic deploys from GitHub. Built-in analytics. Edge caching worldwide. No cold starts.

**Steps:**
1. Connect GitHub repo to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `out`
4. Node version: 20+
5. Add custom domain `buysecurevpn.com` in Cloudflare dashboard
6. Remove GitHub Pages CNAME file
7. Update DNS A/CNAME records to point to Cloudflare Pages

**Headers (`_headers` file in /public/):**
```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/images/*
  Cache-Control: public, max-age=31536000, immutable

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
```

**Redirects (`_redirects` file in /public/):**
```
/money/* /best/:splat 301
```

### Option B: Vercel

**Why:** Native Next.js platform. Can switch from static export to SSR/ISR later. Generous free tier.

**Steps:**
1. Remove `output: "export"` from next.config.ts
2. Remove `images: { unoptimized: true }` (Vercel handles image optimization)
3. Connect repo to Vercel
4. Framework preset: Next.js (auto-detected)
5. Add domain in Vercel dashboard
6. Update DNS records

**Trade-offs:**
- Pro: Can use ISR for fresh content without full rebuilds
- Pro: Built-in image optimization (can remove our sharp script)
- Pro: Edge middleware for A/B tests, geolocation
- Con: Free tier limits (100GB bandwidth/month)
- Con: Vendor lock-in for non-static features

### Option C: Netlify

**Steps:**
1. Connect repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`
4. Add `_headers` and `_redirects` files to `/public/`
5. Configure domain in Netlify dashboard

## Pre-Migration Checklist

- [ ] Backup current `/out/` directory
- [ ] Note all DNS records (A, CNAME, MX, TXT)
- [ ] Test build on target platform before DNS switch
- [ ] Verify all 600+ pages render correctly
- [ ] Check trailing slash behavior matches current setup
- [ ] Verify sitemap.xml and robots.txt accessible
- [ ] Test hreflang tags render on locale pages
- [ ] Confirm OG images load (absolute URLs in meta tags)
- [ ] Set up 301 redirects for any changed paths
- [ ] Monitor Google Search Console for crawl errors after switch

## DNS Migration (Zero-Downtime)

1. Lower TTL to 60s on current DNS records (24h before migration)
2. Deploy site to new platform and verify with preview URL
3. Update DNS records to point to new platform
4. Monitor for 48h
5. Restore normal TTL (3600s or higher)

## Rollback Plan

If issues arise:
1. Point DNS back to GitHub Pages (CNAME record)
2. GitHub Pages deployment is still live (don't delete the repo or branch)
3. Re-raise TTL once confirmed stable
