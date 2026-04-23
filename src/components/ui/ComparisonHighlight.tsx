import Link from "next/link";
import type { Provider } from "@/types";
import { getProviderAffiliateUrl } from "@/lib/data";

interface ComparisonHighlightProps {
  left: Provider;
  right: Provider;
  /** Optional winner id — applies a subtle "Our pick" ribbon to that provider */
  winnerId?: string;
}

/**
 * Head-to-head comparison highlight shown at the top of /vpn/vs/[slug] pages.
 *
 * Layout: two provider cards side-by-side with a center "VS" medallion.
 * Each card uses the provider's brand color for the top accent, CTA button,
 * and shadow glow — creating strong visual separation. Stacks vertically
 * on mobile.
 *
 * Optional `winnerId` applies an "Our pick" ribbon + slightly elevated
 * shadow to that provider's card. Useful when an editorial verdict has
 * already been made.
 */
export default function ComparisonHighlight({
  left,
  right,
  winnerId,
}: ComparisonHighlightProps) {
  const renderCard = (p: Provider, isWinner: boolean) => {
    const affiliateUrl = getProviderAffiliateUrl(p);
    const brandColor = p.brandColor || "#3b82f6";
    const brandColorDark = p.brandColorDark || "#1d4ed8";

    return (
      <article
        className={`relative flex-1 overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-300 ${
          isWinner
            ? "border-2 shadow-2xl -translate-y-1"
            : "border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:-translate-y-0.5"
        }`}
        style={isWinner ? { borderColor: brandColor, boxShadow: `0 20px 50px -20px ${brandColor}80` } : undefined}
      >
        {/* Top brand-colored strip */}
        <div
          className="h-1.5 w-full"
          style={{ background: `linear-gradient(90deg, ${brandColor} 0%, ${brandColorDark} 100%)` }}
        />

        {/* Winner ribbon */}
        {isWinner && (
          <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold text-white rounded-full shadow-md"
               style={{ background: `linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%)` }}>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            OUR PICK
          </div>
        )}

        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 rounded-2xl bg-white ring-1 ring-slate-200 dark:ring-slate-700 p-3 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/providers/${p.id}.svg`}
                alt={`${p.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl font-black text-center text-slate-900 dark:text-white mb-1">
            {p.name}
          </h3>

          {/* Positioning + rating */}
          <div className="flex flex-col items-center gap-1 mb-4">
            {p.positioningLabel && (
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
              >
                {p.positioningLabel}
              </span>
            )}
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5">
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
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
                {p.rating}/5
              </span>
            </div>
          </div>

          {/* Key features */}
          <ul className="space-y-2 mb-5 min-h-[120px]">
            {(p.keyFeatures || []).slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 leading-snug">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: brandColor }}
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Price row */}
          {p.originalPrice && p.salePrice && (
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-xs text-slate-400 line-through">{p.originalPrice}</span>
              <span className="text-2xl font-black text-slate-900 dark:text-white">{p.salePrice}</span>
              {p.discountBadge && (
                <span
                  className="px-2 py-0.5 text-[10px] font-bold text-white rounded-full"
                  style={{ backgroundColor: brandColor }}
                >
                  {p.discountBadge}
                </span>
              )}
            </div>
          )}

          {/* CTA button */}
          {p.monetized === false ? (
            <Link
              href="/best/vpn"
              className="flex items-center justify-center gap-1.5 w-full px-4 py-3 text-sm font-bold text-white rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%)`,
                boxShadow: `0 8px 20px -6px ${brandColor}60`,
              }}
            >
              See Our Top Picks
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ) : (
            <>
              <a
                href={affiliateUrl}
                rel="noopener noreferrer sponsored"
                className="flex items-center justify-center gap-1.5 w-full px-4 py-3 text-sm font-bold text-white rounded-xl shadow-lg transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                style={{
                  background: `linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%)`,
                  boxShadow: `0 8px 20px -6px ${brandColor}60`,
                }}
              >
                Get {p.name}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href={`/vpn/providers/${p.id}`}
                className="block text-center mt-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Read full review →
              </Link>
            </>
          )}
        </div>
      </article>
    );
  };

  return (
    <section className="my-10">
      <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6 relative">
        {renderCard(left, winnerId === left.id)}

        {/* VS medallion — center on desktop, between cards on mobile */}
        <div className="flex md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 items-center justify-center md:pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 ring-4 ring-white dark:ring-slate-950 shadow-xl flex items-center justify-center">
            <span className="text-sm font-black text-slate-700 dark:text-slate-300 tracking-tight">VS</span>
          </div>
        </div>

        {renderCard(right, winnerId === right.id)}
      </div>
    </section>
  );
}
