import type { Country } from "@/types";
import AutoLinkedText from "@/components/ui/AutoLinkedText";

interface CountryContextBlockProps {
  country: Country;
}

const riskFlagLabels: Record<string, { label: string; color: string }> = {
  censorship: { label: "Internet Censorship", color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
  "high-fraud": { label: "High Fraud Risk", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" },
  "restricted-platforms": { label: "Platform Restrictions", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
  "tourist-wifi": { label: "Tourist Wi-Fi Risk", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
};

export default function CountryContextBlock({ country }: CountryContextBlockProps) {
  const currentPageHref = `/vpn/best/${country.slug}`;

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        Internet & VPN Landscape in {country.nameEn}
      </h2>

      {/* Risk flags */}
      {country.riskFlags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {country.riskFlags.map((flag) => {
            const info = riskFlagLabels[flag];
            return (
              <span
                key={flag}
                className={`px-3 py-1 text-xs font-medium rounded-full ${info?.color ?? "bg-zinc-100 text-zinc-800"}`}
              >
                {info?.label ?? flag}
              </span>
            );
          })}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Internet Infrastructure
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <AutoLinkedText excludeHrefs={[currentPageHref]} maxLinks={2}>
              {country.internetNotes}
            </AutoLinkedText>
          </p>
        </div>
        <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            VPN Usage & Regulations
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <AutoLinkedText excludeHrefs={[currentPageHref]} maxLinks={2}>
              {country.vpnNotes}
            </AutoLinkedText>
          </p>
        </div>
        <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Payment Methods
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {country.paymentNotes}
          </p>
        </div>
        <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Travel & Connectivity
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <AutoLinkedText excludeHrefs={[currentPageHref]} maxLinks={2}>
              {country.travelNotes}
            </AutoLinkedText>
          </p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Region:</strong> {country.region} &middot;{" "}
          <strong>Currency:</strong> {country.currencyCode} &middot;{" "}
          <strong>Languages:</strong> {country.languages.join(", ")} &middot;{" "}
          <strong>Time Zone:</strong> {country.timeZonePrimary}
        </p>
      </div>
    </section>
  );
}
