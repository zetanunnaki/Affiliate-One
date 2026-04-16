import Link from "next/link";
import type { Provider } from "@/types";

interface PricingTableProps {
  providers: Provider[];
}

export default function PricingTable({ providers }: PricingTableProps) {
  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/25">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">
            Side-by-side
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pricing Comparison
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-white dark:bg-slate-900">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50 border-b border-slate-200 dark:border-slate-800">
              <th className="px-5 py-4 text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Provider</th>
              <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Price</th>
              <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Devices</th>
              <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Rating</th>
              <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Money-Back</th>
              <th className="px-5 py-4 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {providers.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/providers/${p.id}.svg`}
                      alt={`${p.name} logo`}
                      width={32}
                      height={32}
                      className="w-8 h-8 shrink-0 rounded-md object-contain bg-white dark:bg-slate-800 p-1 ring-1 ring-slate-200 dark:ring-slate-700"
                    />
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{p.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-center">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{p.priceRange}</span>
                </td>
                <td className="px-5 py-4 text-center">
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {p.features.devices === 0 ? "Unlimited" : p.features.devices}
                  </span>
                </td>
                <td className="px-5 py-4 text-center">
                  <div className="inline-flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{p.rating}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 rounded-full">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    30 days
                  </span>
                </td>
                <td className="px-5 py-4 text-center">
                  <a
                    href={p.affiliate.trackingBaseUrl}
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg shadow-sm shadow-blue-600/25 transition-all hover:-translate-y-0.5"
                  >
                    View Deal
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 italic">
        Prices may vary by plan length and promotional offers. Last updated April 2026.
      </p>
    </section>
  );
}
