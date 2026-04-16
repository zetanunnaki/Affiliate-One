import Link from "next/link";
import type { Metadata } from "next";
import comparisons from "@/data/comparisons.json";
import { getProviderById } from "@/lib/data";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "VPN Comparisons — Head-to-Head Reviews",
  description:
    "Side-by-side VPN comparisons. NordVPN vs Proton VPN, NordVPN vs FastestVPN, and more. Features, speed, and price compared.",
};

export default function VsIndexPage() {
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
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full text-[13px] text-blue-200 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            {comparisons.length} matchups
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            VPN Comparisons
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Can&apos;t decide between two VPNs? Our head-to-head comparisons break
            down the differences in speed, security, features, and price.
          </p>
        </div>
      </section>

      {/* ═══ COMPARISON CARDS ═══ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {comparisons.map((comp) => {
            const providers = comp.providers.map((id) => getProviderById(id));
            const [left, right] = providers;
            if (!left || !right) return null;
            return (
              <Link
                key={comp.slug}
                href={`/vpn/vs/${comp.slug}`}
                className="group relative overflow-hidden p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-black/30 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Provider logo faceoff */}
                <div className="flex items-center justify-center gap-4 mb-5">
                  <div className="flex flex-col items-center gap-2 flex-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/providers/${left.id}.svg`}
                      alt={`${left.name} logo`}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-xl object-contain bg-white p-2 ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm"
                    />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{left.name}</span>
                    <span className="text-[10px] font-semibold text-slate-500">{left.rating}/5</span>
                  </div>

                  <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-[11px] font-black text-slate-500 dark:text-slate-400 ring-2 ring-white dark:ring-slate-900">
                    VS
                  </div>

                  <div className="flex flex-col items-center gap-2 flex-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/providers/${right.id}.svg`}
                      alt={`${right.name} logo`}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-xl object-contain bg-white p-2 ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm"
                    />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{right.name}</span>
                    <span className="text-[10px] font-semibold text-slate-500">{right.rating}/5</span>
                  </div>
                </div>

                <h2 className="text-center font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 text-sm">
                  {comp.title}
                </h2>

                <div className="flex items-center justify-center text-xs font-semibold text-blue-600 dark:text-blue-400 pt-4 border-t border-slate-100 dark:border-slate-800 group-hover:translate-x-0.5 transition-transform">
                  See full comparison
                  <svg className="ml-1 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
