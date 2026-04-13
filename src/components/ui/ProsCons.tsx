interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-5 my-8">
      {/* Pros */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/30 dark:to-slate-900/40 border border-emerald-200/70 dark:border-emerald-900/40 p-5">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500" />
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/30">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
            Pros
          </h4>
        </div>
        <ul className="space-y-2.5">
          {pros.map((p, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/30 dark:to-slate-900/40 border border-rose-200/70 dark:border-rose-900/40 p-5">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-400 to-red-500" />
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center text-white shadow-md shadow-rose-500/30">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-rose-900 dark:text-rose-200">
            Cons
          </h4>
        </div>
        <ul className="space-y-2.5">
          {cons.map((c, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
