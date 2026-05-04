"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface IntentItem {
  slug: string;
  label: string;
  description: string;
}

export default function LazyIntents() {
  const [intents, setIntents] = useState<IntentItem[]>([]);

  useEffect(() => {
    fetch("/data/intents.json")
      .then((r) => r.json())
      .then(setIntents)
      .catch(() => {});
  }, []);

  if (intents.length === 0) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl animate-pulse h-40" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {intents.map((intent) => (
        <Link
          key={intent.slug}
          href={`/vpn/intent/${intent.slug}`}
          className="group relative overflow-hidden p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-2xl group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-colors" />
          <div className="relative">
            <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
              VPN for {intent.label}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              {intent.description}
            </p>
            <span className="inline-flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
              Explore guide
              <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
