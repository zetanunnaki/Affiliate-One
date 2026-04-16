import type { Metadata } from "next";
import Link from "next/link";
import { LOCALES, t, type Locale } from "@/lib/i18n";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return LOCALES.filter((l) => l !== "en").map((locale) => ({ locale }));
}

const GUIDE_TITLES: Record<string, Record<string, string>> = {
  "vpn-setup-beginners": { fr: "Guide d'installation VPN pour débutants", es: "Guía de configuración VPN para principiantes", pt: "Guia de configuração VPN para iniciantes" },
  "vpn-protocols-explained": { fr: "Protocoles VPN expliqués", es: "Protocolos VPN explicados", pt: "Protocolos VPN explicados" },
  "vpn-speed-optimization": { fr: "Optimisation de la vitesse VPN", es: "Optimización de velocidad VPN", pt: "Otimização de velocidade VPN" },
  "vpn-logging-policies": { fr: "Politiques de journalisation VPN", es: "Políticas de registro VPN", pt: "Políticas de registro VPN" },
  "digital-nomad-security-kit": { fr: "Kit de sécurité pour nomades numériques", es: "Kit de seguridad para nómadas digitales", pt: "Kit de segurança para nômades digitais" },
  "vpn-for-gamers-advanced": { fr: "VPN pour joueurs — Guide avancé", es: "VPN para gamers — Guía avanzada", pt: "VPN para gamers — Guia avançado" },
  "travel-esim-guide": { fr: "Guide eSIM pour les voyages", es: "Guía eSIM para viajes", pt: "Guia eSIM para viagens" },
  "multi-device-security": { fr: "Sécurité multi-appareils", es: "Seguridad multi-dispositivo", pt: "Segurança multi-dispositivos" },
  "password-manager-setup": { fr: "Configuration du gestionnaire de mots de passe", es: "Configuración del gestor de contraseñas", pt: "Configuração do gerenciador de senhas" },
  "data-breach-response": { fr: "Réponse à une violation de données", es: "Respuesta a una brecha de datos", pt: "Resposta a uma violação de dados" },
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const tr = t(locale as Locale);
  const titles: Record<string, string> = { fr: "Guides de sécurité VPN", es: "Guías de seguridad VPN", pt: "Guias de segurança VPN" };
  return {
    title: `${titles[locale] || "VPN Security Guides"} | BuySecureVPN`,
    description: tr.bestVpn.description,
    alternates: { canonical: `/${locale}/guides/` },
  };
}

export default async function LocalizedGuidesPage(props: PageProps) {
  const { locale } = await props.params;
  const tr = t(locale as Locale);
  const topSlugs = [
    "vpn-setup-beginners", "vpn-protocols-explained", "vpn-speed-optimization",
    "vpn-logging-policies", "digital-nomad-security-kit", "vpn-for-gamers-advanced",
    "travel-esim-guide", "multi-device-security", "password-manager-setup", "data-breach-response",
  ];
  const slugs = topSlugs;
  const titles: Record<string, string> = { fr: "Guides de Sécurité", es: "Guías de Seguridad", pt: "Guias de Segurança" };

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950 text-white py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {titles[locale] || "Security Guides"}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {tr.topPicks.subtext}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TopVpnPicks heading={tr.topPicks.heading} eyebrow={tr.topPicks.eyebrow} />

        <section className="mt-12">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">{titles[locale] || "Guides"}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {slugs.map((slug) => {
              const post = getPostBySlug("guides", slug);
              const localTitle = GUIDE_TITLES[slug]?.[locale];
              const title = localTitle || post?.frontmatter?.title || slug;
              return (
                <Link key={slug} href={`/${locale}/guides/${slug}`} className="group p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all">
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">{title}</h3>
                  {post?.frontmatter?.description && (
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{post.frontmatter.description}</p>
                  )}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
