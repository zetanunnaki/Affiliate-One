interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 my-6">
      <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
        <h4 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">Pros</h4>
        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          {pros.map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-0.5 shrink-0">+</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg">
        <h4 className="text-sm font-semibold text-red-800 dark:text-red-300 mb-2">Cons</h4>
        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          {cons.map((c, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-red-500 dark:text-red-400 mt-0.5 shrink-0">-</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
