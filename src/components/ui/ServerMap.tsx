"use client";

import { useState } from "react";

interface ProviderCoverage {
  id: string;
  name: string;
  color: string;
  servers: number;
  countries: number;
}

interface RegionData {
  id: string;
  label: string;
  countries: number;
  providers: { id: string; servers: string; hasPresence: boolean }[];
  path: string;
  labelX: number;
  labelY: number;
}

const PROVIDERS: ProviderCoverage[] = [
  { id: "nordvpn", name: "NordVPN", color: "#4687ff", servers: 6400, countries: 111 },
  { id: "surfshark", name: "Surfshark", color: "#1EBFBF", servers: 3200, countries: 100 },
  { id: "protonvpn", name: "Proton VPN", color: "#6d4aff", servers: 4600, countries: 91 },
  { id: "fastestvpn", name: "FastestVPN", color: "#ff7a1f", servers: 600, countries: 52 },
];

const REGIONS: RegionData[] = [
  {
    id: "north-america",
    label: "North America",
    countries: 23,
    providers: [
      { id: "nordvpn", servers: "1,800+", hasPresence: true },
      { id: "surfshark", servers: "600+", hasPresence: true },
      { id: "protonvpn", servers: "900+", hasPresence: true },
      { id: "fastestvpn", servers: "150+", hasPresence: true },
    ],
    path: "M50,60 L55,45 L60,35 L80,30 L100,28 L130,30 L155,25 L170,30 L185,50 L180,70 L170,85 L155,95 L140,105 L120,115 L105,120 L90,115 L75,105 L60,95 L50,80Z",
    labelX: 115,
    labelY: 65,
  },
  {
    id: "south-america",
    label: "South America",
    countries: 14,
    providers: [
      { id: "nordvpn", servers: "300+", hasPresence: true },
      { id: "surfshark", servers: "200+", hasPresence: true },
      { id: "protonvpn", servers: "150+", hasPresence: true },
      { id: "fastestvpn", servers: "30+", hasPresence: true },
    ],
    path: "M120,120 L140,115 L155,125 L165,145 L170,170 L165,200 L155,225 L140,240 L125,245 L115,235 L110,215 L105,195 L100,170 L105,145Z",
    labelX: 135,
    labelY: 175,
  },
  {
    id: "europe",
    label: "Europe",
    countries: 45,
    providers: [
      { id: "nordvpn", servers: "2,500+", hasPresence: true },
      { id: "surfshark", servers: "1,500+", hasPresence: true },
      { id: "protonvpn", servers: "2,200+", hasPresence: true },
      { id: "fastestvpn", servers: "200+", hasPresence: true },
    ],
    path: "M250,25 L270,20 L295,22 L320,25 L340,30 L350,40 L345,55 L335,65 L315,70 L295,72 L275,70 L260,65 L250,55 L245,40Z",
    labelX: 295,
    labelY: 45,
  },
  {
    id: "africa",
    label: "Africa",
    countries: 54,
    providers: [
      { id: "nordvpn", servers: "200+", hasPresence: true },
      { id: "surfshark", servers: "50+", hasPresence: true },
      { id: "protonvpn", servers: "100+", hasPresence: true },
      { id: "fastestvpn", servers: "20+", hasPresence: true },
    ],
    path: "M260,75 L280,72 L310,75 L330,85 L340,105 L335,130 L325,160 L310,185 L290,200 L275,195 L265,175 L255,150 L250,125 L248,100Z",
    labelX: 290,
    labelY: 135,
  },
  {
    id: "middle-east",
    label: "Middle East",
    countries: 16,
    providers: [
      { id: "nordvpn", servers: "200+", hasPresence: true },
      { id: "surfshark", servers: "100+", hasPresence: true },
      { id: "protonvpn", servers: "150+", hasPresence: true },
      { id: "fastestvpn", servers: "40+", hasPresence: true },
    ],
    path: "M340,55 L360,50 L385,55 L395,65 L390,80 L375,90 L355,92 L340,85 L335,70Z",
    labelX: 365,
    labelY: 72,
  },
  {
    id: "asia-pacific",
    label: "Asia-Pacific",
    countries: 35,
    providers: [
      { id: "nordvpn", servers: "1,200+", hasPresence: true },
      { id: "surfshark", servers: "700+", hasPresence: true },
      { id: "protonvpn", servers: "1,000+", hasPresence: true },
      { id: "fastestvpn", servers: "140+", hasPresence: true },
    ],
    path: "M380,25 L420,22 L460,25 L500,30 L520,45 L525,70 L515,95 L495,110 L470,115 L445,110 L420,100 L400,85 L390,65 L385,45Z",
    labelX: 455,
    labelY: 60,
  },
  {
    id: "oceania",
    label: "Oceania",
    countries: 15,
    providers: [
      { id: "nordvpn", servers: "200+", hasPresence: true },
      { id: "surfshark", servers: "50+", hasPresence: true },
      { id: "protonvpn", servers: "100+", hasPresence: true },
      { id: "fastestvpn", servers: "20+", hasPresence: true },
    ],
    path: "M470,140 L505,130 L535,135 L545,155 L535,175 L515,185 L490,180 L475,165 L468,150Z",
    labelX: 505,
    labelY: 158,
  },
];

