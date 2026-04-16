import type { Metadata } from "next";
import Link from "next/link";
import { getAllProviders, getProviderAffiliateUrl } from "@/lib/data";
import { LOCALES, t, type Locale } from "@/lib/i18n";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return LOCALES.filter((l) => l !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const tr = t(locale as Locale);
  return {
    title: tr.bestVpn.title,
    description: tr.bestVpn.description,
    alternates: {
      canonical: `/${locale}/best/vpn/`,
      languages: { en: "/best/vpn/", fr: "/fr/best/vpn/", es: "/es/best/vpn/", pt: "/pt/best/vpn/" },
    },
    openGraph: {
      title: tr.bestVpn.title,
      description: tr.bestVpn.description,
      type: "article",
      url: `/${locale}/best/vpn/`,
      locale: locale === "pt" ? "pt_BR" : `${locale}_${locale.toUpperCase()}`,
      images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675 }],
    },
  };
}

export default async function LocalizedBestVpnPage(props: PageProps) {
  const { locale } = await props.params;
  const tr = t(locale as Locale);
  const providers = getAllProviders();

  return (
    <>
      {/* Editorial hero */}
      <div className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1100px_700px_at_80%_25%,rgba(245,158,11,0.13),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_5%_85%,rgba(37,99,235,0.22),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.055] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
          <div className="flex items-center justify-between gap-4 pb-6 mb-12 border-b border-white/10">
            <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: tr.langName, href: `/${locale}/` }, { label: tr.bestVpn.title.split("—")[0].trim() }]} />
            </div>
            <div className="hidden md:inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {tr.common.updatedWeekly}
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="h-px w-10 bg-amber-400" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-400">{tr.bestVpn.eyebrow}</span>
          </div>

          <h1 className="font-black tracking-[-0.03em] leading-[0.92] text-[44px] sm:text-[72px] lg:text-[96px] max-w-5xl">
            <span className="block text-white">{tr.bestVpn.headlineTop}</span>
            <span className="block italic font-serif text-amber-300 -mt-1 lg:-mt-2">{tr.bestVpn.headlineItalic}</span>
            <span className="block text-white">{tr.bestVpn.headlineBottom}</span>
          </h1>

          <p className="mt-10 max-w-3xl text-lg sm:text-xl text-slate-300 leading-[1.55]">{tr.bestVpn.lede}</p>
        </div>
      </div>

      {/* Provider cards */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">{tr.topPicks.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.05]">{tr.topPicks.heading}</h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">{tr.topPicks.subtext}</p>
        </div>

        <div className="space-y-5">
          {providers.map((p, idx) => {
            const affiliateUrl = getProviderAffiliateUrl(p);
            const brandColor = p.brandColor || "#3b82f6";
            const brandColorDark = p.brandColorDark || "#1d4ed8";
            const labels = [tr.common.bestOverall, tr.common.unlimitedDevices, tr.common.bestPrivacy, tr.common.bestBudget];
            return (
              <div key={p.id} className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow">
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${brandColor}, ${brandColorDark})` }} />
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/providers/${p.id}.svg`} alt={p.name} width={44} height={44} className="w-11 h-11 shrink-0 rounded-xl object-contain bg-white dark:bg-slate-800 p-1.5 ring-1 ring-slate-200 dark:ring-slate-700" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg font-black text-slate-900 dark:text-white">{p.name}</span>
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>{labels[idx] || p.positioningLabel}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} className={`w-3 h-3 ${i < Math.floor(p.rating) ? "text-amber-400" : "text-slate-200 dark:text-slate-700"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs font-black text-slate-900 dark:text-white ml-1">{p.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    {p.salePrice && (
                      <div className="hidden sm:block text-right shrink-0">
                        {p.originalPrice && <div className="text-[11px] text-slate-400 line-through">{p.originalPrice}</div>}
                        <div className="text-xl font-black text-slate-900 dark:text-white">{p.salePrice}</div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{p.tagline}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={affiliateUrl} rel="noopener noreferrer sponsored" className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-black tracking-wide text-white rounded-xl shadow-lg uppercase hover:-translate-y-0.5 transition-all" style={{ background: `linear-gradient(135deg, ${brandColor}, ${brandColorDark})`, boxShadow: `0 10px 24px -8px ${brandColor}55` }}>
                      {tr.topPicks.getCta} {p.name}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                    <Link href={`/vpn/providers/${p.id}`} className="inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      {tr.topPicks.readReview}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[11px] text-slate-500 dark:text-slate-400">
          {tr.topPicks.disclosure}{" "}
          <Link href="/affiliate-disclosure" className="underline decoration-dotted hover:text-slate-900 dark:hover:text-white">{tr.topPicks.disclosureLink}</Link>
        </p>
      </article>
    </>
  );
}
