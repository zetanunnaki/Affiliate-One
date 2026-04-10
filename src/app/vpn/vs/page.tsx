import Link from "next/link";
import type { Metadata } from "next";
import comparisons from "@/data/comparisons.json";
import { getProviderById } from "@/lib/data";

export const metadata: Metadata = {
  title: "VPN Comparisons — Head-to-Head Reviews",
  description:
    "Side-by-side VPN comparisons. NordVPN vs Surfshark, Proton VPN vs Mullvad, and more. Features, speed, and price compared.",
};

export default function VsIndexPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          VPN Comparisons
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Can&apos;t decide between two VPNs? Our head-to-head comparisons break
          down the differences in speed, security, features, and price.
        </p>
      </header>

      <div className="space-y-4">
        {comparisons.map((comp) => {
          const providers = comp.providers.map((id) => getProviderById(id));
          return (
            <Link
              key={comp.slug}
              href={`/vpn/vs/${comp.slug}`}
              className="flex items-center justify-between p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
            >
              <div>
                <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600">
                  {comp.title}
                </h2>
                <p className="text-sm text-zinc-500 mt-1">
                  {providers
                    .map((p) => p && `${p.name} (${p.rating}/5)`)
                    .filter(Boolean)
                    .join(" vs ")}
                </p>
              </div>
              <span className="text-blue-600 text-sm font-medium shrink-0">
                Compare &rarr;
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
