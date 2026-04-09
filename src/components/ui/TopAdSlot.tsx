/**
 * Top ad slot — sits right under the global Header on every page.
 *
 * Design: slim, design-integrated banner with subtle gradient and a clear
 * "Advertisement" label so users know what it is. When real AdSense or
 * Mediavine code is dropped in, replace the placeholder div with the
 * provider's <ins> / <script> snippet.
 *
 * Sizing: ~90px tall on desktop, ~70px on mobile — small enough not to push
 * content below the fold, large enough for a 728×90 leaderboard or 320×50
 * mobile banner.
 */
export default function TopAdSlot() {
  return (
    <aside
      aria-label="Advertisement"
      className="w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-transparent border-b border-slate-100 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="relative flex items-center justify-center min-h-[60px] sm:min-h-[80px] rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/60 ring-1 ring-black/[0.02] dark:ring-white/[0.02] overflow-hidden">
          {/* Subtle decorative accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.04),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none" />

          {/* Label */}
          <span className="absolute top-1.5 left-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
            Advertisement
          </span>

          {/*
            ─── Replace this placeholder with your ad network code ───
            AdSense example:
              <ins className="adsbygoogle" style={{display:'block'}} data-ad-client="ca-pub-XXXXX" data-ad-slot="YYYYY" data-ad-format="auto" data-full-width-responsive="true" />
            Mediavine: their script auto-injects into a div with the right id.
          */}
          <div className="text-xs text-slate-400 dark:text-slate-600 italic">
            Ad slot — 728×90 / responsive
          </div>
        </div>
      </div>
    </aside>
  );
}
