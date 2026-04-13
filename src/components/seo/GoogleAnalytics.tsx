import Script from "next/script";

/**
 * Google Analytics 4 — loads via next/script with afterInteractive strategy.
 *
 * Set NEXT_PUBLIC_GA_ID in .env.local (and as a GitHub Actions env / repo
 * secret for production builds). When unset, this component renders nothing,
 * so the site stays untracked locally and in PR previews.
 *
 * Example: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 */
export default function GoogleAnalytics() {
  // GA4 measurement IDs are public (visible in browser) — safe to hardcode
  const id = process.env.NEXT_PUBLIC_GA_ID || "G-108NSVHEVB";
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
