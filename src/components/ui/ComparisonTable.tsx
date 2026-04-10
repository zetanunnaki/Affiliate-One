import Link from "next/link";
import type { ComparisonRow } from "@/types";

interface ComparisonTableProps {
  rows: ComparisonRow[];
  countryName?: string;
}

export default function ComparisonTable({
  rows,
  countryName,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
        <thead className="bg-zinc-50 dark:bg-zinc-800">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
              Provider
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
              Best For
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
              Key Features
            </th>
            {countryName && (
              <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
                Notes for {countryName}
              </th>
            )}
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
              Price
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-zinc-900 divide-y divide-zinc-100 dark:divide-zinc-800">
          {rows.map((row) => (
            <tr
              key={row.provider.id}
              className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
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
                  href={row.provider.affiliate.trackingBaseUrl}
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
