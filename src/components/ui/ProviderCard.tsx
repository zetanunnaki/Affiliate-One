import Link from "next/link";
import type { Provider } from "@/types";

interface ProviderCardProps {
  provider: Provider;
  badge?: string;
  countryNotes?: string;
}

export default function ProviderCard({
  provider,
  badge,
  countryNotes,
}: ProviderCardProps) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 bg-white dark:bg-zinc-900 hover:shadow-md transition-shadow">
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 rounded-full mb-3">
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
        <div className="shrink-0 flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <span className="text-sm font-bold text-green-700 dark:text-green-400">
            {provider.rating}
          </span>
          <span className="text-xs text-green-600 dark:text-green-500">
            /5
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
          href={provider.affiliate.trackingBaseUrl}
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
