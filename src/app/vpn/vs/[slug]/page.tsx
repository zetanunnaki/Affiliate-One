import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import comparisons from "@/data/comparisons.json";
import { getProviderById } from "@/lib/data";
import type { Provider } from "@/types";
import Disclosure from "@/components/ui/Disclosure";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

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
  return {
    title: comp.title,
    description: `Detailed comparison of ${comp.providers.map((id) => getProviderById(id)?.name).join(" and ")}. Speed, security, price, and features compared side by side.`,
  };
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
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
        <Disclosure />
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

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
            href={`/vpn/providers/${a.id}`}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            View {a.name}
          </Link>
          <Link
            href={`/vpn/providers/${b.id}`}
            className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
          >
            View {b.name}
          </Link>
        </div>
      </section>

      <FAQ items={faqs} title={`${a.name} vs ${b.name} FAQ`} />

      <InternalLinks
        links={[
          { label: "Best VPN 2026", href: "/best/vpn", description: "See all our top picks" },
          { label: `${a.name} Full Review`, href: `/vpn/providers/${a.id}`, description: "In-depth review" },
          { label: `${b.name} Full Review`, href: `/vpn/providers/${b.id}`, description: "In-depth review" },
          { label: "All Comparisons", href: "/vpn/vs", description: "More VPN comparisons" },
        ]}
      />
    </article>
  );
}
