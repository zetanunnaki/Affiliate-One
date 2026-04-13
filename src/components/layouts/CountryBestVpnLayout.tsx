import type { Country, Provider, FAQItem } from "@/types";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProviderCard from "@/components/ui/ProviderCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import CountryContextBlock from "@/components/ui/CountryContextBlock";
import Methodology from "@/components/ui/Methodology";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import CountryPageTracker from "@/components/ui/CountryPageTracker";
import NearbyCountries from "@/components/ui/NearbyCountries";
import { getAllCountries } from "@/lib/data";
import SaveToPinterest from "@/components/ui/SaveToPinterest";

// Slugs that have a generated hero image in /public/images/countries/
const COUNTRIES_WITH_HERO = new Set([
  "united-states", "united-kingdom", "germany", "france", "japan",
  "australia", "canada", "brazil", "india", "mexico", "spain", "italy",
  "netherlands", "sweden", "singapore", "south-korea", "switzerland",
  "poland", "turkey", "argentina",
]);

interface CountryBestVpnLayoutProps {
  country: Country;
  providers: {
    overall: Provider;
    budget: Provider;
    privacy: Provider;
  };
  faqs: FAQItem[];
  allProviders: Provider[];
  editorialContent?: React.ReactNode;
}

export default function CountryBestVpnLayout({
  country,
  providers,
  faqs,
  allProviders,
  editorialContent,
}: CountryBestVpnLayoutProps) {
  const comparisonRows = allProviders.slice(0, 5).map((provider) => ({
    provider,
    bestFor: provider.positioningTags.slice(0, 2).join(", "),
    keyFeatures: [
      provider.features.noLogsClaim && "No-logs",
      provider.features.killSwitch && "Kill switch",
      `${provider.features.devices === 0 ? "Unlimited" : provider.features.devices} devices`,
    ]
      .filter(Boolean)
      .join(", "),
    countryNotes: `Works well in ${country.nameEn}. ${
      country.riskFlags.includes("censorship")
        ? "Tested against local restrictions."
        : "No known restrictions."
    }`,
  }));

  // Structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best VPN for ${country.nameEn} (2026): Remote Work Security & Privacy`,
    description: `Compare the top VPN services for ${country.nameEn}. Expert-tested recommendations for remote work, travel, and online privacy in ${country.nameEn}.`,
    dateModified: "2026-04-07",
    author: {
      "@type": "Person",
      name: "Marcus Johnson",
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <CountryPageTracker countryIso2={country.iso2} countryName={country.nameEn} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Countries", href: "/countries" },
          { label: country.nameEn },
        ]}
      />

      {/* Country hero image (only if we have one generated) */}
      {COUNTRIES_WITH_HERO.has(country.slug) && (
        <div className="relative group mb-10 -mx-4 sm:-mx-6 lg:-mx-8 sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/countries/${country.slug}.webp`}
            alt={`${country.nameEn} — VPN guide hero image`}
            className="w-full h-auto object-cover aspect-[16/9]"
            loading="eager"
          />
          <SaveToPinterest
            imageSrc={`/images/countries/${country.slug}.webp`}
            pageUrl={`https://buysecurevpn.com/vpn/best/${country.slug}/`}
            description={`Best VPN for ${country.nameEn} (2026)`}
          />
          {/* Bottom gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

          {/* Floating info card */}
          <div className="absolute inset-x-4 sm:inset-x-8 bottom-4 sm:bottom-8 flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20 flex items-center justify-center overflow-hidden p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://flagcdn.com/w80/${country.iso2.toLowerCase()}.png`}
                  alt={`${country.nameEn} flag`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-blue-200/90 mb-1">
                  Best VPN Guide
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                  {country.nameEn}
                </h2>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20 text-center">
                <div className="text-[9px] font-semibold uppercase tracking-wider text-blue-200/80 mb-0.5">Region</div>
                <div className="text-xs font-bold text-white">{country.region}</div>
              </div>
              {!country.riskFlags.includes("censorship") && (
                <div className="px-3 py-2 rounded-xl bg-emerald-500/20 backdrop-blur-xl ring-1 ring-emerald-400/30 text-center">
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-emerald-200 mb-0.5">VPN Status</div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Legal
                  </div>
                </div>
              )}
              {country.riskFlags.includes("censorship") && (
                <div className="px-3 py-2 rounded-xl bg-amber-500/20 backdrop-blur-xl ring-1 ring-amber-400/30 text-center">
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-amber-200 mb-0.5">VPN Status</div>
                  <div className="text-xs font-bold text-white">Restricted</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Section 1: Above-the-fold summary */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Best VPN for {country.nameEn} (2026): Remote Work Security & Privacy
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
          Looking for a reliable VPN in {country.nameEn}? We tested the top
          providers for speed, security, and reliability
          {country.riskFlags.includes("censorship")
            ? " — including their ability to bypass local internet restrictions"
            : ""}
          . Here are our top picks for remote workers, travelers, and
          privacy-conscious users in {country.nameEn}.
        </p>
        <Byline authorId="marcus-johnson" updatedAt="2026-04-07" />
      </header>

      {/* Section 2: Quick picks */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Our Top 3 Picks for {country.nameEn}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <ProviderCard
            provider={providers.overall}
            badge="Best Overall"
            countryNotes={`Top choice for ${country.nameEn} — reliable servers and fast speeds in the ${country.region} region.`}
            countrySlug={country.slug}
          />
          <ProviderCard
            provider={providers.budget}
            badge="Best Budget"
            countryNotes={`Affordable option for ${country.nameEn} with ${providers.budget.features.devices === 0 ? "unlimited" : providers.budget.features.devices} simultaneous connections.`}
            countrySlug={country.slug}
          />
          <ProviderCard
            provider={providers.privacy}
            badge="Best for Privacy"
            countryNotes={`Swiss-based, open-source, and audited — the privacy-first choice for users in ${country.nameEn}.`}
            countrySlug={country.slug}
          />
        </div>
      </section>

      {/* Section 3: Comparison table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          VPN Comparison for {country.nameEn}
        </h2>
        <ComparisonTable rows={comparisonRows} countryName={country.nameEn} countrySlug={country.slug} />
      </section>

      {/* Section 3.5: Editorial content (if available) */}
      {editorialContent && (
        <section className="mb-10 prose prose-zinc dark:prose-invert max-w-none">
          {editorialContent}
        </section>
      )}

      {/* Section 4: Country context */}
      <CountryContextBlock country={country} />

      {/* Section 5: Methodology */}
      <Methodology countryName={country.nameEn} />

      {/* Section 6: Provider mini-reviews */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Detailed Provider Reviews for {country.nameEn}
        </h2>
        {allProviders.slice(0, 3).map((provider) => (
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
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              {provider.notes}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                  Pros
                </h4>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                  {provider.features.noLogsClaim && (
                    <li>+ Verified no-logs policy</li>
                  )}
                  {provider.features.killSwitch && (
                    <li>+ Automatic kill switch</li>
                  )}
                  <li>
                    + {provider.features.protocols.slice(0, 2).join(" & ")}{" "}
                    protocols
                  </li>
                  <li>
                    +{" "}
                    {provider.features.devices === 0
                      ? "Unlimited"
                      : provider.features.devices}{" "}
                    simultaneous connections
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                  Who It&apos;s For
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Best for users in {country.nameEn} who prioritize{" "}
                  {provider.positioningTags.slice(0, 2).join(" and ")}. Price
                  range: {provider.priceRange}.
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Section 7: FAQ */}
      <FAQ
        items={faqs}
        title={`VPN FAQ for ${country.nameEn}`}
      />

      {/* Section 8: VPN by use case for this country */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          VPN for {country.nameEn} by Use Case
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { label: "Remote Work", slug: "remote-work" },
            { label: "Travel", slug: "travel" },
            { label: "Privacy", slug: "privacy" },
            { label: "Streaming", slug: "streaming" },
            { label: "Teams & Business", slug: "teams" },
          ].map((intent) => (
            <a
              key={intent.slug}
              href={`/vpn/best/${country.slug}/${intent.slug}`}
              className="p-3 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all font-medium text-zinc-900 dark:text-zinc-100"
            >
              Best VPN for {intent.label} in {country.nameEn}
            </a>
          ))}
        </div>
      </section>

      {/* Section 9: Internal links */}
      <InternalLinks
        title={`More Security Resources for ${country.nameEn}`}
        links={[
          {
            label: `Public Wi-Fi Safety in ${country.nameEn}`,
            href: "/security/public-wifi",
            description: "Protect yourself on shared networks",
          },
          {
            label: "Two-Factor Authentication Guide",
            href: "/security/2fa",
            description: "Add an extra layer of security to your accounts",
          },
          {
            label: "All VPN Provider Reviews",
            href: "/vpn/providers",
            description: "In-depth reviews of every provider we test",
          },
          {
            label: "Country VPN Directory",
            href: "/countries",
            description: `See VPN guides for all ${country.region} countries`,
          },
        ]}
      />

      {/* Nearby countries */}
      <NearbyCountries current={country} allCountries={getAllCountries()} />
    </article>
  );
}
