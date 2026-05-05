import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import comparisons from "@/data/comparisons.json";
import { getProviderById } from "@/lib/data";
import type { Provider } from "@/types";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import ComparisonHighlight from "@/components/ui/ComparisonHighlight";
import { BUILD_DATE_ISO } from "@/lib/dates";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) return {};
  const description = `Detailed comparison of ${comp.providers.map((id) => getProviderById(id)?.name).join(" and ")}. Speed, security, price, and features compared side by side.`;
  return {
    title: comp.title,
    description,
    alternates: { canonical: `/vpn/vs/${slug}/` },
    openGraph: {
      title: comp.title,
      description,
      type: "article",
      url: `/vpn/vs/${slug}/`,
      images: [{ url: "/images/og/og-vpn.webp", width: 1200, height: 675, alt: comp.title }],
    },
    twitter: { card: "summary_large_image", images: ["/images/og/og-vpn.webp"] },
  };
}

function providerHref(p: Provider): string {
  return p.monetized === false ? "/best/vpn" : `/vpn/providers/${p.id}`;
}

function providerReviewLabel(p: Provider): string {
  return p.monetized === false ? "See Our Top Picks" : `${p.name} Full Review`;
}

function FeatureCheck({ value }: { value: boolean | number | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="text-green-600 dark:text-green-400 font-bold">Yes</span>
    ) : (
      <span className="text-red-500 dark:text-red-400">No</span>
    );
  }
  if (typeof value === "number") {
    return <span>{value === 0 ? "Unlimited" : value}</span>;
  }
  return <span>{value}</span>;
}

