import type { Metadata } from "next";
import Link from "next/link";
import { LOCALES, t, TOP_COUNTRIES, type Locale } from "@/lib/i18n";
import { getCountryBySlug } from "@/lib/data";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return LOCALES.filter((l) => l !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const tr = t(locale as Locale);
  return {
    title: `BuySecureVPN — ${tr.topPicks.heading} | ${tr.langName}`,
    description: tr.bestVpn.description,
    alternates: {
      canonical: `/${locale}/`,
      languages: { "x-default": "/", en: "/", fr: "/fr/", es: "/es/", pt: "/pt/" },
    },
  };
}

const COUNTRY_NAMES_SHORT: Record<string, Record<string, string>> = {
  france: { fr: "France" }, canada: { fr: "Canada" }, switzerland: { fr: "Suisse" }, morocco: { fr: "Maroc" }, belgium: { fr: "Belgique" },
  mexico: { es: "México" }, spain: { es: "España" }, argentina: { es: "Argentina" }, colombia: { es: "Colombia" }, chile: { es: "Chile" },
  brazil: { pt: "Brasil" }, portugal: { pt: "Portugal" }, mozambique: { pt: "Moçambique" },
};

export default async function LocaleHomePage(props: PageProps) {
  const { locale } = await props.params;
  const tr = t(locale as Locale);
  const countries = TOP_COUNTRIES[locale as Locale] || [];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_500px_at_50%_30%,rgba(245,158,11,0.12),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-[1.05]">
            {tr.topPicks.heading}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">{tr.bestVpn.description}</p>
        </div>
      </section>

      {/* Top picks */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TopVpnPicks heading={tr.topPicks.heading} eyebrow={tr.topPicks.eyebrow} />
      </div>

      {/* Country links */}
      {countries.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">VPN {tr.langName}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {countries.map((slug) => {
              const name = COUNTRY_NAMES_SHORT[slug]?.[locale] || getCountryBySlug(slug)?.nameEn || slug;
              return (
                <Link key={slug} href={`/${locale}/vpn/${slug}`} className="group flex items-center gap-2 p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all">
                  <span className="flex-1 text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                    {tr.country.titleTemplate.replace("{country}", name)}
                  </span>
                  <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href={`/${locale}/best/vpn`} className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors">{tr.bestVpn.title.split("—")[0].trim()}</Link>
            <Link href={`/${locale}/deals`} className="px-5 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors">{tr.deals.heading}</Link>
          </div>
        </section>
      )}
    </div>
  );
}
