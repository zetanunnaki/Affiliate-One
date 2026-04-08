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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Best VPN by Country
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Expert-tested VPN recommendations for {countries.length} countries.
          Each guide includes local internet context, VPN legality, payment
          options, and travel advice.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search countries..."
          className="flex-1 px-4 py-2.5 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setRegionFilter("all")}
            className={`px-3 py-2 text-sm rounded-lg transition-colors ${
              regionFilter === "all"
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
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
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  regionFilter === region
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {region} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-zinc-500 mb-4">
        Showing {filtered.length} of {countries.length} countries
        {search.length >= 2 && ` matching "${search}"`}
      </p>

      {/* Country grid */}
      {Object.entries(groupedByRegion).map(([region, regionCountries]) => (
        <section key={region} className="mb-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-700">
            {region}{" "}
            <span className="text-sm font-normal text-zinc-500">
              ({regionCountries.length} countries)
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {regionCountries.map((country) => (
              <Link
                key={country.iso2}
                href={`/vpn/best/${country.slug}/`}
                className="flex items-center gap-3 p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
              >
                <CountryFlag iso2={country.iso2} name={country.nameEn} />
                <div>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 block">
                    {country.nameEn}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {country.riskFlags.length > 0
                      ? country.riskFlags
                          .map((f) => riskLabels[f] || f)
                          .join(" \u00B7 ")
                      : "Open internet"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {filtered.length === 0 && (
        <div className="text-center py-12 text-zinc-500">
          No countries match your search. Try a different term.
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
  );
}
