"use client";

import { useState } from "react";
import Link from "next/link";
import countriesData from "@/data/countries.json";
import type { Country } from "@/types";

const countries = countriesData as Country[];

function CountryFlag({ iso2, name }: { iso2: string; name: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w40/${iso2.toLowerCase()}.png`}
      alt={`${name} flag`}
      width={24}
      height={18}
      className="inline-block rounded-sm object-cover"
      loading="lazy"
    />
  );
}

function getFlagEmoji(iso2: string): string {
  return String.fromCodePoint(
    ...iso2
      .toUpperCase()
      .split("")
      .map((c) => 0x1f1e6 - 65 + c.charCodeAt(0))
  );
}

const allRegions = [...new Set(countries.map((c) => c.region))];

const riskLabels: Record<string, string> = {
  censorship: "Censorship",
  "high-fraud": "Fraud risk",
  "restricted-platforms": "Restrictions",
  "tourist-wifi": "Public Wi-Fi",
};

export default function CountriesPage() {
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = countries
    .filter((c) => regionFilter === "all" || c.region === regionFilter)
    .filter(
      (c) =>
        search.length < 2 ||
        c.nameEn.toLowerCase().includes(search.toLowerCase()) ||
        c.iso2.toLowerCase().includes(search.toLowerCase())
    );

  const groupedByRegion: Record<string, Country[]> = {};
  for (const c of filtered) {
    if (!groupedByRegion[c.region]) groupedByRegion[c.region] = [];
    groupedByRegion[c.region].push(c);
  }

  return (
    <div>
      {/* ═══ HERO ═══ */}
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Global coverage
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            Best VPN by Country
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Expert-tested VPN recommendations for {countries.length} countries. Each
            guide covers local internet context, VPN legality, payment options, and
            travel advice.
          </p>

          {/* Hero search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search 202 countries..."
                aria-label="Search countries"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/95 dark:bg-slate-100 text-slate-900 placeholder:text-slate-400 border border-white/10 ring-1 ring-black/5 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-2xl"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Region filter chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setRegionFilter("all")}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
              regionFilter === "all"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            All ({countries.length})
          </button>
          {allRegions.map((region) => {
            const count = countries.filter((c) => c.region === region).length;
            return (
              <button
                key={region}
                onClick={() => setRegionFilter(region)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  regionFilter === region
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {region} ({count})
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 text-center">
          Showing <span className="font-semibold text-slate-700 dark:text-slate-300">{filtered.length}</span> of {countries.length} countries
          {search.length >= 2 && <> matching &ldquo;<span className="font-semibold text-slate-700 dark:text-slate-300">{search}</span>&rdquo;</>}
        </p>

        {/* Country grid */}
        {Object.entries(groupedByRegion).map(([region, regionCountries]) => (
          <section key={region} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {region}
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                {regionCountries.length}
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-slate-200 dark:from-slate-800 to-transparent" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {regionCountries.map((country) => (
                <Link
                  key={country.iso2}
                  href={`/vpn/best/${country.slug}/`}
                  className="group flex items-center gap-3 p-3.5 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="shrink-0 p-1.5 bg-slate-50 dark:bg-slate-800 rounded-md ring-1 ring-slate-200 dark:ring-slate-700">
                    <CountryFlag iso2={country.iso2} name={country.nameEn} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 block truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {country.nameEn}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                      {country.riskFlags.length > 0
                        ? country.riskFlags
                            .map((f) => riskLabels[f] || f)
                            .join(" \u00B7 ")
                        : "Open internet"}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
              <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">No countries found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Try a different search term or browse by region.</p>
          </div>
        )}

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Best VPN by Country",
            description: `VPN recommendations for ${countries.length} countries worldwide`,
            numberOfItems: countries.length,
            itemListElement: countries.slice(0, 50).map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `Best VPN for ${c.nameEn}`,
              url: `https://buysecurevpn.com/vpn/best/${c.slug}/`,
            })),
          }),
        }}
      />
      </div>
    </div>
  );
}
