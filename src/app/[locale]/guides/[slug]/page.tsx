import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { LOCALES, t, type Locale } from "@/lib/i18n";
import { getPostBySlug } from "@/lib/mdx";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

const TOP_GUIDE_SLUGS = [
  "vpn-setup-beginners",
  "vpn-protocols-explained",
  "vpn-speed-optimization",
  "vpn-logging-policies",
  "digital-nomad-security-kit",
  "vpn-for-gamers-advanced",
  "travel-esim-guide",
  "multi-device-security",
  "password-manager-setup",
  "data-breach-response",
];

const GUIDE_I18N: Record<string, Record<string, { title: string; description: string }>> = {
  "vpn-setup-beginners": {
    fr: { title: "Comment Installer un VPN : Guide Complet pour Débutants (2026)", description: "Guide étape par étape pour configurer un VPN sur n'importe quel appareil. Couvre Windows, Mac, iOS, Android et routeurs." },
    es: { title: "Cómo Configurar una VPN: Guía Completa para Principiantes (2026)", description: "Guía paso a paso para configurar una VPN en cualquier dispositivo. Cubre Windows, Mac, iOS, Android y routers." },
    pt: { title: "Como Configurar uma VPN: Guia Completo para Iniciantes (2026)", description: "Guia passo a passo para configurar uma VPN em qualquer dispositivo. Cobre Windows, Mac, iOS, Android e roteadores." },
  },
  "vpn-protocols-explained": {
    fr: { title: "Protocoles VPN Expliqués : WireGuard, OpenVPN, IKEv2 (2026)", description: "Comparaison complète des protocoles VPN. Lequel choisir pour la vitesse, la sécurité ou la compatibilité." },
    es: { title: "Protocolos VPN Explicados: WireGuard, OpenVPN, IKEv2 (2026)", description: "Comparación completa de protocolos VPN. Cuál elegir para velocidad, seguridad o compatibilidad." },
    pt: { title: "Protocolos VPN Explicados: WireGuard, OpenVPN, IKEv2 (2026)", description: "Comparação completa de protocolos VPN. Qual escolher para velocidade, segurança ou compatibilidade." },
  },
  "vpn-speed-optimization": {
    fr: { title: "Optimiser la Vitesse de Votre VPN : Guide Complet (2026)", description: "Augmentez la vitesse de votre VPN avec ces conseils testés. Protocoles, serveurs, paramètres réseau." },
    es: { title: "Optimizar la Velocidad de tu VPN: Guía Completa (2026)", description: "Aumenta la velocidad de tu VPN con estos consejos probados. Protocolos, servidores, configuración de red." },
    pt: { title: "Otimizar a Velocidade da sua VPN: Guia Completo (2026)", description: "Aumente a velocidade da sua VPN com estas dicas testadas. Protocolos, servidores, configuração de rede." },
  },
  "vpn-logging-policies": {
    fr: { title: "Politiques de Journalisation VPN : Ce que Signifie Vraiment « Sans Logs » (2026)", description: "Analyse des politiques de journalisation des principaux VPN. Audits indépendants, juridictions et données collectées." },
    es: { title: "Políticas de Registro VPN: Qué Significa Realmente « Sin Logs » (2026)", description: "Análisis de las políticas de registro de los principales VPN. Auditorías independientes, jurisdicciones y datos recopilados." },
    pt: { title: "Políticas de Registro VPN: O que Realmente Significa « Sem Logs » (2026)", description: "Análise das políticas de registro dos principais VPNs. Auditorias independentes, jurisdições e dados coletados." },
  },
  "digital-nomad-security-kit": {
    fr: { title: "Kit de Sécurité pour Nomades Numériques (2026)", description: "Tout ce dont un nomade numérique a besoin pour rester en sécurité. VPN, gestionnaire de mots de passe, 2FA, et plus." },
    es: { title: "Kit de Seguridad para Nómadas Digitales (2026)", description: "Todo lo que un nómada digital necesita para mantenerse seguro. VPN, gestor de contraseñas, 2FA y más." },
    pt: { title: "Kit de Segurança para Nômades Digitais (2026)", description: "Tudo que um nômade digital precisa para se manter seguro. VPN, gerenciador de senhas, 2FA e mais." },
  },
  "vpn-for-gamers-advanced": {
    fr: { title: "VPN pour Joueurs : Guide Avancé — Meshnet, Port Forwarding (2026)", description: "Guide avancé VPN gaming. Meshnet pour LAN virtuel, redirection de ports, hébergement de serveurs." },
    es: { title: "VPN para Gamers: Guía Avanzada — Meshnet, Port Forwarding (2026)", description: "Guía avanzada VPN gaming. Meshnet para LAN virtual, reenvío de puertos, hosting de servidores." },
    pt: { title: "VPN para Gamers: Guia Avançado — Meshnet, Port Forwarding (2026)", description: "Guia avançado VPN gaming. Meshnet para LAN virtual, redirecionamento de portas, hospedagem de servidores." },
  },
  "travel-esim-guide": {
    fr: { title: "Guide eSIM pour les Voyages : Rester Connecté Partout (2026)", description: "Comment utiliser les eSIM en voyage. Comparaison des fournisseurs, compatibilité et conseils." },
    es: { title: "Guía eSIM para Viajes: Mantente Conectado en Todas Partes (2026)", description: "Cómo usar eSIMs en viajes. Comparación de proveedores, compatibilidad y consejos." },
    pt: { title: "Guia eSIM para Viagens: Fique Conectado em Todo Lugar (2026)", description: "Como usar eSIMs em viagens. Comparação de provedores, compatibilidade e dicas." },
  },
  "multi-device-security": {
    fr: { title: "Sécurité Multi-Appareils : Protégez Tous Vos Appareils (2026)", description: "Comment sécuriser votre ordinateur, téléphone, tablette et objets connectés avec une seule stratégie." },
    es: { title: "Seguridad Multi-Dispositivo: Protege Todos Tus Dispositivos (2026)", description: "Cómo asegurar tu computadora, teléfono, tablet y dispositivos IoT con una sola estrategia." },
    pt: { title: "Segurança Multi-Dispositivos: Proteja Todos os Seus Dispositivos (2026)", description: "Como proteger seu computador, telefone, tablet e dispositivos IoT com uma única estratégia." },
  },
  "password-manager-setup": {
    fr: { title: "Comment Configurer un Gestionnaire de Mots de Passe (2026)", description: "Guide étape par étape pour passer à un gestionnaire de mots de passe. Migration, configuration et meilleures pratiques." },
    es: { title: "Cómo Configurar un Gestor de Contraseñas (2026)", description: "Guía paso a paso para cambiar a un gestor de contraseñas. Migración, configuración y mejores prácticas." },
    pt: { title: "Como Configurar um Gerenciador de Senhas (2026)", description: "Guia passo a passo para mudar para um gerenciador de senhas. Migração, configuração e melhores práticas." },
  },
  "data-breach-response": {
    fr: { title: "Que Faire Après une Violation de Données (2026)", description: "Étapes immédiates à suivre si vos données sont compromises. Vérification, changement de mots de passe, gel de crédit." },
    es: { title: "Qué Hacer Después de una Brecha de Datos (2026)", description: "Pasos inmediatos si tus datos fueron comprometidos. Verificación, cambio de contraseñas, congelación de crédito." },
    pt: { title: "O Que Fazer Após uma Violação de Dados (2026)", description: "Passos imediatos se seus dados foram comprometidos. Verificação, troca de senhas, congelamento de crédito." },
  },
};

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of LOCALES) {
    if (locale === "en") continue;
    for (const slug of TOP_GUIDE_SLUGS) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale, slug } = await props.params;
  const i18n = GUIDE_I18N[slug]?.[locale];
  const post = getPostBySlug("guides", slug);
  const title = i18n?.title || post?.frontmatter?.title || slug;
  const description = i18n?.description || post?.frontmatter?.description || "";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/guides/${slug}/`,
      languages: { en: `/guides/${slug}/` },
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/${locale}/guides/${slug}/`,
      locale: locale === "pt" ? "pt_BR" : `${locale}_${locale.toUpperCase()}`,
    },
  };
}

