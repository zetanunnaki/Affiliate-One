import type { Metadata } from "next";
import Link from "next/link";
import { getAllProviders, getAllCountries, getAllRegions } from "@/lib/data";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Byline from "@/components/ui/Byline";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import ServerMap from "@/components/ui/ServerMap";
import { BUILD_MONTH_YEAR } from "@/lib/dates";

export const metadata: Metadata = {
  title: "VPN Server Locations Worldwide (2026) — Coverage Map",
  description: "Compare VPN server locations worldwide. See which providers have servers in your country and region.",
};

export default function VpnServersPage() {
  const providers = getAllProviders();
  const countries = getAllCountries();
  const regions = getAllRegions();

  const serverCounts: Record<string, number> = {
    nordvpn: 6400,
    surfshark: 3200,
    protonvpn: 4600,
    fastestvpn: 600,
  };

  const countryCounts: Record<string, number> = {
    nordvpn: 111,
    surfshark: 100,
    protonvpn: 91,
    fastestvpn: 52,
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "VPN", href: "/vpn" }, { label: "Server Locations" }]} />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          VPN Server Locations Worldwide
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
          Server location matters for speed, privacy, and content access. Here&apos;s
          a breakdown of where each provider has servers and how many.
        </p>
        <Byline authorId="marcus-johnson" updatedAt="2026-02-28" />
      </header>
      {/* Interactive server map */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          Interactive Server Map
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          Hover or tap a region to see how many servers each provider operates there.
        </p>
        <ServerMap />
      </section>

      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Expert-tested" />

      {/* Server count comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Server Network Size
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Provider</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Total Servers</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Countries</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">RAM-Only</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-sm">
              {providers.map((p) => (
                <tr key={p.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                  <td className="px-4 py-3">
                    <Link href={`/vpn/providers/${p.id}`} className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600">{p.name}</Link>
                  </td>
                  <td className="px-4 py-3 text-center font-medium text-zinc-900 dark:text-zinc-100">
                    {(serverCounts[p.id] || 0).toLocaleString()}+
                  </td>
                  <td className="px-4 py-3 text-center text-zinc-700 dark:text-zinc-300">
                    {countryCounts[p.id] || 0}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-green-600 dark:text-green-400 font-semibold">Yes</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="font-semibold text-green-700 dark:text-green-400">{p.rating}/5</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-zinc-500 mt-2">Server counts are approximate and change frequently. Last verified {BUILD_MONTH_YEAR}.</p>
      </section>

      {/* Why location matters */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Why Server Location Matters
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-2">Speed</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Closer servers = lower latency = faster speeds. Always connect to
              the nearest server unless you need a specific location.
            </p>
          </div>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-2">Privacy</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Server jurisdiction affects data requests. Servers in privacy-friendly
              countries (Switzerland, Iceland, Panama) offer stronger protection.
            </p>
          </div>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-2">Content Access</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Connect to a server in a specific country to access that country&apos;s
              streaming libraries and services.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage by region */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Coverage by Region
        </h2>
        {regions.map((region) => {
          const regionCountries = countries.filter((c) => c.region === region);
          return (
            <div key={region} className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {region} <span className="text-sm font-normal text-zinc-500">({regionCountries.length} countries)</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {regionCountries.map((c) => (
                  <Link
                    key={c.iso2}
                    href={`/vpn/best/${c.slug}`}
                    className="px-3 py-1.5 text-xs border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-blue-300 transition-colors text-zinc-700 dark:text-zinc-300"
                  >
                    {c.nameEn}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
}
