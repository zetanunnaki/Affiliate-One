interface LastUpdatedBannerProps {
  date: string;
  note?: string;
}

export default function LastUpdatedBanner({ date, note }: LastUpdatedBannerProps) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-sm mb-6">
      <svg className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-green-800 dark:text-green-200">
        <strong>Updated:</strong> <time dateTime={date}>{formatted}</time>
        {note && <span className="text-green-600 dark:text-green-400"> — {note}</span>}
      </span>
    </div>
  );
}
