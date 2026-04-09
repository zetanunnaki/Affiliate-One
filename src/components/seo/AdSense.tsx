import Script from "next/script";

/**
 * Google AdSense loader — injects the AdSense script once per page.
 * Place once in the root layout (not per ad unit). Individual <ins> ad
 * blocks then render via the global window.adsbygoogle queue.
 *
 * The publisher ID is public (visible in any user's browser), so it's
 * safe to hardcode. AdSense ads only display once Google approves the
 * site for monetization — until then the script just enables crawling
 * for the review process.
 */
const ADSENSE_CLIENT = "ca-pub-5950611856721613";

export default function AdSense() {
  return (
    <Script
      id="adsense-loader"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
    />
  );
}

export { ADSENSE_CLIENT };
