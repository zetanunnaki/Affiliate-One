import Link from "next/link";
import type { Metadata } from "next";
import { getAllCountries, getAllRegions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Best VPN by Country — Global Directory",
  description:
    "Find the best VPN for your country. Expert-tested VPN recommendations for every country, with local internet context, regulations, and security advice.",
};

function getFlagEmoji(iso2: string): string {
  return String.fromCodePoint(
    ...iso2
      .toUpperCase()
      .split("")
      .map((c) => 0x1f1e6 - 65 + c.charCodeAt(0))
  );
}

export default function CountriesPage() {
  const countries = getAllCountries();
  const regions = getAllRegions();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Best VPN by Country
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Expert-tested VPN recommendations for {countries.length} countries.
          Each guide includes local internet context, VPN legality, payment
          options, and travel advice.
        </p>
      </header>

      {regions.map((region) => {
        const regionCountries = countries.filter((c) => c.region === region);
        return (
          <section key={region} className="mb-12">
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
                  href={`/vpn/best/${country.slug}`}
                  className="flex items-center gap-3 p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
                >
                  <span className="text-xl">{getFlagEmoji(country.iso2)}</span>
                  <div>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 block">
                      {country.nameEn}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {country.riskFlags.length > 0
                        ? country.riskFlags
                            .map(
                              (f) =>
                                ({
                                  censorship: "Censorship",
                                  "high-fraud": "Fraud risk",
                                  "restricted-platforms": "Restrictions",
                                  "tourist-wifi": "Public Wi-Fi",
                                })[f]
                            )
                            .join(" · ")
                        : "Open internet"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
