import Link from "next/link";
import type { Metadata } from "next";
import { getAllProviders } from "@/lib/data";

export const metadata: Metadata = {
  title: "VPN Provider Reviews — Expert-Tested Comparisons",
  description:
    "In-depth, independent VPN provider reviews. We test speed, security, privacy, and reliability so you can make an informed choice.",
};

export default function ProvidersPage() {
  const providers = getAllProviders();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          VPN Provider Reviews
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Independent, expert-tested reviews of the top VPN services. We
          evaluate speed, security, privacy, and value for remote workers and
          travelers.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {providers.map((provider) => (
          <Link
            key={provider.id}
            href={`/vpn/providers/${provider.id}`}
            className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600">
                {provider.name}
              </h2>
              <span className="text-sm font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                {provider.rating}/5
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              {provider.notes}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {provider.positioningTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500">{provider.priceRange}</span>
              <span className="font-medium text-blue-600 group-hover:underline">
                Read full review &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
