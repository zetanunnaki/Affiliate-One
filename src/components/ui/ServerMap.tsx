"use client";

import { useState } from "react";
import Link from "next/link";

interface ProviderInfo {
  id: string;
  name: string;
  color: string;
  servers: number;
  countries: number;
}

interface CountryServer {
  name: string;
  slug: string;
  nord: boolean;
  surf: boolean;
  proton: boolean;
  fastest: boolean;
}

interface RegionData {
  id: string;
  label: string;
  providers: { id: string; servers: string }[];
  path: string;
  labelX: number;
  labelY: number;
  countries: CountryServer[];
}

const PROVIDERS: ProviderInfo[] = [
  { id: "nordvpn", name: "NordVPN", color: "#4687ff", servers: 6400, countries: 111 },
  { id: "surfshark", name: "Surfshark", color: "#1EBFBF", servers: 3200, countries: 100 },
  { id: "protonvpn", name: "Proton VPN", color: "#6d4aff", servers: 4600, countries: 91 },
  { id: "fastestvpn", name: "FastestVPN", color: "#ff7a1f", servers: 600, countries: 52 },
];

const REGIONS: RegionData[] = [
  {
    id: "north-america",
    label: "North America",
    providers: [
      { id: "nordvpn", servers: "1,800+" },
      { id: "surfshark", servers: "600+" },
      { id: "protonvpn", servers: "900+" },
      { id: "fastestvpn", servers: "150+" },
    ],
    path: "M50,60 L55,45 L60,35 L80,30 L100,28 L130,30 L155,25 L170,30 L185,50 L180,70 L170,85 L155,95 L140,105 L120,115 L105,120 L90,115 L75,105 L60,95 L50,80Z",
    labelX: 115, labelY: 65,
    countries: [
      { name: "United States", slug: "united-states", nord: true, surf: true, proton: true, fastest: true },
      { name: "Canada", slug: "canada", nord: true, surf: true, proton: true, fastest: true },
      { name: "Mexico", slug: "mexico", nord: true, surf: true, proton: true, fastest: true },
      { name: "Costa Rica", slug: "costa-rica", nord: true, surf: true, proton: true, fastest: false },
      { name: "Panama", slug: "panama", nord: true, surf: true, proton: false, fastest: false },
      { name: "Guatemala", slug: "guatemala", nord: true, surf: false, proton: false, fastest: false },
      { name: "Dominican Republic", slug: "dominican-republic", nord: true, surf: true, proton: false, fastest: false },
      { name: "Jamaica", slug: "jamaica", nord: true, surf: false, proton: false, fastest: false },
      { name: "Puerto Rico", slug: "puerto-rico", nord: true, surf: true, proton: false, fastest: false },
      { name: "Trinidad & Tobago", slug: "trinidad-and-tobago", nord: true, surf: false, proton: false, fastest: false },
    ],
  },
  {
    id: "south-america",
    label: "South America",
    providers: [
      { id: "nordvpn", servers: "300+" },
      { id: "surfshark", servers: "200+" },
      { id: "protonvpn", servers: "150+" },
      { id: "fastestvpn", servers: "30+" },
    ],
    path: "M120,120 L140,115 L155,125 L165,145 L170,170 L165,200 L155,225 L140,240 L125,245 L115,235 L110,215 L105,195 L100,170 L105,145Z",
    labelX: 135, labelY: 175,
    countries: [
      { name: "Brazil", slug: "brazil", nord: true, surf: true, proton: true, fastest: true },
      { name: "Argentina", slug: "argentina", nord: true, surf: true, proton: true, fastest: true },
      { name: "Colombia", slug: "colombia", nord: true, surf: true, proton: true, fastest: false },
      { name: "Chile", slug: "chile", nord: true, surf: true, proton: true, fastest: false },
      { name: "Peru", slug: "peru", nord: true, surf: true, proton: false, fastest: false },
      { name: "Ecuador", slug: "ecuador", nord: true, surf: true, proton: false, fastest: false },
      { name: "Venezuela", slug: "venezuela", nord: true, surf: true, proton: false, fastest: false },
      { name: "Uruguay", slug: "uruguay", nord: true, surf: true, proton: false, fastest: false },
      { name: "Paraguay", slug: "paraguay", nord: true, surf: false, proton: false, fastest: false },
      { name: "Bolivia", slug: "bolivia", nord: true, surf: false, proton: false, fastest: false },
    ],
  },
  {
    id: "europe",
    label: "Europe",
    providers: [
      { id: "nordvpn", servers: "2,500+" },
      { id: "surfshark", servers: "1,500+" },
      { id: "protonvpn", servers: "2,200+" },
      { id: "fastestvpn", servers: "200+" },
    ],
    path: "M250,25 L270,20 L295,22 L320,25 L340,30 L350,40 L345,55 L335,65 L315,70 L295,72 L275,70 L260,65 L250,55 L245,40Z",
    labelX: 295, labelY: 45,
    countries: [
      { name: "United Kingdom", slug: "united-kingdom", nord: true, surf: true, proton: true, fastest: true },
      { name: "Germany", slug: "germany", nord: true, surf: true, proton: true, fastest: true },
      { name: "France", slug: "france", nord: true, surf: true, proton: true, fastest: true },
      { name: "Netherlands", slug: "netherlands", nord: true, surf: true, proton: true, fastest: true },
      { name: "Switzerland", slug: "switzerland", nord: true, surf: true, proton: true, fastest: true },
      { name: "Sweden", slug: "sweden", nord: true, surf: true, proton: true, fastest: true },
      { name: "Spain", slug: "spain", nord: true, surf: true, proton: true, fastest: true },
      { name: "Italy", slug: "italy", nord: true, surf: true, proton: true, fastest: true },
      { name: "Poland", slug: "poland", nord: true, surf: true, proton: true, fastest: true },
      { name: "Denmark", slug: "denmark", nord: true, surf: true, proton: true, fastest: false },
      { name: "Norway", slug: "", nord: true, surf: true, proton: true, fastest: false },
      { name: "Finland", slug: "finland", nord: true, surf: true, proton: true, fastest: false },
      { name: "Austria", slug: "austria", nord: true, surf: true, proton: true, fastest: false },
      { name: "Belgium", slug: "belgium", nord: true, surf: true, proton: true, fastest: false },
      { name: "Ireland", slug: "ireland", nord: true, surf: true, proton: true, fastest: false },
      { name: "Czech Republic", slug: "czech-republic", nord: true, surf: true, proton: true, fastest: false },
      { name: "Romania", slug: "", nord: true, surf: true, proton: true, fastest: false },
      { name: "Portugal", slug: "portugal", nord: true, surf: true, proton: true, fastest: false },
      { name: "Hungary", slug: "hungary", nord: true, surf: true, proton: true, fastest: false },
      { name: "Greece", slug: "greece", nord: true, surf: true, proton: true, fastest: false },
      { name: "Ukraine", slug: "ukraine", nord: true, surf: true, proton: true, fastest: false },
      { name: "Serbia", slug: "serbia", nord: true, surf: true, proton: true, fastest: false },
      { name: "Croatia", slug: "croatia", nord: true, surf: true, proton: false, fastest: false },
      { name: "Iceland", slug: "iceland", nord: true, surf: true, proton: true, fastest: false },
      { name: "Luxembourg", slug: "luxembourg", nord: true, surf: true, proton: true, fastest: false },
    ],
  },
  {
    id: "africa",
    label: "Africa",
    providers: [
      { id: "nordvpn", servers: "200+" },
      { id: "surfshark", servers: "50+" },
      { id: "protonvpn", servers: "100+" },
      { id: "fastestvpn", servers: "20+" },
    ],
    path: "M260,75 L280,72 L310,75 L330,85 L340,105 L335,130 L325,160 L310,185 L290,200 L275,195 L265,175 L255,150 L250,125 L248,100Z",
    labelX: 290, labelY: 135,
    countries: [
      { name: "South Africa", slug: "south-africa", nord: true, surf: true, proton: true, fastest: true },
      { name: "Nigeria", slug: "nigeria", nord: true, surf: true, proton: true, fastest: false },
      { name: "Egypt", slug: "egypt", nord: true, surf: true, proton: true, fastest: false },
      { name: "Kenya", slug: "kenya", nord: true, surf: true, proton: true, fastest: false },
      { name: "Morocco", slug: "morocco", nord: true, surf: true, proton: false, fastest: false },
      { name: "Ethiopia", slug: "ethiopia", nord: true, surf: false, proton: false, fastest: false },
      { name: "Ghana", slug: "", nord: true, surf: true, proton: false, fastest: false },
      { name: "Senegal", slug: "senegal", nord: true, surf: false, proton: false, fastest: false },
      { name: "Tanzania", slug: "tanzania", nord: true, surf: false, proton: false, fastest: false },
      { name: "Algeria", slug: "", nord: true, surf: true, proton: false, fastest: false },
    ],
  },
  {
    id: "middle-east",
    label: "Middle East",
    providers: [
      { id: "nordvpn", servers: "200+" },
      { id: "surfshark", servers: "100+" },
      { id: "protonvpn", servers: "150+" },
      { id: "fastestvpn", servers: "40+" },
    ],
    path: "M340,55 L360,50 L385,55 L395,65 L390,80 L375,90 L355,92 L340,85 L335,70Z",
    labelX: 365, labelY: 72,
    countries: [
      { name: "UAE", slug: "united-arab-emirates", nord: true, surf: true, proton: true, fastest: true },
      { name: "Turkey", slug: "turkey", nord: true, surf: true, proton: true, fastest: true },
      { name: "Saudi Arabia", slug: "saudi-arabia", nord: true, surf: true, proton: false, fastest: false },
      { name: "Qatar", slug: "qatar", nord: true, surf: true, proton: false, fastest: false },
      { name: "Bahrain", slug: "bahrain", nord: true, surf: true, proton: false, fastest: false },
      { name: "Oman", slug: "oman", nord: true, surf: true, proton: false, fastest: false },
      { name: "Kuwait", slug: "kuwait", nord: true, surf: true, proton: false, fastest: false },
      { name: "Jordan", slug: "jordan", nord: true, surf: true, proton: false, fastest: false },
    ],
  },
  {
    id: "asia-pacific",
    label: "Asia-Pacific",
    providers: [
      { id: "nordvpn", servers: "1,200+" },
      { id: "surfshark", servers: "700+" },
      { id: "protonvpn", servers: "1,000+" },
      { id: "fastestvpn", servers: "140+" },
    ],
    path: "M380,25 L420,22 L460,25 L500,30 L520,45 L525,70 L515,95 L495,110 L470,115 L445,110 L420,100 L400,85 L390,65 L385,45Z",
    labelX: 455, labelY: 60,
    countries: [
      { name: "Japan", slug: "japan", nord: true, surf: true, proton: true, fastest: true },
      { name: "South Korea", slug: "south-korea", nord: true, surf: true, proton: true, fastest: true },
      { name: "Singapore", slug: "singapore", nord: true, surf: true, proton: true, fastest: true },
      { name: "India", slug: "india", nord: true, surf: true, proton: true, fastest: true },
      { name: "Hong Kong", slug: "hong-kong", nord: true, surf: true, proton: true, fastest: true },
      { name: "Taiwan", slug: "taiwan", nord: true, surf: true, proton: true, fastest: true },
      { name: "Thailand", slug: "thailand", nord: true, surf: true, proton: true, fastest: true },
      { name: "Vietnam", slug: "vietnam", nord: true, surf: true, proton: true, fastest: false },
      { name: "Indonesia", slug: "indonesia", nord: true, surf: true, proton: true, fastest: false },
      { name: "Malaysia", slug: "malaysia", nord: true, surf: true, proton: true, fastest: false },
      { name: "Philippines", slug: "philippines", nord: true, surf: true, proton: true, fastest: false },
      { name: "China", slug: "china", nord: true, surf: false, proton: false, fastest: false },
      { name: "Pakistan", slug: "pakistan", nord: true, surf: true, proton: false, fastest: false },
      { name: "Bangladesh", slug: "bangladesh", nord: true, surf: true, proton: false, fastest: false },
      { name: "Sri Lanka", slug: "sri-lanka", nord: true, surf: true, proton: false, fastest: false },
      { name: "Cambodia", slug: "cambodia", nord: true, surf: true, proton: false, fastest: false },
    ],
  },
  {
    id: "oceania",
    label: "Oceania",
    providers: [
      { id: "nordvpn", servers: "200+" },
      { id: "surfshark", servers: "50+" },
      { id: "protonvpn", servers: "100+" },
      { id: "fastestvpn", servers: "20+" },
    ],
    path: "M470,140 L505,130 L535,135 L545,155 L535,175 L515,185 L490,180 L475,165 L468,150Z",
    labelX: 505, labelY: 158,
    countries: [
      { name: "Australia", slug: "australia", nord: true, surf: true, proton: true, fastest: true },
      { name: "New Zealand", slug: "new-zealand", nord: true, surf: true, proton: true, fastest: true },
      { name: "Fiji", slug: "fiji", nord: true, surf: false, proton: false, fastest: false },
    ],
  },
];

