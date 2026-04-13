interface KeyTakeawaysProps {
  /** 3-5 short bullet points summarizing the article */
  points: string[];
  /** Optional heading override */
  heading?: string;
}

/**
 * Premium "Key Takeaways" summary box shown at the top of long guides.
 *
 * Editorial publishing convention — readers skim the takeaways first,
 * decide if they want to read the full article. Also feeds snippet-style
 * results on Google (Featured Snippets, PAA boxes).
 *
 * Design: gradient card with lightning-bolt icon, brand-colored accent
 * bar, numbered bullets with check icons.
 */
export default function KeyTakeaways({
  points,
  heading = "Key Takeaways",
}: KeyTakeawaysProps) {
  if (!points || points.length === 0) return null;

  return (
    <aside className="relative overflow-hidden rounded-2xl my-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 dark:from-blue-950/30 dark:via-slate-900 dark:to-indigo-950/20 border border-blue-200/60 dark:border-blue-900/40 shadow-sm">
      {/* Top gradient accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/30">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
            </svg>
          </div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-700 dark:text-blue-300">
            {heading}
          </h2>
        </div>

        <ul className="space-y-3">
          {points.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[15px] leading-snug text-slate-800 dark:text-slate-200"
            >
              <span className="shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[11px] font-black mt-0.5">
                {i + 1}
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
