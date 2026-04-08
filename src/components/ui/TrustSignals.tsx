interface TrustSignalsProps {
  provider: {
    name: string;
    features: {
      noLogsClaim: boolean;
      killSwitch: boolean;
    };
    rating: number;
  };
}

export default function TrustSignals({ provider }: TrustSignalsProps) {
  const signals = [
    provider.features.noLogsClaim && "Audited No-Logs",
    provider.features.killSwitch && "Kill Switch",
    provider.rating >= 4.5 && "Top Rated",
    "30-Day Guarantee",
    "24/7 Support",
  ].filter(Boolean);

  return (
    <div className="flex flex-wrap gap-2 my-3">
      {signals.map((signal) => (
        <span
          key={signal as string}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
          {signal}
        </span>
      ))}
    </div>
  );
}
