interface MethodologyProps {
  countryName?: string;
}

const steps = [
  {
    title: "Speed Testing",
    desc: "We test download/upload speeds and latency from multiple server locations worldwide.",
    gradient: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Security Audit",
    desc: "We verify kill switch functionality, DNS leak protection, and encryption standards across platforms.",
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Privacy Verification",
    desc: "We review privacy policies, no-logs claims, third-party audits, and jurisdiction implications.",
    gradient: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Real-World Usage",
    desc: "We test app usability, customer support responsiveness, and reliability over extended periods.",
    gradient: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function Methodology({ countryName }: MethodologyProps) {
  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/25">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
            Our methodology
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How We Tested{countryName ? ` for ${countryName}` : ""}
          </h2>
        </div>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
        Our testing methodology ensures every recommendation is backed by
        real-world data. Here&apos;s how we evaluate VPN providers
        {countryName ? ` for use in ${countryName}` : ""}:
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {steps.map((step) => (
          <div
            key={step.title}
            className="relative overflow-hidden p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-md transition-all"
          >
            <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${step.gradient}`} />
            <div className="flex items-start gap-3">
              <div className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-lg ${step.iconBg} ${step.iconColor}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-500 dark:text-slate-500 mt-5 italic">
        Last methodology review: April 2026. Devices tested: Windows 11, macOS
        Sequoia, iOS 19, Android 16.
      </p>
    </section>
  );
}
