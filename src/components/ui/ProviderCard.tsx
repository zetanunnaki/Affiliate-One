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
  return (
    <div className="group relative border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 bg-white dark:bg-zinc-900 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-300">
      {badge && (
        <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-3 shadow-sm">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {badge}
        </span>
      )}
      <div className="flex items-start justify-between mb-4 gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/providers/${provider.id}.svg`}
            alt={`${provider.name} logo`}
            width={40}
            height={40}
            className="w-10 h-10 shrink-0 rounded-lg object-contain bg-white dark:bg-white p-1 ring-1 ring-zinc-200 dark:ring-zinc-700"
            loading="lazy"
          />
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 truncate">
              {provider.name}
            </h3>
            <p className="text-sm text-zinc-500 truncate">{provider.priceRange}</p>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-end">
          <div className="flex items-center gap-0.5 mb-0.5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg
                key={idx}
                className={`w-3 h-3 ${idx < Math.floor(provider.rating) ? "text-yellow-400" : "text-zinc-200 dark:text-zinc-700"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
            {provider.rating}/5
          </span>
        </div>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        {provider.notes}
      </p>

      {countryNotes && (
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
          {countryNotes}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {provider.features.killSwitch && (
          <span className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
            Kill Switch
          </span>
        )}
        {provider.features.noLogsClaim && (
          <span className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
            No Logs
          </span>
        )}
        {provider.features.splitTunneling && (
          <span className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
            Split Tunneling
          </span>
        )}
        <span className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
          {provider.features.devices === 0
            ? "Unlimited devices"
            : `${provider.features.devices} devices`}
        </span>
      </div>

      <div className="flex gap-3">
        <a
          href={affiliateUrl}
          rel="noopener noreferrer sponsored"
          className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          View Deal
        </a>
        <Link
          href={`/vpn/providers/${provider.id}`}
          className="px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition-colors"
        >
          Full Review
        </Link>
      </div>
    </div>
  );
}
