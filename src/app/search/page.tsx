"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import countriesData from "@/data/countries.json";
import providersData from "@/data/providers.json";
import intentsData from "@/data/intents.json";
import type { Country, Provider, Intent } from "@/types";

const countries = countriesData as Country[];
const providers = providersData as Provider[];
const intents = intentsData as Intent[];

interface SearchResult {
  title: string;
  href: string;
  description: string;
  type: string;
}

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Countries
  for (const c of countries) {
    results.push({
      title: `Best VPN for ${c.nameEn}`,
      href: `/vpn/best/${c.slug}`,
      description: `${c.vpnNotes.slice(0, 120)}...`,
      type: "Country",
    });
  }

  // Providers
  for (const p of providers) {
    results.push({
      title: `${p.name} Review`,
      href: `/vpn/providers/${p.id}`,
      description: p.notes,
      type: "Provider",
    });
  }

  // Intents
  for (const i of intents) {
    results.push({
      title: `Best VPN for ${i.label}`,
      href: `/vpn/intent/${i.slug}`,
      description: i.description,
      type: "Guide",
    });
  }

  // Static pages
  const statics = [
    { title: "Best VPN 2026", href: "/best/vpn", description: "Expert-tested VPN comparison", type: "Best Of" },
    { title: "Best Password Manager 2026", href: "/best/password-manager", description: "Top password managers compared", type: "Best Of" },
    { title: "Best 2FA App 2026", href: "/best/2fa-app", description: "Authenticator apps ranked", type: "Best Of" },
    { title: "Remote Work Security Guide", href: "/security/remote-work", description: "Complete guide to remote work security", type: "Guide" },
    { title: "Public Wi-Fi Safety Guide", href: "/security/public-wifi", description: "Stay safe on shared networks", type: "Guide" },
    { title: "Two-Factor Authentication Guide", href: "/security/2fa", description: "Set up 2FA on every account", type: "Guide" },
    { title: "Password Manager Guide", href: "/security/password-managers", description: "Stop reusing passwords", type: "Guide" },
    { title: "Travel Security Checklist", href: "/security/travel", description: "Security for digital nomads", type: "Guide" },
    { title: "Phishing Guide", href: "/security/phishing", description: "Recognize and avoid phishing", type: "Guide" },
    { title: "Wi-Fi Risk Self-Audit", href: "/tools/wifi-audit", description: "Assess your public Wi-Fi security", type: "Tool" },
  ];
  results.push(...statics);

  return results;
}

const typeStyles: Record<string, { bg: string; text: string; dot: string }> = {
  Country: { bg: "bg-emerald-50 dark:bg-emerald-900/30", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  Provider: { bg: "bg-blue-50 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  Guide: { bg: "bg-indigo-50 dark:bg-indigo-900/30", text: "text-indigo-700 dark:text-indigo-300", dot: "bg-indigo-500" },
  "Best Of": { bg: "bg-amber-50 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  Tool: { bg: "bg-violet-50 dark:bg-violet-900/30", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
};

const POPULAR_QUERIES = [
  "United States", "Japan", "NordVPN", "public wifi", "travel", "streaming", "gaming",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const searchIndex = useMemo(() => buildSearchIndex(), []);

  // Read ?q= from URL on mount (so 404 search + homepage search work)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("q");
      if (q) setQuery(q);
    }
  }, []);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return searchIndex
      .filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      )
      .slice(0, 30);
  }, [query, searchIndex]);

  // Group results by type
  const grouped: Record<string, SearchResult[]> = {};
  for (const r of results) {
    if (!grouped[r.type]) grouped[r.type] = [];
    grouped[r.type].push(r);
  }

  return (
    <div>
      {/* ═══ HERO with search ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Search
          </h1>
          <p className="text-slate-300 mb-8">
            Find guides, countries, VPN providers, and tools across {searchIndex.length}+ pages
          </p>

          <div className="relative max-w-2xl mx-auto">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search countries, VPN providers, guides..."
              aria-label="Search the site"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/95 dark:bg-slate-100 text-slate-900 placeholder:text-slate-400 border border-white/10 ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-2xl text-base"
              autoFocus
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Query < 2 chars: popular suggestions */}
        {query.length < 2 && (
          <div className="text-center py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-4">
              Popular searches
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {POPULAR_QUERIES.map((q) => (
                <button
                  key={q}
                  onClick={() => setQuery(q)}
                  className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {query.length >= 2 && (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {results.length === 0 ? "No results" : `${results.length} result${results.length !== 1 ? "s" : ""}`} for{" "}
                <span className="font-semibold text-slate-700 dark:text-slate-300">&ldquo;{query}&rdquo;</span>
              </p>
            </div>

            {results.length === 0 && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                  <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  No results for &ldquo;{query}&rdquo;
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Try a different search term or browse our popular content.
                </p>
                <Link
                  href="/sitemap-html"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full"
                >
                  Browse sitemap
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}

            {/* Grouped results */}
            {Object.entries(grouped).map(([type, items]) => {
              const style = typeStyles[type] || typeStyles.Guide;
              return (
                <section key={type} className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                    <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600 dark:text-slate-400">
                      {type}
                    </h2>
                    <span className="text-xs text-slate-400">({items.length})</span>
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800 ml-2" />
                  </div>

                  <div className="space-y-2">
                    {items.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="group flex items-start justify-between gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {r.title}
                          </div>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                            {r.description}
                          </p>
                        </div>
                        <svg className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
