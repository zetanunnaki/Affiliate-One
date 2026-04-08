"use client";

import { useState } from "react";
import Link from "next/link";

export default function VpnCalculatorPage() {
  const [devices, setDevices] = useState(3);
  const [months, setMonths] = useState(24);
  const [features, setFeatures] = useState({ streaming: false, gaming: false, privacy: false, china: false, dedicatedIp: false });

  const providers = [
    { name: "NordVPN", m1: 12.99, m12: 4.59, m24: 3.39, maxDevices: 10, dedicatedIp: 3.69, streaming: 10, gaming: 9, privacy: 8, china: 7 },
    { name: "Surfshark", m1: 15.45, m12: 2.99, m24: 2.29, maxDevices: Infinity, dedicatedIp: 3.75, streaming: 8, gaming: 7, privacy: 7, china: 5.5 },
    { name: "ExpressVPN", m1: 12.95, m12: 6.67, m24: 6.67, maxDevices: 8, dedicatedIp: 0, streaming: 9, gaming: 8, privacy: 7, china: 7.5 },
    { name: "Proton VPN", m1: 9.99, m12: 4.99, m24: 4.99, maxDevices: 10, dedicatedIp: 0, streaming: 5, gaming: 6, privacy: 9, china: 5 },
    { name: "Mullvad", m1: 5, m12: 5, m24: 5, maxDevices: 5, dedicatedIp: 0, streaming: 2, gaming: 5, privacy: 10, china: 4 },
  ];

  const priceKey = months >= 24 ? "m24" : months >= 12 ? "m12" : "m1";

  const scored = providers.map((p) => {
    const basePrice = p[priceKey as keyof typeof p] as number;
    const subCount = p.maxDevices === Infinity ? 1 : Math.ceil(devices / p.maxDevices);
    const monthlyCost = basePrice * subCount + (features.dedicatedIp && p.dedicatedIp > 0 ? p.dedicatedIp : 0);
    const totalCost = monthlyCost * months;

    let score = 50;
    if (features.streaming) score += p.streaming * 3;
    if (features.gaming) score += p.gaming * 3;
    if (features.privacy) score += p.privacy * 3;
    if (features.china) score += p.china * 4;
    if (!features.streaming && !features.gaming && !features.privacy && !features.china) {
      score += (p.streaming + p.gaming + p.privacy) * 1.5;
    }
    score -= monthlyCost * 2;

    return { ...p, monthlyCost: monthlyCost.toFixed(2), totalCost: totalCost.toFixed(2), score: Math.round(score), subCount };
  }).sort((a, b) => b.score - a.score);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">VPN Cost Calculator</h1>
        <p className="text-zinc-600 dark:text-zinc-400">Compare real costs based on your devices, plan length, and needs. Get a personalized recommendation.</p>
      </header>

      {/* Inputs */}
      <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl mb-8">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 block mb-2">Devices to protect: {devices}</label>
            <input type="range" min="1" max="20" value={devices} onChange={(e) => setDevices(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 block mb-2">Plan length: {months} months</label>
            <select value={months} onChange={(e) => setMonths(Number(e.target.value))} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100">
              <option value="1">1 month</option>
              <option value="12">12 months</option>
              <option value="24">24 months</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">What matters most?</p>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "streaming", label: "Streaming" },
              { key: "gaming", label: "Gaming" },
              { key: "privacy", label: "Privacy" },
              { key: "china", label: "Works in China" },
              { key: "dedicatedIp", label: "Dedicated IP" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFeatures((prev) => ({ ...prev, [f.key]: !prev[f.key as keyof typeof prev] }))}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${features[f.key as keyof typeof features] ? "bg-blue-600 text-white" : "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3">
        {scored.map((p, i) => (
          <div key={p.name} className={`p-5 border rounded-xl ${i === 0 ? "border-green-300 dark:border-green-700 bg-green-50/30 dark:bg-green-900/10" : "border-zinc-200 dark:border-zinc-700"}`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                {i === 0 && <span className="px-2 py-0.5 text-xs font-bold text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30 rounded">Best Match</span>}
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{p.name}</h3>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-zinc-900 dark:text-zinc-100">${p.monthlyCost}/mo</div>
                <div className="text-xs text-zinc-500">${p.totalCost} total ({months}mo)</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <span>Devices: {p.maxDevices === Infinity ? "Unlimited" : p.maxDevices}</span>
              {p.subCount > 1 && <span className="text-orange-600">Need {p.subCount} subscriptions</span>}
              <span>Score: {p.score}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-zinc-500 mt-4 text-center">
        Prices based on published rates as of April 2026. Actual pricing may vary.{" "}
        <Link href="/deals" className="text-blue-600 hover:underline">Current deals</Link>
      </p>
    </div>
  );
}
