"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface CountryItem {
  iso2: string;
  nameEn: string;
  slug: string;
}

export default function LazyCountryGrid() {
  const [countries, setCountries] = useState<CountryItem[]>([]);

  useEffect(() => {
    fetch("/data/featured-countries.json")
      .then((r) => r.json())
      .then(setCountries)
      .catch(() => {});
  }, []);

  if (countries.length === 0) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-2xl aspect-[4/5] bg-slate-200 dark:bg-slate-800 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {countries.map((country) => (
        <Link
          key={country.iso2}
          href={`/vpn/best/${country.slug}`}
          className="group relative overflow-hidden rounded-2xl aspect-[4/5] ring-1 ring-slate-200 dark:ring-slate-700/60 hover:ring-blue-400 dark:hover:ring-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/countries/${country.slug}.webp`}
            srcSet={`/images/countries/${country.slug}-640w.webp 640w, /images/countries/${country.slug}-1024w.webp 1024w, /images/countries/${country.slug}.webp 2848w`}
            alt={`${country.nameEn} landmark`}
            width={400}
            height={500}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="flex items-center gap-2 mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                alt={`${country.nameEn} flag`}
                width={20}
                height={15}
                className="inline-block rounded-sm object-cover"
                loading="lazy"
              />
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">
                Best VPN 2026
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              {country.nameEn}
            </h3>
            <div className="flex items-center text-sm text-blue-200 font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              View guide
              <svg className="ml-1 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
