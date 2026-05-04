import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProviders, getCountryBySlug, getRecommendedProviders, getProviderAffiliateUrl } from "@/lib/data";
import { LOCALES, t, TOP_COUNTRIES, type Locale } from "@/lib/i18n";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

// Country name translations (top countries only)
const COUNTRY_NAMES: Record<string, Record<string, string>> = {
  france: { fr: "France", es: "Francia", pt: "França" },
  canada: { fr: "Canada", es: "Canadá", pt: "Canadá" },
  switzerland: { fr: "Suisse", es: "Suiza", pt: "Suíça" },
  morocco: { fr: "Maroc", es: "Marruecos", pt: "Marrocos" },
  belgium: { fr: "Belgique", es: "Bélgica", pt: "Bélgica" },
  senegal: { fr: "Sénégal", es: "Senegal", pt: "Senegal" },
  tunisia: { fr: "Tunisie", es: "Túnez", pt: "Tunísia" },
  luxembourg: { fr: "Luxembourg", es: "Luxemburgo", pt: "Luxemburgo" },
  cameroon: { fr: "Cameroun", es: "Camerún", pt: "Camarões" },
  madagascar: { fr: "Madagascar", es: "Madagascar", pt: "Madagáscar" },
  mexico: { fr: "Mexique", es: "México", pt: "México" },
  spain: { fr: "Espagne", es: "España", pt: "Espanha" },
  argentina: { fr: "Argentine", es: "Argentina", pt: "Argentina" },
  colombia: { fr: "Colombie", es: "Colombia", pt: "Colômbia" },
  chile: { fr: "Chili", es: "Chile", pt: "Chile" },
  peru: { fr: "Pérou", es: "Perú", pt: "Peru" },
  "costa-rica": { fr: "Costa Rica", es: "Costa Rica", pt: "Costa Rica" },
  panama: { fr: "Panama", es: "Panamá", pt: "Panamá" },
  uruguay: { fr: "Uruguay", es: "Uruguay", pt: "Uruguai" },
  ecuador: { fr: "Équateur", es: "Ecuador", pt: "Equador" },
  brazil: { fr: "Brésil", es: "Brasil", pt: "Brasil" },
  portugal: { fr: "Portugal", es: "Portugal", pt: "Portugal" },
  mozambique: { fr: "Mozambique", es: "Mozambique", pt: "Moçambique" },
};

function getCountryName(slug: string, locale: string): string {
  return COUNTRY_NAMES[slug]?.[locale] || getCountryBySlug(slug)?.nameEn || slug;
}

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of LOCALES) {
    if (locale === "en") continue;
    for (const slug of TOP_COUNTRIES[locale]) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale, slug } = await props.params;
  const tr = t(locale as Locale);
  const name = getCountryName(slug, locale);
  const title = tr.country.titleTemplate.replace("{country}", name);
  return {
    title,
    description: `${title}. ${tr.bestVpn.description}`,
    alternates: {
      canonical: `/${locale}/vpn/${slug}/`,
      languages: { "x-default": `/vpn/best/${slug}/`, en: `/vpn/best/${slug}/`, fr: `/fr/vpn/${slug}/`, es: `/es/vpn/${slug}/`, pt: `/pt/vpn/${slug}/` },
    },
    openGraph: {
      title,
      type: "article",
      url: `/${locale}/vpn/${slug}/`,
      locale: locale === "pt" ? "pt_BR" : `${locale}_${locale.toUpperCase()}`,
    },
  };
}

export default async function LocalizedCountryPage(props: PageProps) {
  const { locale, slug } = await props.params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const tr = t(locale as Locale);
  const name = getCountryName(slug, locale);
  const { overall, families, privacy, budget } = getRecommendedProviders(country);
  const allProviders = getAllProviders();

  const labels = [tr.common.bestOverall, tr.common.unlimitedDevices, tr.common.bestPrivacy, tr.common.bestBudget];
  const picks = [overall, families, privacy, budget];

  const faqs = [
    {
      question: tr.country.titleTemplate.replace("{country}", name) + "?",
      answer: `${overall.name} ${tr.common.bestOverall}. ${families.name} ${tr.common.unlimitedDevices}. ${privacy.name} ${tr.common.bestPrivacy}. ${budget.name} ${tr.common.bestBudget}.`,
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_50%_30%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: tr.langName }, { label: name }]} />
          </div>
          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            {tr.country.titleTemplate.replace("{country}", name)}
          </h1>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">
          {tr.country.topPicks.replace("{country}", name)}
        </h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
          {picks.map((p, idx) => {
            const brandColor = p.brandColor || "#3b82f6";
            const brandColorDark = p.brandColorDark || "#1d4ed8";
            return (
              <div key={p.id} className="relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${brandColor}, ${brandColorDark})` }} />
                <div className="flex-1 flex flex-col p-5">
                  <span className="self-start px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-full mb-3" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>{labels[idx]}</span>
                  <div className="flex items-center gap-3 mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/images/providers/${p.id}.svg`} alt={p.name} width={40} height={40} className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 p-1 ring-1 ring-slate-200 dark:ring-slate-700 object-contain" loading="lazy" />
                    <div>
                      <div className="font-black text-slate-900 dark:text-white">{p.name}</div>
                      <div className="text-xs font-bold text-slate-500">{p.rating.toFixed(1)}/5</div>
                    </div>
                  </div>
                  <div className="flex-1" />
                  {p.salePrice && <div className="text-xl font-black text-slate-900 dark:text-white mb-3">{p.salePrice}</div>}
                  <a href={getProviderAffiliateUrl(p, slug)} rel="noopener noreferrer sponsored" className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-black text-white rounded-xl uppercase" style={{ background: `linear-gradient(135deg, ${brandColor}, ${brandColorDark})` }}>
                    {tr.topPicks.getCta} {p.name}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <FAQ items={faqs} title={tr.country.faqTitle.replace("{country}", name)} />

        <div className="mt-8 text-center">
          <Link href={`/vpn/best/${slug}`} className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
            Read full {country.nameEn} guide (English) →
          </Link>
        </div>
      </article>
    </>
  );
}
