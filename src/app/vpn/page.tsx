import Link from "next/link";
import type { Metadata } from "next";
import { getAllProviders, getAllIntents, getAllCountries } from "@/lib/data";

export const metadata: Metadata = {
  title: "VPN Hub — Guides, Reviews & Comparisons",
  description:
    "Everything you need to know about VPNs. Expert guides, provider reviews, country-specific recommendations, and use-case comparisons.",
};

export default function VpnHubPage() {
  const providers = getAllProviders();
  const intents = getAllIntents();
  const countries = getAllCountries().slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          VPN Hub
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Expert VPN guides, independent provider reviews, and country-specific
          recommendations to help you choose the right VPN for your needs.
        </p>
      </header>

      {/* By use case */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          VPN by Use Case
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {intents.map((intent) => (
            <Link
              key={intent.id}
              href={`/vpn/intent/${intent.slug}`}
              className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                VPN for {intent.label}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {intent.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Providers */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Provider Reviews
          </h2>
          <Link
            href="/vpn/providers"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {providers.slice(0, 3).map((p) => (
            <Link
              key={p.id}
              href={`/vpn/providers/${p.id}`}
              className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {p.name}
                </h3>
                <span className="text-sm font-bold text-green-700 dark:text-green-400">
                  {p.rating}/5
                </span>
              </div>
              <p className="text-sm text-zinc-500">{p.priceRange}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Countries */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Best VPN by Country
          </h2>
          <Link
            href="/countries"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            All countries &rarr;
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {countries.map((c) => (
            <Link
              key={c.iso2}
              href={`/vpn/best/${c.slug}`}
              className="p-3 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors font-medium text-zinc-900 dark:text-zinc-100"
            >
              Best VPN for {c.nameEn}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
