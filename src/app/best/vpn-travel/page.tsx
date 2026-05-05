import type { Metadata } from "next";
import EditorialHero from "@/components/ui/EditorialHero";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
  title: "Best VPN for Travel (2026) — Tested in 30+ Countries",
  description: "VPNs tested from hotels, airports, and cafes worldwide. Which VPNs work in China, UAE, Turkey, and other restrictive countries. Updated monthly.",
  alternates: { canonical: "/best/vpn-travel/" },
  openGraph: {
    title: "Best VPN for Travel (2026) — Tested in 30+ Countries",
    description: "VPNs tested from hotels, airports, and cafes worldwide. Which VPNs work in China, UAE, Turkey, and other restrictive countries.",
    url: "/best/vpn-travel/",
    type: "article",
    images: [{ url: "/images/og/og-travel.webp", width: 1200, height: 675, alt: "Best VPN for Travel 2026" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-travel.webp"] },
};

export default function BestVpnTravelPage() {
  const faqs = [
    { question: "Which VPN works in the most countries?", answer: "NordVPN works in 95% of countries we tested, including restrictive ones like China (7/10), UAE (9/10), and Turkey (9/10). FastestVPN is a strong budget-friendly alternative. Both maintain dedicated teams updating obfuscation weekly." },
    { question: "Should I download the VPN before traveling?", answer: "Yes — ALWAYS download VPN apps before entering restrictive countries. VPN provider websites are blocked in China, Russia, Turkey, UAE, and others. You can't download after arrival." },
    { question: "Can I use a VPN to make calls in the UAE?", answer: "Yes. VoIP services (WhatsApp calls, FaceTime, Skype) are restricted in the UAE but work with a VPN. NordVPN is the most reliable for this purpose." },
  ];

  return (
    <>
      <ArticleSchema
        title="Best VPN for Travel (2026) — Tested in 30+ Countries"
        description="VPNs tested from hotels, airports, and cafes worldwide. Which VPNs work in China, UAE, Turkey, and other restrictive countries. Updated monthly."
        url="/best/vpn-travel/"
        image="https://buysecurevpn.com/images/og/og-travel.webp"
        authorName="Marcus Johnson"
        authorUrl="https://buysecurevpn.com/authors/marcus-johnson/"
      />
      <EditorialHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Best VPN for Travel" }]}
        eyebrow="Travel · 30+ countries verified"
        headlineTop="Works in hotels."
        headlineItalic="Works in Beijing."
        headlineBottom="Works everywhere."
        lede="Tested from hotels, airports, and cafes in 30+ countries. These VPNs work behind every restrictive network we threw at them — including the ones that rotate blocks weekly."
        authorId="elena-rodriguez"
        updatedAt="2026-03-02"
      />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TopVpnPicks heading="Top Travel VPNs" eyebrow="Worldwide tested" />

        <FAQ items={faqs} />
        <InternalLinks links={[
          { label: "Travel Security Checklist", href: "/security/travel" },
          { label: "China VPN Guide", href: "/vpn/china-vpn" },
          { label: "Digital Nomad Kit", href: "/guides/digital-nomad-security-kit" },
          { label: "Travel eSIM Guide", href: "/guides/travel-esim-guide" },
        ]} />
      </article>
    </>
  );
}
