interface CalloutProps {
  type?: "info" | "warning" | "success" | "danger";
  title?: string;
  children: React.ReactNode;
}

const config = {
  info: {
    bg: "bg-gradient-to-r from-blue-50 to-blue-50/50 dark:from-blue-950/40 dark:to-blue-950/20",
    border: "border-blue-200/60 dark:border-blue-800/40",
    accent: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
    iconColor: "text-blue-600 dark:text-blue-400",
    titleColor: "text-blue-900 dark:text-blue-100",
    textColor: "text-blue-800/80 dark:text-blue-200/80",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  warning: {
    bg: "bg-gradient-to-r from-amber-50 to-amber-50/50 dark:from-amber-950/40 dark:to-amber-950/20",
    border: "border-amber-200/60 dark:border-amber-800/40",
    accent: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-100 dark:bg-amber-900/50",
    iconColor: "text-amber-600 dark:text-amber-400",
    titleColor: "text-amber-900 dark:text-amber-100",
    textColor: "text-amber-800/80 dark:text-amber-200/80",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  success: {
    bg: "bg-gradient-to-r from-emerald-50 to-emerald-50/50 dark:from-emerald-950/40 dark:to-emerald-950/20",
    border: "border-emerald-200/60 dark:border-emerald-800/40",
    accent: "from-emerald-500 to-green-500",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    titleColor: "text-emerald-900 dark:text-emerald-100",
    textColor: "text-emerald-800/80 dark:text-emerald-200/80",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  danger: {
    bg: "bg-gradient-to-r from-red-50 to-red-50/50 dark:from-red-950/40 dark:to-red-950/20",
    border: "border-red-200/60 dark:border-red-800/40",
    accent: "from-red-500 to-rose-500",
    iconBg: "bg-red-100 dark:bg-red-900/50",
    iconColor: "text-red-600 dark:text-red-400",
    titleColor: "text-red-900 dark:text-red-100",
    textColor: "text-red-800/80 dark:text-red-200/80",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
};

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const c = config[type];

  return (
    <div className={`relative ${c.bg} border ${c.border} rounded-2xl p-5 my-8 overflow-hidden`}>
      {/* Top gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.accent}`} />

      <div className="flex items-start gap-4">
        {/* Icon circle */}
        <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${c.iconBg} ${c.iconColor} shrink-0`}>
          {c.icon}
        </div>

        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`font-bold ${c.titleColor} mb-1.5`}>{title}</h4>
          )}
          <div className={`text-sm leading-relaxed ${c.textColor} [&>p]:mb-0`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