const CHECK = (
  <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);
const CROSS = (
  <svg className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

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
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-slate-300 dark:text-slate-700" />
            </pattern>
          </defs>
          <rect width="580" height="270" fill="url(#grid)" />

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
              {/* Region header with server counts */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {active.label}
                </h3>
                <button
                  onClick={() => setActiveRegion(null)}
                  className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  View all regions
                </button>
              </div>

              {/* Provider summary cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {active.providers.map((prov) => {
                  const provider = PROVIDERS.find((p) => p.id === prov.id);
                  if (!provider) return null;
                  return (
                    <div
                      key={prov.id}
                      className="rounded-lg p-2.5 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: provider.color }}
                        />
                        <span className="text-[11px] font-bold text-slate-900 dark:text-white truncate">
                          {provider.name}
                        </span>
                      </div>
                      <div className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                        {prov.servers}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Country-level table */}
              <div className="overflow-x-auto -mx-4 sm:-mx-5 px-4 sm:px-5">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="text-left py-2 pr-4 font-semibold text-slate-500 dark:text-slate-400">Country</th>
                      {PROVIDERS.map((p) => (
                        <th key={p.id} className="text-center py-2 px-2 font-semibold" style={{ color: p.color }}>
                          {p.name.split(" ")[0]}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {active.countries.map((c) => (
                      <tr key={c.name} className="border-b border-slate-100 dark:border-slate-800 last:border-0">
                        <td className="py-1.5 pr-4 font-medium text-slate-800 dark:text-slate-200">
                          {c.slug ? (
                            <Link href={`/vpn/best/${c.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                              {c.name}
                            </Link>
                          ) : (
                            c.name
                          )}
                        </td>
                        <td className="text-center py-1.5 px-2">{c.nord ? CHECK : CROSS}</td>
                        <td className="text-center py-1.5 px-2">{c.surf ? CHECK : CROSS}</td>
                        <td className="text-center py-1.5 px-2">{c.proton ? CHECK : CROSS}</td>
                        <td className="text-center py-1.5 px-2">{c.fastest ? CHECK : CROSS}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-2">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Hover or tap a region</span> to see server coverage by provider and country
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
