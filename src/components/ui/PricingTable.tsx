import Link from "next/link";
import type { Provider } from "@/types";

interface PricingTableProps {
  providers: Provider[];
}

export default function PricingTable({ providers }: PricingTableProps) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        Pricing Comparison
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
          <thead className="bg-zinc-50 dark:bg-zinc-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Provider</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Price Range</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Devices</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Rating</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Money-Back</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {providers.map((p) => (
              <tr key={p.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                <td className="px-4 py-4">
                  <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{p.name}</span>
                </td>
                <td className="px-4 py-4 text-center text-sm text-zinc-700 dark:text-zinc-300">{p.priceRange}</td>
                <td className="px-4 py-4 text-center text-sm text-zinc-700 dark:text-zinc-300">
                  {p.features.devices === 0 ? "Unlimited" : p.features.devices}
                </td>
                <td className="px-4 py-4 text-center">
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">{p.rating}/5</span>
                </td>
                <td className="px-4 py-4 text-center text-sm text-zinc-700 dark:text-zinc-300">30 days</td>
                <td className="px-4 py-4 text-center">
                  <Link href={`/vpn/providers/${p.id}`} className="inline-flex px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-zinc-500 mt-2">Prices may vary by plan length and promotional offers. Last updated April 2026.</p>
    </section>
  );
}
