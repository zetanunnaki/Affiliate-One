import Link from "next/link";
import type { Metadata } from "next";
import { getAllProviders } from "@/lib/data";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "VPN Provider Reviews — Expert-Tested Comparisons",
  description:
    "In-depth, independent VPN provider reviews. We test speed, security, privacy, and reliability so you can make an informed choice.",
};

export default function ProvidersPage() {
  const providers = getAllProviders();

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
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {providers.length} providers reviewed
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-[1.05]">
            VPN Provider Reviews
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Independent, expert-tested reviews of the top VPN services. We evaluate
            speed, security, privacy, and value for remote workers and travelers.
          </p>
        </div>
      </section>

      {/* ═══ PROVIDER GRID ═══ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {providers.map((provider, idx) => (
            <Link
              key={provider.id}
              href={`/vpn/providers/${provider.id}`}
              className="group relative p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-2xl hover:shadow-slate-200/40 dark:hover:shadow-black/30 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-1 transition-all duration-300"
            >
              {idx === 0 && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 px-3 py-1 text-[11px] font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-md">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Editor&apos;s Choice
                </span>
              )}

              <div className="flex items-start gap-4 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/providers/${provider.id}.svg`}
                  alt={`${provider.name} logo`}
                  width={56}
                  height={56}
                  className="w-14 h-14 shrink-0 rounded-xl object-contain bg-white p-2 ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    {provider.name}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(provider.rating) ? "text-yellow-400" : "text-slate-200 dark:text-slate-700"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                      {provider.rating}/5
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 line-clamp-2">
                {provider.notes}
              </p>

              {/* Positioning tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {provider.positioningTags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Feature row */}
              <div className="grid grid-cols-3 gap-2 mb-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Devices</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {provider.features.devices === 0 ? "Unlimited" : provider.features.devices}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Protocols</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {provider.features.protocols.length}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">No-logs</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {provider.features.noLogsClaim ? (
                      <span className="text-emerald-600 dark:text-emerald-400">✓ Yes</span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-base font-bold text-slate-900 dark:text-white">
                  {provider.priceRange}
                </span>
                <span className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  Read full review
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
