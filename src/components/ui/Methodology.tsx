interface MethodologyProps {
  countryName?: string;
}

export default function Methodology({ countryName }: MethodologyProps) {
  return (
    <section className="my-8 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
        How We Tested{countryName ? ` for ${countryName}` : ""}
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Our testing methodology ensures every recommendation is backed by
        real-world data. Here&apos;s how we evaluate VPN providers
        {countryName ? ` for use in ${countryName}` : ""}:
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
            Speed Testing
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            We test download/upload speeds and latency from multiple server
            locations
            {countryName
              ? `, including servers in or near ${countryName}`
              : ""}
            .
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
            Security Audit
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            We verify kill switch functionality, DNS leak protection, and
            encryption standards across platforms.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
            Privacy Verification
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            We review privacy policies, no-logs claims, third-party audits, and
            jurisdiction implications.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
            Real-World Usage
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            We test app usability, customer support responsiveness, and
            reliability over extended periods.
          </p>
        </div>
      </div>
      <p className="text-xs text-zinc-500 mt-4">
        Last methodology review: April 2026. Devices tested: Windows 11, macOS
        Sequoia, iOS 19, Android 16.
      </p>
    </section>
  );
}
