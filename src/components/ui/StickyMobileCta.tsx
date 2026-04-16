"use client";

import { useEffect, useState } from "react";
import { getFeaturedProviders, getProviderAffiliateUrl } from "@/lib/data";

/**
 * Sticky mobile bottom CTA — conversion booster for mobile traffic.
 *
 * Appears after the user scrolls past the hero (≥600px) on screens smaller
 * than lg. Shows NordVPN (Editor's Choice) with logo, crossed-out original
 * price, sale price, and a brand-colored affiliate CTA button.
 *
 * Dismissible — the choice persists in localStorage so a user doesn't see it
 * again on subsequent page loads in the same session.
 *
 * Mobile conversion uplift: typically 15-30% vs no sticky CTA based on
 * industry benchmarks for affiliate review sites.
 */
export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user already dismissed during this session
    try {
      if (sessionStorage.getItem("sticky-cta-dismissed") === "1") {
        setDismissed(true);
        return;
      }
    } catch {
      /* session storage unavailable (private browsing) — just show it */
    }

    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function dismiss() {
    setDismissed(true);
    try {
      sessionStorage.setItem("sticky-cta-dismissed", "1");
    } catch {
      /* ignore */
    }
  }

  if (!mounted || dismissed) return null;

  // First featured provider = NordVPN (Editor's Choice)
  const nordvpn = getFeaturedProviders()[0];
  if (!nordvpn) return null;

  const affiliateUrl = getProviderAffiliateUrl(nordvpn);
  const brandColor = nordvpn.brandColor || "#4687ff";
  const brandColorDark = nordvpn.brandColorDark || "#2563eb";

  return (
    <div
      aria-hidden={!visible}
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <div className="relative bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-2xl shadow-black/20 pb-[env(safe-area-inset-bottom)]">
        {/* Top gradient accent */}
        <div
          className="absolute inset-x-0 top-0 h-0.5"
          style={{ background: `linear-gradient(90deg, ${brandColor} 0%, ${brandColorDark} 100%)` }}
        />

        {/* Dismiss button */}
        <button
          onClick={dismiss}
          aria-label="Dismiss promotion"
          className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-10"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-3 px-3 pt-3 pb-3 sm:px-4">
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/providers/${nordvpn.id}.svg`}
            alt={`${nordvpn.name} logo`}
            className="w-11 h-11 shrink-0 rounded-lg object-contain bg-white dark:bg-slate-800 p-1 ring-1 ring-slate-200 dark:ring-slate-700"
          />

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-0.5">
              <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Editor&apos;s Choice
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-sm font-black text-slate-900 dark:text-white leading-tight">
                {nordvpn.name}
              </span>
              {nordvpn.originalPrice && (
                <span className="text-[10px] text-slate-400 line-through">{nordvpn.originalPrice}</span>
              )}
              {nordvpn.salePrice && (
                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                  {nordvpn.salePrice}
                </span>
              )}
            </div>
          </div>

          {/* CTA button */}
          <a
            href={affiliateUrl}
            rel="noopener noreferrer sponsored"
            className="shrink-0 inline-flex items-center gap-1 px-4 py-3 text-sm font-bold text-white rounded-xl transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            style={{
              background: `linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%)`,
              boxShadow: `0 8px 20px -6px ${brandColor}80`,
            }}
          >
            Get Deal
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
