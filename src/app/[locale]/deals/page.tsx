import type { Metadata } from "next";
import Link from "next/link";
import { getAllProviders } from "@/lib/data";
import { LOCALES, t, type Locale } from "@/lib/i18n";
import Byline from "@/components/ui/Byline";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return LOCALES.filter((l) => l !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const tr = t(locale as Locale);
  return {
    title: tr.deals.title,
    description: tr.deals.description,
    alternates: {
      canonical: `/${locale}/deals/`,
      languages: { "x-default": "/deals/", en: "/deals/", fr: "/fr/deals/", es: "/es/deals/", pt: "/pt/deals/" },
    },
  };
}

export default async function LocalizedDealsPage(props: PageProps) {
  const { locale } = await props.params;
  const tr = t(locale as Locale);
  const providers = getAllProviders();

  const deals = [
    { providerId: "nordvpn", discount: "74%", price: "$3.39/mo", wasPrice: "$12.99/mo", extra: "+ 3 months" },
    { providerId: "surfshark", discount: "87%", price: "$1.99/mo", wasPrice: "$15.45/mo", extra: "∞ devices" },
    { providerId: "protonvpn", discount: "50%", price: "$4.99/mo", wasPrice: "$9.99/mo", extra: "Proton ecosystem" },
    { providerId: "fastestvpn", discount: "89%", price: "$1.11/mo", wasPrice: "$10.00/mo", extra: "Lifetime deal" },
  ];

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">{tr.deals.heading}</h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">{tr.deals.subheading}</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-5 mb-10">
          {deals.map((deal, idx) => {
            const provider = providers.find((p) => p.id === deal.providerId);
            if (!provider) return null;
            const brandColor = provider.brandColor || "#3b82f6";
            const brandColorDark = provider.brandColorDark || "#1d4ed8";
            return (
              <div key={deal.providerId} className={`relative overflow-hidden rounded-2xl transition-all ${idx === 0 ? "border-2 border-blue-400 dark:border-blue-600 shadow-xl" : "border border-slate-200 dark:border-slate-800"} bg-white dark:bg-slate-900`}>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/images/providers/${provider.id}.svg`} alt={provider.name} width={48} height={48} className="w-12 h-12 shrink-0 rounded-xl object-contain bg-white dark:bg-slate-800 p-1.5 ring-1 ring-slate-200 dark:ring-slate-700" loading="lazy" />
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{provider.name}</h2>
                        <p className="text-sm text-slate-500">{deal.extra}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center px-2.5 py-1 text-[11px] font-bold text-white rounded-full" style={{ background: `linear-gradient(135deg, ${brandColor}, ${brandColorDark})` }}>-{deal.discount}</div>
                      <div className="mt-1 flex items-baseline justify-end gap-2">
                        <span className="text-sm text-slate-400 line-through">{deal.wasPrice}</span>
                        <span className="text-2xl font-black text-slate-900 dark:text-white">{deal.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800">
                    <a href={provider.affiliate.trackingBaseUrl} rel="noopener noreferrer sponsored" className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-black text-white rounded-xl uppercase hover:-translate-y-0.5 transition-all" style={{ background: `linear-gradient(135deg, ${brandColor}, ${brandColorDark})`, boxShadow: `0 10px 24px -8px ${brandColor}55` }}>
                      {tr.topPicks.getCta} {provider.name}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[11px] text-slate-500">
          {tr.topPicks.disclosure}{" "}
          <Link href="/affiliate-disclosure" className="underline decoration-dotted">{tr.topPicks.disclosureLink}</Link>
        </p>
      </article>
    </div>
  );
}