export default function ServerMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const active = REGIONS.find((r) => r.id === activeRegion);

  return (
    <div className="my-10">
      <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 overflow-hidden">
        {/* Map */}
        <svg
          viewBox="0 0 580 270"
          className="w-full h-auto"
          aria-label="Interactive VPN server map"
        >
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-slate-300 dark:text-slate-700" />
            </pattern>
          </defs>
          <rect width="580" height="270" fill="url(#grid)" />

          {/* Regions */}
          {REGIONS.map((region) => {
            const isActive = activeRegion === region.id;
            return (
              <g key={region.id}>
                <path
                  d={region.path}
                  className={`cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "fill-blue-500/30 stroke-blue-500 dark:fill-blue-400/30 dark:stroke-blue-400"
                      : "fill-slate-300/50 dark:fill-slate-700/50 stroke-slate-400 dark:stroke-slate-600 hover:fill-blue-200/50 dark:hover:fill-blue-900/50"
                  }`}
                  strokeWidth={isActive ? 2 : 1}
                  onMouseEnter={() => setActiveRegion(region.id)}
                  onClick={() => setActiveRegion(activeRegion === region.id ? null : region.id)}
                />
                {/* Region dots representing server density */}
                <circle
                  cx={region.labelX}
                  cy={region.labelY}
                  r={isActive ? 6 : 4}
                  className={`pointer-events-none transition-all duration-200 ${
                    isActive ? "fill-blue-500 dark:fill-blue-400" : "fill-slate-500 dark:fill-slate-400"
                  }`}
                />
                <text
                  x={region.labelX}
                  y={region.labelY - 10}
                  textAnchor="middle"
                  className={`pointer-events-none text-[8px] font-bold fill-current transition-all duration-200 ${
                    isActive ? "text-blue-700 dark:text-blue-300" : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {region.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Info panel */}
        <div className="border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-4 sm:p-5">
          {active ? (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {active.label}
                </h3>
                <span className="text-xs font-semibold text-slate-500 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full">
                  {active.countries} countries
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {active.providers.map((prov) => {
                  const provider = PROVIDERS.find((p) => p.id === prov.id);
                  if (!provider) return null;
                  return (
                    <div
                      key={prov.id}
                      className="rounded-xl p-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: provider.color }}
                        />
                        <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {provider.name}
                        </span>
                      </div>
                      <div className="text-xl font-black text-slate-900 dark:text-white">
                        {prov.servers}
                      </div>
                      <div className="text-[10px] text-slate-500">servers</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-2">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Hover or tap a region</span> to see server coverage by provider
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Provider legend */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {PROVIDERS.map((p) => (
          <div key={p.id} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full ring-2 ring-white dark:ring-slate-900"
              style={{ backgroundColor: p.color }}
            />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {p.name}
            </span>
            <span className="text-[10px] text-slate-400">
              {p.servers.toLocaleString()}+ servers · {p.countries} countries
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
