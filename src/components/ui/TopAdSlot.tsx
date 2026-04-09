"use client";

import { useEffect } from "react";
import { ADSENSE_CLIENT } from "@/components/seo/AdSense";

/**
 * Top ad slot — sits right under the global Header on every page.
 *
 * Renders a Google AdSense responsive ad unit. Until Google approves the
 * site (and you create real ad slots in the AdSense dashboard), the unit
 * will be empty — but the <ins> element must be present so AdSense can
 * crawl and review the placement during the approval process.
 *
 * Once approved, replace AD_SLOT_ID with the slot ID from your AdSense
 * dashboard for this placement.
 */
const AD_SLOT_ID = ""; // TODO: paste from AdSense → Ads → By ad unit after approval

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function TopAdSlot() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // adsbygoogle not loaded yet — ignore
    }
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className="w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-transparent border-b border-slate-100 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="relative flex items-center justify-center min-h-[60px] sm:min-h-[90px] rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/60 ring-1 ring-black/[0.02] dark:ring-white/[0.02] overflow-hidden">
          <span className="absolute top-1.5 left-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 z-10">
            Advertisement
          </span>

          <ins
            className="adsbygoogle block w-full"
            style={{ display: "block", minHeight: 60 }}
            data-ad-client={ADSENSE_CLIENT}
            data-ad-slot={AD_SLOT_ID}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    </aside>
  );
}
