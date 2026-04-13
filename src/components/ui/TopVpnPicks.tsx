import Link from "next/link";
import { getFeaturedProviders, getProviderAffiliateUrl } from "@/lib/data";

interface TopVpnPicksProps {
  /** Optional country slug to use localized affiliate URLs (e.g. Korea/China). */
  countrySlug?: string;
  /** Optional heading override */
  heading?: string;
  /** Optional eyebrow label */
  eyebrow?: string;
  /** Compact mode: tighter spacing, used for sidebars/inline placements */
  compact?: boolean;
}

/**
 * Conversion-optimized top picks widget — the money-maker.
 *
 * Design: horizontal card rows (inspired by editorial comparison sites).
 * Each row has:
 *   - Colored "positioning" header strip with the tag (Best Overall / Privacy / Budget)
 *   - Logo column on the left with star rating below
 *   - 3 key feature bullets with green checkmarks in the middle
 *   - Discount badge + big branded CTA button on the right
 *
 * Layouts for the 3 monetized providers only (NordVPN, Proton VPN, FastestVPN).
 * Brand colors from providers.json drive the CTA + accent styling per card.
 */
export default function TopVpnPicks({
  countrySlug,
  heading = "Our Top 3 VPN Picks",
  eyebrow = "Expert-tested",
  compact = false,
}: TopVpnPicksProps) {
  const providers = getFeaturedProviders();
  if (providers.length === 0) return null;

  return (
    <section className={compact ? "my-8" : "my-12"}>
      {/* ═══ Section header ═══ */}
      <div className="text-center mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400 mb-2">
          {eyebrow}
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {heading}
        </h2>
      </div>

      {/* ═══ Provider rows ═══ */}
      <div className="space-y-4 sm:space-y-5">
        {providers.map((p, idx) => {
          const affiliateUrl = getProviderAffiliateUrl(p, countrySlug);
          const isEditorsPick = idx === 0;

          return (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Colored top header strip with positioning label */}
              <div
                className="flex items-center gap-2 px-5 py-2.5 border-b border-slate-100 dark:border-slate-800"
                style={{
                  background: `linear-gradient(90deg, ${p.brandColor}1a 0%, ${p.brandColor}08 100%)`,
                }}
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: p.brandColor }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-xs sm:text-sm font-bold tracking-wide text-slate-900 dark:text-white">
                  {p.positioningLabel || "Top Pick"}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                  · {p.name}
                </span>
                {isEditorsPick && (
                  <span className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-sm">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    EDITOR&apos;S CHOICE
                  </span>
                )}
              </div>

              {/* Main row: logo | features | CTA */}
              <div className="grid md:grid-cols-[200px_1fr_260px] gap-5 p-5 sm:p-6 items-center">
                {/* ── Logo + rating column ── */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                  <div className="shrink-0 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white ring-1 ring-slate-200 dark:ring-slate-700 p-2.5 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/providers/${p.id}.svg`}
                      alt={`${p.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 mb-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3.5 h-3.5 ${i < Math.floor(p.rating) ? "text-yellow-400" : "text-slate-200 dark:text-slate-700"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                      Score: <span className="text-slate-900 dark:text-white">{p.rating}</span>/5
                    </div>
                  </div>
                </div>

                {/* ── Features column ── */}
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3 hidden md:block">
                    {p.tagline}
                  </p>
                  <ul className="space-y-2">
                    {(p.keyFeatures || []).slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 leading-snug">
                        <svg
                          className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── CTA column ── */}
                <div className="flex flex-col items-stretch md:items-end gap-2">
                  {p.discountBadge && (
                    <div className="flex items-center justify-center md:justify-end gap-1.5 text-[11px] font-bold text-rose-600 dark:text-rose-400">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2V8a1 1 0 01-1-1z" />
                      </svg>
                      {p.discountBadge}
                    </div>
                  )}
                  {p.originalPrice && p.salePrice && (
                    <div className="text-center md:text-right">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 line-through">{p.originalPrice}</div>
                      <div className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                        {p.salePrice}
                      </div>
                    </div>
                  )}
                  <a
                    href={affiliateUrl}
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-bold text-white rounded-xl shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    style={{
                      background: `linear-gradient(135deg, ${p.brandColor} 0%, ${p.brandColorDark} 100%)`,
                      boxShadow: `0 10px 20px -8px ${p.brandColor}40`,
                    }}
                  >
                    Get {p.name}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <Link
                    href={`/vpn/providers/${p.id}`}
                    className="text-center md:text-right text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Read full review →
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Disclosure note */}
      <p className="mt-5 text-center text-[11px] text-slate-500 dark:text-slate-400">
        Affiliate disclosure: We may earn a commission when you click &ldquo;Get&rdquo; buttons
        at no extra cost to you.{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-blue-600 dark:hover:text-blue-400">
          Read our affiliate disclosure
        </Link>
      </p>
    </section>
  );
}
