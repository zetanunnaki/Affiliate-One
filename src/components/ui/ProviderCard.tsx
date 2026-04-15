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
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Top brand-colored strip */}
      <div
        className="h-1 w-full shrink-0"
        style={{ background: `linear-gradient(90deg, ${brandColor} 0%, ${brandColorDark} 100%)` }}
      />

      <div className="flex-1 flex flex-col p-5">
        {badge && (
          <span
            className="self-start inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-full mb-3 whitespace-nowrap"
            style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
          >
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {badge}
          </span>
        )}

        {/* Logo + name + rating */}
        <div className="flex items-center gap-3 mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/providers/${provider.id}.svg`}
            alt={`${provider.name} logo`}
            width={44}
            height={44}
            className="w-11 h-11 shrink-0 rounded-xl object-contain bg-white p-1.5 ring-1 ring-slate-200 dark:ring-slate-700"
            loading="lazy"
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-black text-slate-900 dark:text-white truncate leading-tight">
              {provider.name}
            </h3>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    className={`w-3 h-3 ${idx < Math.floor(provider.rating) ? "text-amber-400" : "text-slate-200 dark:text-slate-700"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 ml-1">
                {provider.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Country-specific note */}
        {countryNotes && (
          <p className="text-[13px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-l-2" style={{ borderColor: brandColor }}>
            {countryNotes}
          </p>
        )}

        {/* Feature chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {provider.features.noLogsClaim && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 rounded whitespace-nowrap">
              <svg className="w-2.5 h-2.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Logs
            </span>
          )}
          {provider.features.killSwitch && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 rounded whitespace-nowrap">
              <svg className="w-2.5 h-2.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Kill Switch
            </span>
          )}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded whitespace-nowrap">
            {provider.features.devices === 0 ? "Unlimited" : `${provider.features.devices} devices`}
          </span>
        </div>

        {/* Spacer to push price + CTA to the bottom */}
        <div className="flex-1" />

        {/* Price block */}
        {provider.originalPrice && provider.salePrice ? (
          <div className="mb-3">
            {provider.discountBadge && (
              <span
                className="inline-block mb-1.5 px-2 py-0.5 text-[10px] font-black text-white rounded whitespace-nowrap"
                style={{ background: `linear-gradient(135deg, ${brandColor}, ${brandColorDark})` }}
              >
                {provider.discountBadge}
              </span>
            )}
            <div className="flex items-baseline flex-wrap gap-x-2">
              <span className="text-[11px] text-slate-400 line-through font-semibold whitespace-nowrap">
                {provider.originalPrice}
              </span>
              <span className="text-2xl font-black text-slate-900 dark:text-white leading-none whitespace-nowrap">
                {provider.salePrice}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            From <span className="font-black text-slate-900 dark:text-white">{provider.priceRange}</span>
          </p>
        )}

        {/* Action buttons */}
        <div className="flex flex-col gap-2">
          <a
            href={affiliateUrl}
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-black tracking-wide text-white rounded-xl shadow-md transition-all hover:-translate-y-0.5 uppercase"
            style={{
              background: `linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%)`,
              boxShadow: `0 8px 18px -6px ${brandColor}55`,
            }}
          >
            Get Deal
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <Link
            href={`/vpn/providers/${provider.id}`}
            className="text-center text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors underline decoration-dotted underline-offset-2"
          >
            Read full review
          </Link>
        </div>
      </div>
    </div>
  );
}
