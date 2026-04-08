"use client";

import { useState, useMemo } from "react";
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

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return searchIndex
      .filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      )
      .slice(0, 20);
  }, [query, searchIndex]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
        Search
      </h1>

      <div className="mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search countries, VPN providers, guides..."
          className="w-full px-4 py-3 text-base border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      </div>

      {query.length >= 2 && (
        <div>
          <p className="text-sm text-zinc-500 mb-4">
            {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
          </p>
          <div className="space-y-3">
            {results.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="block p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {r.title}
                    </span>
                    <p className="text-sm text-zinc-500 mt-1 line-clamp-1">
                      {r.description}
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded shrink-0">
                    {r.type}
                  </span>
                </div>
              </Link>
            ))}
            {results.length === 0 && (
              <p className="text-zinc-500 text-center py-8">
                No results found. Try a different search term.
              </p>
            )}
          </div>
        </div>
      )}

      {query.length < 2 && (
        <div className="text-center py-12 text-zinc-500">
          <p>Start typing to search across {searchIndex.length}+ pages.</p>
          <p className="text-sm mt-2">
            Try: &quot;United States&quot;, &quot;NordVPN&quot;, &quot;public wifi&quot;, &quot;travel&quot;
          </p>
        </div>
      )}
    </div>
  );
}