export default async function LocalizedGuidePage(props: PageProps) {
  const { locale, slug } = await props.params;
  const post = getPostBySlug("guides", slug);
  if (!post) notFound();

  const tr = t(locale as Locale);
  const i18n = GUIDE_I18N[slug]?.[locale];
  const title = i18n?.title || post.frontmatter.title;
  const description = i18n?.description || post.frontmatter.description;

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: locale === "pt" ? "pt-BR" : locale,
    url: `https://buysecurevpn.com/${locale}/guides/${slug}/`,
    dateModified: post.frontmatter.updatedAt || "2026-03-15",
    author: { "@type": "Person", name: "Marcus Johnson", url: "https://buysecurevpn.com/authors/marcus-johnson/" },
    publisher: { "@type": "Organization", name: "BuySecureVPN", url: "https://buysecurevpn.com/" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: tr.langName, href: `/${locale}/` }, { label: title }]} />
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">{title}</h1>
          {description && <p className="mt-4 text-lg text-slate-300 leading-relaxed max-w-3xl">{description}</p>}
          <div className="mt-6 pt-5 border-t border-white/10 [&_a]:text-slate-300 [&_a:hover]:text-white [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId={post.frontmatter.author || "marcus-johnson"} updatedAt={post.frontmatter.updatedAt || "2026-03-15"} />
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TopVpnPicks heading={tr.topPicks.heading} eyebrow={tr.topPicks.eyebrow} />

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight">
          {content}
        </div>

        <InternalLinks links={[
          { label: tr.bestVpn.title.split("—")[0].trim(), href: `/${locale}/best/vpn` },
          { label: tr.deals.heading, href: `/${locale}/deals` },
          { label: "English version", href: `/guides/${slug}` },
        ]} />
      </article>
    </>
  );
}
