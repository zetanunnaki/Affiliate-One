import type { Country } from "@/types";
import AutoLinkedText from "@/components/ui/AutoLinkedText";

interface CountryContextBlockProps {
  country: Country;
}

const riskFlagLabels: Record<string, { label: string; bg: string; text: string; ring: string }> = {
  censorship: { label: "Internet Censorship", bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", ring: "ring-rose-200 dark:ring-rose-800/50" },
  "high-fraud": { label: "High Fraud Risk", bg: "bg-orange-50 dark:bg-orange-900/20", text: "text-orange-700 dark:text-orange-300", ring: "ring-orange-200 dark:ring-orange-800/50" },
  "restricted-platforms": { label: "Platform Restrictions", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", ring: "ring-amber-200 dark:ring-amber-800/50" },
  "tourist-wifi": { label: "Tourist Wi-Fi Risk", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", ring: "ring-blue-200 dark:ring-blue-800/50" },
};

const sectionConfig = [
  {
    key: "internet" as const,
    title: "Internet Infrastructure",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
  },
  {
    key: "vpn" as const,
    title: "VPN Usage & Regulations",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    key: "payment" as const,
    title: "Payment Methods",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    key: "travel" as const,
    title: "Travel & Connectivity",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function CountryContextBlock({ country }: CountryContextBlockProps) {
  const currentPageHref = `/vpn/best/${country.slug}`;

  const sectionContent: Record<"internet" | "vpn" | "payment" | "travel", React.ReactNode> = {
    internet: (
      <AutoLinkedText excludeHrefs={[currentPageHref]} maxLinks={2}>
        {country.internetNotes}
      </AutoLinkedText>
    ),
    vpn: (
      <AutoLinkedText excludeHrefs={[currentPageHref]} maxLinks={2}>
        {country.vpnNotes}
      </AutoLinkedText>
    ),
    payment: country.paymentNotes,
    travel: (
      <AutoLinkedText excludeHrefs={[currentPageHref]} maxLinks={2}>
        {country.travelNotes}
      </AutoLinkedText>
    ),
  };

  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/25">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
            Local context
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Internet &amp; VPN Landscape in {country.nameEn}
          </h2>
        </div>
      </div>

      {/* Risk flags */}
      {country.riskFlags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {country.riskFlags.map((flag) => {
            const info = riskFlagLabels[flag];
            if (!info) {
              return (
                <span key={flag} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200">
                  {flag}
                </span>
              );
            }
            return (
              <span
                key={flag}
                className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ring-1 ${info.bg} ${info.text} ${info.ring}`}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {info.label}
              </span>
            );
          })}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {sectionConfig.map((s) => (
          <div
            key={s.key}
            className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-lg ${s.iconBg} ${s.iconColor}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {sectionContent[s.key]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Facts strip */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Region", value: country.region },
          { label: "Currency", value: country.currencyCode },
          { label: "Languages", value: country.languages.slice(0, 2).join(", ") },
          { label: "Time Zone", value: country.timeZonePrimary },
        ].map((fact) => (
          <div
            key={fact.label}
            className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/60 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/40"
          >
            <div className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-0.5">
              {fact.label}
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
              {fact.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
