import type { Metadata } from "next";
import { getAllProviders } from "@/lib/data";
import Byline from "@/components/ui/Byline";
import ProviderCard from "@/components/ui/ProviderCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import Methodology from "@/components/ui/Methodology";
import PricingTable from "@/components/ui/PricingTable";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Best VPN 2026 — Expert-Tested & Independently Reviewed",
  description:
    "We tested the top VPN services for speed, security, and privacy. NordVPN, Surfshark, FastestVPN, Proton VPN, and Mullvad compared.",
};

export default function BestVpnPage() {
  const providers = getAllProviders();

  const comparisonRows = providers.map((p) => ({
    provider: p,
    bestFor: p.positioningTags.slice(0, 2).join(", "),
    keyFeatures: [
      p.features.noLogsClaim && "No-logs",
      p.features.killSwitch && "Kill switch",
      `${p.features.devices === 0 ? "Unlimited" : p.features.devices} devices`,
    ]
      .filter(Boolean)
      .join(", "),
    countryNotes: "",
  }));

  const faqs = [
    {
      question: "What is the best VPN in 2026?",
      answer:
        "Based on our testing, NordVPN is the best overall VPN in 2026, offering the best combination of speed, security, and value. Surfshark is the best budget option, and FastestVPN is best for travel.",
    },
    {
      question: "Are free VPNs safe to use?",
      answer:
        "Most free VPNs have significant limitations: slower speeds, data caps, fewer servers, and some monetize your data through ads or selling browsing history. For remote work and sensitive activities, we recommend a paid VPN with a verified no-logs policy.",
    },
    {
      question: "How do we test VPNs?",
      answer:
        "We test each VPN for speed (download, upload, latency), security (kill switch, DNS leaks, encryption), privacy (logging policy, jurisdiction, audits), and usability (app quality, support, ease of setup). Tests are conducted monthly on multiple devices and operating systems.",
    },
    {
      question: "Do I need a VPN for remote work?",
      answer:
        "Yes, a VPN is essential for remote work security. It encrypts your internet traffic, protects you on public Wi-Fi, helps maintain access to company resources, and prevents your ISP from monitoring your work activity.",
    },
  ];

  return (
    <>
      {/* ═══ DARK HERO ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.1),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best Of", href: "/best" }, { label: "Best VPN 2026" }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-5 mb-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Editor&apos;s picks
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5">
            Best VPN 2026: Expert-Tested &amp; Independently Reviewed
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
            We tested {providers.length} VPN services for speed, security, privacy, and value. Here are our top recommendations for remote workers, travelers, and privacy-conscious users.
          </p>

          <div className="pt-5 border-t border-white/10 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Quick picks */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Our Top 3 Picks
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <ProviderCard provider={providers[0]} badge="Best Overall" />
          <ProviderCard provider={providers[1]} badge="Best Budget" />
          <ProviderCard provider={providers[2]} badge="Best for Travel" />
        </div>
      </section>

      <ComparisonTable rows={comparisonRows} />
      <PricingTable providers={providers} />
      <Methodology />

      {/* Mini reviews */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Detailed Reviews
        </h2>
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="mb-6 p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {provider.name}
              </h3>
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                {provider.rating}/5
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              {provider.notes}
            </p>
            <p className="text-sm text-zinc-500">
              Price: {provider.priceRange} | Devices:{" "}
              {provider.features.devices === 0
                ? "Unlimited"
                : provider.features.devices}{" "}
              | Protocols: {provider.features.protocols.join(", ")}
            </p>
          </div>
        ))}
      </section>

      <FAQ items={faqs} />

      <InternalLinks
        links={[
          { label: "VPN for Remote Work", href: "/vpn/intent/remote-work" },
          { label: "VPN for Travel", href: "/vpn/intent/travel" },
          { label: "Country Directory", href: "/countries" },
          { label: "Public Wi-Fi Safety", href: "/security/public-wifi" },
        ]}
      />
    </article>
    </>
  );
}
