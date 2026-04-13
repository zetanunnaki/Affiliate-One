import Link from "next/link";
import type { Country } from "@/types";
import Flag from "@/components/ui/Flag";

interface NearbyCountriesProps {
  current: Country;
  allCountries: Country[];
  limit?: number;
}

export default function NearbyCountries({ current, allCountries, limit = 6 }: NearbyCountriesProps) {
  const nearby = allCountries
    .filter((c) => c.region === current.region && c.iso2 !== current.iso2)
    .slice(0, limit);

  if (nearby.length === 0) return null;

  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-md shadow-indigo-500/25">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
            Nearby countries
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            More {current.region} Guides
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {nearby.map((c) => (
          <Link
            key={c.iso2}
            href={`/vpn/best/${c.slug}/`}
            className="group flex items-center gap-2.5 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            <div className="shrink-0 p-1 bg-slate-50 dark:bg-slate-800 rounded-md ring-1 ring-slate-200 dark:ring-slate-700">
              <Flag iso2={c.iso2} name={c.nameEn} size="sm" />
            </div>
            <span className="flex-1 min-w-0 text-sm font-semibold text-slate-900 dark:text-slate-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {c.nameEn}
            </span>
            <svg className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
