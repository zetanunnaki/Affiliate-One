import Link from "next/link";
import type { Provider } from "@/types";

interface TopPicksProps {
  picks: {
    provider: Provider;
    badge: string;
    reason: string;
  }[];
  title?: string;
}

export default function TopPicks({ picks, title = "Our Top Picks" }: TopPicksProps) {
  return (
    <section className="my-8 p-6 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {title}
      </h2>
      <div className="space-y-3">
        {picks.map((pick, i) => (
          <Link
            key={pick.provider.id}
            href={`/vpn/providers/${pick.provider.id}`}
            className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600">
                  {pick.provider.name}
                </span>
                <span className="px-2 py-0.5 text-xs font-medium text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 rounded">
                  {pick.badge}
                </span>
                <span className="text-sm text-green-600 dark:text-green-400 font-semibold ml-auto">
                  {pick.provider.rating}/5
                </span>
              </div>
              <p className="text-sm text-zinc-500 truncate">{pick.reason}</p>
            </div>
            <span className="text-zinc-400 group-hover:text-blue-600 shrink-0">&rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