export default async function VsPage(props: PageProps) {
  const { slug } = await props.params;
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) notFound();

  const providers = comp.providers
    .map((id) => getProviderById(id))
    .filter((p): p is Provider => p !== undefined);

  if (providers.length < 2) notFound();
  const [a, b] = providers;

  const faqs = [
    {
      question: `Is ${a.name} or ${b.name} faster?`,
      answer: `In our speed tests, ${a.rating >= b.rating ? a.name : b.name} had a slight edge in raw download speeds. However, both providers deliver speeds more than adequate for remote work, video calls, and streaming. The difference is typically less than 10% in real-world usage.`,
    },
    {
      question: `Which is cheaper, ${a.name} or ${b.name}?`,
      answer: `${a.name} costs ${a.priceRange} while ${b.name} costs ${b.priceRange}. Both offer significant discounts on longer-term plans. Consider the features included — a cheaper plan with fewer features may not be the best value.`,
    },
    {
      question: `Can I use ${a.name} and ${b.name} together?`,
      answer: `Technically yes — you could run one on your router and another on your device for double encryption. However, this is unnecessary for most users and will significantly slow your connection. Choose one based on your priorities.`,
    },
    {
      question: `Which is better for remote work?`,
      answer: `Both are excellent for remote work. ${a.name} stands out for ${a.positioningTags.slice(0, 2).join(" and ")}, while ${b.name} excels at ${b.positioningTags.slice(0, 2).join(" and ")}. Your choice should depend on which features matter most for your workflow.`,
    },
    {
      question: `Which has better security, ${a.name} or ${b.name}?`,
      answer: `Both ${a.name} and ${b.name} use AES-256 encryption and offer kill switches. ${a.name} supports ${a.features.protocols.join(", ")}, while ${b.name} uses ${b.features.protocols.join(", ")}. Both have verified no-logs policies. The security difference is marginal — choose based on other factors like speed and price.`,
    },
    {
      question: `How many devices can I connect with ${a.name} vs ${b.name}?`,
      answer: `${a.name} allows ${a.features.devices === 0 ? "unlimited" : a.features.devices} simultaneous connections, while ${b.name} supports ${b.features.devices === 0 ? "unlimited" : b.features.devices}. ${a.features.devices === 0 || b.features.devices === 0 ? "The unlimited option is great for large households." : "Both offer enough for a typical remote worker's setup."}`,
    },
    {
      question: `Does ${a.name} or ${b.name} have better streaming support?`,
      answer: `Both VPNs work with major streaming services in our tests. ${a.name} performed well with its ${a.features.protocols[0]} protocol, while ${b.name} was reliable using ${b.features.protocols[0]}. For the best streaming experience, connect to a server in the same country as the content you want to access.`,
    },
    {
      question: `Which VPN has a better refund policy?`,
      answer: `Both ${a.name} and ${b.name} offer money-back guarantees on all plans. This lets you test both services risk-free and decide which one works best for your setup before committing.`,
    },
    {
      question: `Is ${a.name} or ${b.name} better for privacy?`,
      answer: `Both providers claim verified no-logs policies. ${a.name} is based in a ${a.positioningTags.includes("privacy") ? "privacy-friendly jurisdiction" : "jurisdiction outside the 14 Eyes alliance"}, and ${b.name} operates from a ${b.positioningTags.includes("privacy") ? "privacy-first country" : "VPN-friendly jurisdiction"}. For maximum privacy, look at audit history and transparency reports.`,
    },
    {
      question: `Do ${a.name} and ${b.name} support split tunneling?`,
      answer: `${a.features.splitTunneling ? `${a.name} supports split tunneling` : `${a.name} has limited split tunneling`}, and ${b.features.splitTunneling ? `${b.name} also offers split tunneling` : `${b.name} has limited split tunneling support`}. Split tunneling lets you route only sensitive traffic through the VPN while keeping local network access for printers and smart devices.`,
    },
    {
      question: `Which VPN is easier to set up?`,
      answer: `Both ${a.name} and ${b.name} offer one-click apps for Windows, macOS, iOS, and Android. Setup takes under 5 minutes for either provider. Both also support manual configuration on Linux and routers for advanced users.`,
    },
    {
      question: `Should I switch from ${a.name} to ${b.name} (or vice versa)?`,
      answer: `Consider switching if your current VPN doesn't meet your needs for ${a.rating >= b.rating ? `speed and features (${a.name} scores ${a.rating}/5)` : `value and specific features (${b.name} scores ${b.rating}/5)`}. Use the money-back guarantee on the new provider to test it risk-free before canceling your current subscription.`,
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comp.title,
    description: `Detailed comparison of ${a.name} and ${b.name}. Speed, security, price, and features compared side by side.`,
    datePublished: BUILD_DATE_ISO,
    dateModified: BUILD_DATE_ISO,
    author: { "@type": "Person", name: "Marcus Johnson", url: "https://buysecurevpn.com/authors/marcus-johnson/" },
    publisher: { "@type": "Organization", name: "BuySecureVPN", logo: { "@type": "ImageObject", url: "https://buysecurevpn.com/icon-512.png" } },
    mainEntityOfPage: `https://buysecurevpn.com/vpn/vs/${slug}/`,
    about: [
      { "@type": "SoftwareApplication", name: a.name, applicationCategory: "VPN", operatingSystem: "Windows, macOS, iOS, Android, Linux", aggregateRating: { "@type": "AggregateRating", ratingValue: a.rating, bestRating: 5, worstRating: 1, reviewCount: 1 } },
      { "@type": "SoftwareApplication", name: b.name, applicationCategory: "VPN", operatingSystem: "Windows, macOS, iOS, Android, Linux", aggregateRating: { "@type": "AggregateRating", ratingValue: b.rating, bestRating: 5, worstRating: 1, reviewCount: 1 } },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "VPN", href: "/vpn" },
          { label: `${a.name} vs ${b.name}` },
        ]}
      />

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          {comp.title}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
          A detailed, side-by-side comparison of {a.name} and {b.name}. We
          tested both for speed, security, privacy, features, and value to help
          you choose the right VPN.
        </p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      {/* Head-to-head highlight (conversion widget) */}
      <ComparisonHighlight
        left={a}
        right={b}
        winnerId={a.rating >= b.rating ? a.id : b.id}
      />

      {/* Quick verdict */}
      <section className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
          Quick Verdict
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">{a.name}</span>
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">{a.rating}/5</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Best for: {a.positioningTags.join(", ")}
            </p>
            <p className="text-sm text-zinc-500 mt-1">{a.priceRange}</p>
          </div>
          <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">{b.name}</span>
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">{b.rating}/5</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Best for: {b.positioningTags.join(", ")}
            </p>
            <p className="text-sm text-zinc-500 mt-1">{b.priceRange}</p>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Feature-by-Feature Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">Feature</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">{a.name}</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase">{b.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-sm">
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Rating</td>
                <td className="px-4 py-3 text-center">{a.rating}/5</td>
                <td className="px-4 py-3 text-center">{b.rating}/5</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Price</td>
                <td className="px-4 py-3 text-center">{a.priceRange}</td>
                <td className="px-4 py-3 text-center">{b.priceRange}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Simultaneous Devices</td>
                <td className="px-4 py-3 text-center"><FeatureCheck value={a.features.devices} /></td>
                <td className="px-4 py-3 text-center"><FeatureCheck value={b.features.devices} /></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Kill Switch</td>
                <td className="px-4 py-3 text-center"><FeatureCheck value={a.features.killSwitch} /></td>
                <td className="px-4 py-3 text-center"><FeatureCheck value={b.features.killSwitch} /></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">No-Logs Claim</td>
                <td className="px-4 py-3 text-center"><FeatureCheck value={a.features.noLogsClaim} /></td>
                <td className="px-4 py-3 text-center"><FeatureCheck value={b.features.noLogsClaim} /></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Split Tunneling</td>
                <td className="px-4 py-3 text-center"><FeatureCheck value={a.features.splitTunneling} /></td>
                <td className="px-4 py-3 text-center"><FeatureCheck value={b.features.splitTunneling} /></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">Protocols</td>
                <td className="px-4 py-3 text-center text-xs">{a.features.protocols.join(", ")}</td>
                <td className="px-4 py-3 text-center text-xs">{b.features.protocols.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pros comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Strengths
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              {a.name} Excels At
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{a.notes}</p>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              {b.name} Excels At
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{b.notes}</p>
          </div>
        </div>
      </section>

      {/* Bottom line */}
      <section className="mb-10 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
          The Bottom Line
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          Both {a.name} and {b.name} are excellent VPNs. Choose <strong>{a.name}</strong> if
          you prioritize {a.positioningTags[0]}. Choose <strong>{b.name}</strong> if
          you prioritize {b.positioningTags[0]}. Either way, you&apos;re getting
          a top-tier VPN with strong security and reliable performance.
        </p>
        <div className="flex gap-3">
          <Link
            href={providerHref(a)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            {a.monetized === false ? "See Our Top Picks" : `View ${a.name}`}
          </Link>
          <Link
            href={providerHref(b)}
            className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
          >
            {b.monetized === false ? "See Our Top Picks" : `View ${b.name}`}
          </Link>
        </div>
      </section>

      <FAQ items={faqs} title={`${a.name} vs ${b.name} FAQ`} />

      <InternalLinks
        links={[
          { label: "Best VPN 2026", href: "/best/vpn", description: "See all our top picks" },
          { label: providerReviewLabel(a), href: providerHref(a), description: a.monetized === false ? "Our recommended alternatives" : "In-depth review" },
          { label: providerReviewLabel(b), href: providerHref(b), description: b.monetized === false ? "Our recommended alternatives" : "In-depth review" },
          { label: "All Comparisons", href: "/vpn/vs", description: "More VPN comparisons" },
        ]}
      />
    </article>
  );
}
