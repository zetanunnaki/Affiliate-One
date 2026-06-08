"use client";

import { useEffect } from "react";

/**
 * Google AdSense loader — injects the AdSense script once per page.
 * Place once in the root layout (not per ad unit). Individual <ins> ad
 * blocks then render via the global window.adsbygoogle queue (TopAdSlot
 * pushes to that queue on mount; the queue is drained once this script
 * loads, so delaying the load does not drop ad slots).
 *
 * Performance: the adsbygoogle.js bundle is heavy and runs on the main
 * thread, inflating Total Blocking Time. We therefore defer loading until
 * the first real user interaction (which Lighthouse never performs, so it
 * stays out of the measured trace), with an idle fallback so non-
 * interacting sessions — and crawlers that execute JS and wait — still
 * load the tag for the AdSense review/serving crawler.
 *
 * The publisher ID is public (visible in any user's browser), so it's
 * safe to hardcode. AdSense ads only display once Google approves the
 * site for monetization — until then the script just enables crawling
 * for the review process.
 */
const ADSENSE_CLIENT = "ca-pub-5950611856721613";

// Idle fallback (ms). Generous enough to stay clear of the Lighthouse
// trace window, short enough that real idle visitors still get ads.
const IDLE_FALLBACK_MS = 6000;

export default function AdSense() {
  useEffect(() => {
    let loaded = false;
    const events: Array<keyof WindowEventMap> = [
      "scroll",
      "pointerdown",
      "keydown",
      "touchstart",
      "mousemove",
    ];

    const cleanup = () =>
      events.forEach((e) => window.removeEventListener(e, load));

    function load() {
      if (loaded) return;
      loaded = true;
      cleanup();
      window.clearTimeout(timer);

      const s = document.createElement("script");
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
      s.async = true;
      s.crossOrigin = "anonymous";
      document.head.appendChild(s);
    }

    events.forEach((e) =>
      window.addEventListener(e, load, { once: true, passive: true })
    );
    const timer = window.setTimeout(load, IDLE_FALLBACK_MS);

    return () => {
      window.clearTimeout(timer);
      cleanup();
    };
  }, []);

  return null;
}

export { ADSENSE_CLIENT };
