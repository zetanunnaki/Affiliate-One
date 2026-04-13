import Link from "next/link";
import type { ComparisonRow } from "@/types";
import { getProviderAffiliateUrl } from "@/lib/data";

interface ComparisonTableProps {
  rows: ComparisonRow[];
  countryName?: string;
  countrySlug?: string;
}

export default function ComparisonTable({
  rows,
  countryName,
  countrySlug,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto my-8 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-white dark:bg-slate-900">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50 border-b border-slate-200 dark:border-slate-800">
            <th className="px-5 py-4 text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Provider
            </th>
            <th className="px-5 py-4 text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Best For
            </th>
            <th className="px-5 py-4 text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Key Features
            </th>
            {countryName && (
              <th className="px-5 py-4 text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Notes for {countryName}
              </th>
            )}
            <th className="px-5 py-4 text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Price
            </th>
            <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {rows.map((row) => (
            <tr
              key={row.provider.id}
              className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/providers/${row.provider.id}.svg`}
                    alt={`${row.provider.name} logo`}
                    width={32}
                    height={32}
                    className="w-8 h-8 shrink-0 rounded-md object-contain bg-white p-1 ring-1 ring-zinc-200"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                      {row.provider.name}
                    </div>
                    <div className="text-xs text-zinc-500">
                      Rating: {row.provider.rating}/5
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                {row.bestFor}
              </td>
              <td className="px-4 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                {row.keyFeatures}
              </td>
              {countryName && (
                <td className="px-4 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  {row.countryNotes}
                </td>
              )}
              <td className="px-4 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {row.provider.priceRange}
              </td>
              <td className="px-4 py-4 text-center">
                <a
                  href={getProviderAffiliateUrl(row.provider, countrySlug)}
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  View Deal
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-zinc-500 mt-2 italic">
        {rows[0]?.provider.affiliate.disclosureLabel
          ? "Links marked with an asterisk are affiliate links. See our affiliate disclosure for details."
          : ""}
      </p>
    </div>
  );
}
