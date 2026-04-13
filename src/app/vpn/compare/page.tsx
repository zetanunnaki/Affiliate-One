"use client";

import { useState } from "react";
import Link from "next/link";
import providersData from "@/data/providers.json";
import type { Provider } from "@/types";

const providers = providersData as Provider[];

export default function ComparePage() {
  const [selected, setSelected] = useState<[string | null, string | null]>([null, null]);

  const [a, b] = selected;
  const provA = a ? providers.find((p) => p.id === a) : null;
  const provB = b ? providers.find((p) => p.id === b) : null;

  const existingComparisons = [
    { slug: "nordvpn-vs-protonvpn", ids: ["nordvpn", "protonvpn"] },
    { slug: "nordvpn-vs-fastestvpn", ids: ["nordvpn", "fastestvpn"] },
    { slug: "protonvpn-vs-fastestvpn", ids: ["protonvpn", "fastestvpn"] },
  ];

  function findComparisonSlug(): string | null {
    if (!a || !b) return null;
    const match = existingComparisons.find(
      (c) => (c.ids.includes(a) && c.ids.includes(b))
    );
    return match?.slug ?? null;
  }

  const compSlug = findComparisonSlug();

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
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Interactive · 1 min
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            Compare VPN Providers
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Select two providers to see a side-by-side comparison.
          </p>
        </div>
      </section>

    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Selector */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {([0, 1] as const).map((idx) => (
          <div key={idx}>
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2 block">
              Provider {idx + 1}
            </label>
            <select
              value={selected[idx] ?? ""}
              onChange={(e) => {
                const next = [...selected] as [string | null, string | null];
                next[idx] = e.target.value || null;
                setSelected(next);
              }}
              className="w-full px-3 py-2.5 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select a VPN...</option>
              {providers
                .filter((p) => p.id !== selected[idx === 0 ? 1 : 0])
                .map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
            </select>
          </div>
        ))}
      </div>

      {/* Results */}
      {provA && provB && (
        <div>
          {/* Quick comparison */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
              <thead className="bg-zinc-50 dark:bg-zinc-800">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Feature</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">{provA.name}</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">{provB.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-sm">
                {[
                  { label: "Rating", a: `${provA.rating}/5`, b: `${provB.rating}/5` },
                  { label: "Price", a: provA.priceRange, b: provB.priceRange },
                  { label: "Devices", a: provA.features.devices === 0 ? "Unlimited" : String(provA.features.devices), b: provB.features.devices === 0 ? "Unlimited" : String(provB.features.devices) },
                  { label: "Kill Switch", a: provA.features.killSwitch ? "Yes" : "No", b: provB.features.killSwitch ? "Yes" : "No" },
                  { label: "No-Logs", a: provA.features.noLogsClaim ? "Verified" : "No", b: provB.features.noLogsClaim ? "Verified" : "No" },
                  { label: "Split Tunneling", a: provA.features.splitTunneling ? "Yes" : "No", b: provB.features.splitTunneling ? "Yes" : "No" },
                  { label: "Protocols", a: provA.features.protocols.join(", "), b: provB.features.protocols.join(", ") },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">{row.label}</td>
                    <td className="px-4 py-3 text-center text-zinc-700 dark:text-zinc-300">{row.a}</td>
                    <td className="px-4 py-3 text-center text-zinc-700 dark:text-zinc-300">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {compSlug ? (
            <Link
              href={`/vpn/vs/${compSlug}`}
              className="block w-full text-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Read Full {provA.name} vs {provB.name} Comparison &rarr;
            </Link>
          ) : (
            <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Detailed comparison page coming soon. Check our{" "}
                <Link href="/vpn/vs" className="text-blue-600 hover:underline">existing comparisons</Link>.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Existing comparisons */}
      {(!provA || !provB) && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Available Comparisons</h2>
          <div className="space-y-2">
            {existingComparisons.map((comp) => {
              const names = comp.ids.map((id) => providers.find((p) => p.id === id)?.name).filter(Boolean);
              return (
                <Link key={comp.slug} href={`/vpn/vs/${comp.slug}`} className="block p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600">
                  {names.join(" vs ")} &rarr;
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
