import Link from "next/link";
import type { Provider } from "@/types";
import { getProviderAffiliateUrl } from "@/lib/data";

interface ProviderCardProps {
  provider: Provider;
  badge?: string;
  countryNotes?: string;
  countrySlug?: string;
}

export default function ProviderCard({
  provider,
  badge,
  countryNotes,
  countrySlug,
}: ProviderCardProps) {
  const affiliateUrl = getProviderAffiliateUrl(provider, countrySlug);
  const brandColor = provider.brandColor || "#3b82f6";
  const brandColorDark = provider.brandColorDark || "#1d4ed8";

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Top brand-colored strip */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${brandColor} 0%, ${brandColorDark} 100%)` }}
      />

      <div className="p-6">
        {badge && (
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full mb-3"
            style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {badge}
          </span>
        )}

        {/* Logo + name row */}
        <div className="flex items-start justify-between mb-4 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/providers/${provider.id}.svg`}
              alt={`${provider.name} logo`}
              width={48}
              height={48}
              className="w-12 h-12 shrink-0 rounded-xl object-contain bg-white p-1.5 ring-1 ring-slate-200 dark:ring-slate-700"
              loading="lazy"
            />
            <div className="min-w-0">
              <h3 className="text-lg font-black text-slate-900 dark:text-white truncate">
                {provider.name}
              </h3>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      className={`w-3 h-3 ${idx < Math.floor(provider.rating) ? "text-yellow-400" : "text-slate-200 dark:text-slate-700"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 ml-1">
                  {provider.rating}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Country-specific note */}
        {countryNotes && (
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-l-2" style={{ borderColor: brandColor }}>
            {countryNotes}
          </p>
        )}

        {/* Feature chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {provider.features.noLogsClaim && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 rounded">
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Logs
            </span>
          )}
          {provider.features.killSwitch && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 rounded">
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Kill Switch
            </span>
          )}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded">
            {provider.features.devices === 0 ? "∞ devices" : `${provider.features.devices} devices`}
          </span>
        </div>

        {/* Price row */}
        {provider.originalPrice && provider.salePrice ? (
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xs text-slate-400 line-through">{provider.originalPrice}</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white">{provider.salePrice}</span>
            {provider.discountBadge && (
              <span
                className="px-1.5 py-0.5 text-[9px] font-bold text-white rounded"
                style={{ backgroundColor: brandColor }}
              >
                {provider.discountBadge}
              </span>
            )}
          </div>
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            From <span className="font-bold text-slate-900 dark:text-white">{provider.priceRange}</span>
          </p>
        )}

        {/* Action buttons */}
        <div className="flex gap-2">
          <a
            href={affiliateUrl}
            rel="noopener noreferrer sponsored"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-bold text-white rounded-xl shadow-md transition-all hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%)`,
              boxShadow: `0 6px 14px -4px ${brandColor}50`,
            }}
          >
            Get Deal
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <Link
            href={`/vpn/providers/${provider.id}`}
            className="px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl transition-colors"
          >
            Review
          </Link>
        </div>
      </div>
    </div>
  );
}
