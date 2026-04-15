import Link from "next/link";
import { getFeaturedProviders, getProviderAffiliateUrl } from "@/lib/data";

interface TopVpnPicksProps {
  countrySlug?: string;
  heading?: string;
  eyebrow?: string;
  compact?: boolean;
}

const RANK_WORDS = ["Best Overall", "Runner-Up", "Best Value"];

export default function TopVpnPicks({
  countrySlug,
  heading = "Our Top 3 VPN Picks",
  eyebrow = "Expert-tested",
  compact = false,
}: TopVpnPicksProps) {
  const providers = getFeaturedProviders();
  if (providers.length === 0) return null;

  return (
    <section className={compact ? "my-8" : "my-14"}>
      {/* ═══ Editorial section header ═══ */}
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
            {eyebrow}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.05]">
          {heading}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
          Chosen after real-world testing across speed, privacy, and streaming. Each ranking is independent — we buy every VPN at retail and test it ourselves.
        </p>
      </div>

      {/* ═══ Provider cards ═══ */}
      <div className="space-y-6">
        {providers.map((p, idx) => {
          const affiliateUrl = getProviderAffiliateUrl(p, countrySlug);
          const rank = idx + 1;
          const rankLabel = RANK_WORDS[idx] || "Top Pick";
          const isWinner = idx === 0;

          return (
            <article
              key={p.id}
              className={`group relative isolate overflow-hidden rounded-3xl transition-all duration-500 ${
                isWinner
                  ? "ring-2 ring-offset-4 ring-offset-white dark:ring-offset-slate-950"
                  : "ring-1"
              } ring-slate-200 dark:ring-slate-800 hover:-translate-y-1`}
              style={{
                boxShadow: isWinner
                  ? `0 30px 60px -30px ${p.brandColor}40, 0 0 0 1px ${p.brandColor}15`
                  : undefined,
              }}
            >
              {/* Background wash */}
              <div
                className="absolute inset-0 bg-white dark:bg-slate-900"
                aria-hidden
              />
              <div
                className="absolute inset-0 opacity-60 dark:opacity-40"
                style={{
                  background: `radial-gradient(120% 100% at 0% 0%, ${p.brandColor}18 0%, transparent 55%)`,
                }}
                aria-hidden
              />
              {/* Subtle grain */}
              <div
                className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
                aria-hidden
              />

              {/* ═══ Content grid ═══ */}
              <div className="relative grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 p-6 sm:p-8">
                {/* ── Column 1: Rank + Logo ── */}
                <div className="flex lg:flex-col items-center lg:items-start gap-5 lg:gap-4">
                  {/* Oversized rank number */}
                  <div className="relative shrink-0">
                    <div
                      className="text-[72px] sm:text-[96px] lg:text-[104px] font-black leading-[0.8] tracking-tighter"
                      style={{
                        background: `linear-gradient(135deg, ${p.brandColor}, ${p.brandColorDark})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {rank}
                    </div>
                    {isWinner && (
                      <div className="absolute -top-2 -right-2 rotate-12 px-2 py-0.5 text-[9px] font-black tracking-wider text-white rounded shadow-lg"
                           style={{ background: `linear-gradient(135deg, ${p.brandColor}, ${p.brandColorDark})` }}>
                        WINNER
                      </div>
                    )}
                  </div>

                  {/* Logo tile */}
                  <div className="flex flex-col items-center lg:items-start gap-3">
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white ring-1 ring-slate-200 dark:ring-slate-700 p-3 shadow-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/providers/${p.id}.svg`}
                        alt={`${p.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 mb-0.5">
                        {rankLabel}
                      </div>
                      <div className="text-xl font-black text-slate-950 dark:text-white leading-tight">
                        {p.name}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Column 2: Pitch + features ── */}
                <div className="min-w-0">
                  {/* Rating bar */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(p.rating) ? "text-amber-400" : "text-slate-200 dark:text-slate-700"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-black text-slate-950 dark:text-white">{p.rating.toFixed(1)}</span>
                    <span className="text-xs text-slate-400">/ 5</span>
                    <span className="hidden sm:inline text-xs text-slate-400">·</span>
                    <span className="hidden sm:inline text-xs text-slate-500 dark:text-slate-400">Based on 250+ tests</span>
                  </div>

                  {/* Editorial tagline */}
                  <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug mb-4 tracking-tight">
                    {p.tagline}
                  </p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-2">
                    {(p.keyFeatures || []).slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                      >
                        <svg className="w-3 h-3 shrink-0" style={{ color: p.brandColor }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Column 3: Price + CTA ── */}
                <div className="flex flex-col items-stretch lg:items-end gap-3 lg:min-w-[240px] lg:pl-6 lg:border-l lg:border-slate-200 lg:dark:border-slate-800">
                  {p.discountBadge && (
                    <div
                      className="self-center lg:self-end inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-black text-white rounded-full shadow-md"
                      style={{ background: `linear-gradient(135deg, ${p.brandColor}, ${p.brandColorDark})` }}
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {p.discountBadge}
                    </div>
                  )}

                  {p.originalPrice && p.salePrice && (
                    <div className="text-center lg:text-right">
                      <div className="text-xs text-slate-500 dark:text-slate-400 line-through font-semibold">
                        was {p.originalPrice}
                      </div>
                      <div className="flex items-baseline justify-center lg:justify-end gap-1 mt-0.5">
                        <span className="text-[32px] sm:text-4xl font-black text-slate-950 dark:text-white leading-none tracking-tight">
                          {p.salePrice.split("/")[0]}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                          /{p.salePrice.split("/")[1] || "mo"}
                        </span>
                      </div>
                    </div>
                  )}

                  <a
                    href={affiliateUrl}
                    rel="noopener noreferrer sponsored"
                    className="group/cta relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-black tracking-wide text-white rounded-2xl shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 uppercase"
                    style={{
                      background: `linear-gradient(135deg, ${p.brandColor} 0%, ${p.brandColorDark} 100%)`,
                      boxShadow: `0 14px 30px -12px ${p.brandColor}66, 0 6px 12px -4px ${p.brandColor}40`,
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700" aria-hidden />
                    <span className="relative">Get {p.name}</span>
                    <svg className="relative w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  <div className="flex items-center justify-center lg:justify-end gap-2 text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>30-day money-back guarantee</span>
                  </div>

                  <Link
                    href={`/vpn/providers/${p.id}`}
                    className="text-center lg:text-right text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors underline decoration-dotted underline-offset-2"
                  >
                    Read full {p.name} review
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Affiliate disclosure */}
      <p className="mt-8 text-center text-[11px] text-slate-500 dark:text-slate-400">
        We earn a commission when you click &ldquo;Get&rdquo; buttons, at no extra cost to you.{" "}
        <Link href="/affiliate-disclosure" className="underline decoration-dotted hover:text-slate-900 dark:hover:text-white">
          Read our affiliate disclosure
        </Link>
      </p>
    </section>
  );
}
