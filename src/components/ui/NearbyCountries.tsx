import Link from "next/link";
import type { Country } from "@/types";

interface NearbyCountriesProps {
  current: Country;
  allCountries: Country[];
  limit?: number;
}

function getFlagEmoji(iso2: string): string {
  return String.fromCodePoint(
    ...iso2.toUpperCase().split("").map((c) => 0x1f1e6 - 65 + c.charCodeAt(0))
  );
}

export default function NearbyCountries({ current, allCountries, limit = 6 }: NearbyCountriesProps) {
  const nearby = allCountries
    .filter((c) => c.region === current.region && c.iso2 !== current.iso2)
    .slice(0, limit);

  if (nearby.length === 0) return null;

  return (
    <section className="my-8">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
        More {current.region} Countries
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {nearby.map((c) => (
          <Link
            key={c.iso2}
            href={`/vpn/best/${c.slug}/`}
            className="flex items-center gap-2 p-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all text-sm"
          >
            <span>{getFlagEmoji(c.iso2)}</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100 truncate">{c.nameEn}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
