import Link from "next/link";
import { getFeaturedProviders, getProviderAffiliateUrl } from "@/lib/data";
import ABTestCta from "@/components/ui/ABTestCta";

interface TopVpnPicksProps {
  countrySlug?: string;
  heading?: string;
  eyebrow?: string;
  compact?: boolean;
}

const RANK_WORDS = ["Best Overall", "Unlimited Devices", "Best for Privacy", "Best Budget", "Best for Streaming"];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  return (
    <span className="text-amber-400 text-sm tracking-tight" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}{"☆".repeat(5 - full)}
    </span>
  );
}

export default function TopVpnPicks({
  countrySlug,
  heading = "Our Top VPN Picks",
  eyebrow = "Expert-tested",
  compact = false,
}: TopVpnPicksProps) {
  const providers = getFeaturedProviders();
  if (providers.length === 0) return null;

  return (
    <section className={compact ? "my-8" : "my-14"}>
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

      <div className="space-y-5 sm:space-y-6">
        {providers.map((p, idx) => {
          const affiliateUrl = getProviderAffiliateUrl(p, countrySlug);
          const rank = idx + 1;
          const rankLabel = p.positioningLabel || RANK_WORDS[idx] || "Top Pick";
          const isWinner = idx === 0;
          const [saleAmount, salePeriod] = (p.salePrice || "").split("/");

          return (
            <article
              key={p.id}
              className={`group relative isolate overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-500 ${
                isWinner
                  ? "ring-2 ring-offset-2 sm:ring-offset-4 ring-offset-white dark:ring-offset-slate-950"
                  : "ring-1"
              } ring-slate-200 dark:ring-slate-800 hover:-translate-y-1`}
              style={{
                boxShadow: isWinner
                  ? `0 30px 60px -30px ${p.brandColor}40, 0 0 0 1px ${p.brandColor}15`
                  : undefined,
              }}
            >
              <div className="absolute inset-0 bg-white dark:bg-slate-900" aria-hidden />
              <div
                className="absolute inset-0 opacity-60 dark:opacity-40"
                style={{
                  background: `radial-gradient(120% 100% at 0% 0%, ${p.brandColor}18 0%, transparent 55%)`,
                }}
                aria-hidden
              />

              {isWinner && (
                <div
                  className="absolute top-0 right-0 z-10 rounded-bl-2xl px-3 py-1 text-[10px] font-black tracking-[0.15em] text-white shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${p.brandColor}, ${p.brandColorDark})` }}
                >
                  EDITOR&apos;S PICK
                </div>
              )}

              <div className="relative p-5 sm:p-7 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-8">
                  <div className="min-w-0">
                    <div className="flex items-center gap-4 sm:gap-5 mb-5">
                      <div
                        className="shrink-0 font-black leading-none tracking-tighter select-none text-[56px] sm:text-[72px] lg:text-[88px]"
                        style={{
                          background: `linear-gradient(135deg, ${p.brandColor}, ${p.brandColorDark})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                        aria-hidden
                      >
                        {rank}
                      </div>

                      <div className="shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white ring-1 ring-slate-200 dark:ring-slate-700 p-2 shadow-md">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/images/providers/${p.id}.svg`}
                          alt={`${p.name} logo`}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 mb-0.5 truncate">
                          {rankLabel}
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-black text-slate-950 dark:text-white leading-tight truncate">
                          {p.name}
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <Stars rating={p.rating} />
                          <span className="text-xs font-black text-slate-950 dark:text-white">{p.rating.toFixed(1)}</span>
                          <span className="text-[10px] text-slate-400">/ 5</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white leading-snug mb-4 tracking-tight">
                      {p.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {(p.keyFeatures || []).slice(0, 4).map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                        >
                          <span className="w-3 h-3 shrink-0 text-center leading-3" style={{ color: p.brandColor }}>&#10003;</span>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-5 lg:pt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-slate-200/70 dark:border-slate-800">
                    {p.discountBadge && (
                      <div
                        className="self-start lg:self-end inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-black text-white rounded-full shadow-md"
                        style={{ background: `linear-gradient(135deg, ${p.brandColor}, ${p.brandColorDark})` }}
                      >
                        ★ {p.discountBadge}
                      </div>
                    )}

                    {p.originalPrice && p.salePrice && (
                      <div className="flex items-baseline gap-3 lg:flex-col lg:items-end lg:gap-0.5">
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-through font-semibold order-2 lg:order-1">
                          was {p.originalPrice}
                        </div>
                        <div className="flex items-baseline gap-1 order-1 lg:order-2">
                          <span className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-950 dark:text-white leading-none tracking-tight">
                            {saleAmount}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                            /{salePeriod || "mo"}
                          </span>
                        </div>
                      </div>
                    )}

                    <ABTestCta
                      href={affiliateUrl}
                      providerName={p.name}
                      brandColor={p.brandColor || "#3b82f6"}
                      brandColorDark={p.brandColorDark || "#1d4ed8"}
                    />

                    <div className="flex items-center justify-center gap-1.5 text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                      <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>30-day money-back guarantee</span>
                    </div>

                    <Link
                      href={`/vpn/providers/${p.id}`}
                      className="text-center text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors underline decoration-dotted underline-offset-2"
                    >
                      Read full {p.name} review
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-8 text-center text-[11px] text-slate-500 dark:text-slate-400 px-4">
        We earn a commission when you click &ldquo;Get&rdquo; buttons, at no extra cost to you.{" "}
        <Link href="/affiliate-disclosure" className="underline decoration-dotted hover:text-slate-900 dark:hover:text-white">
          Read our affiliate disclosure
        </Link>
      </p>
    </section>
  );
}
