import Link from "next/link";
import { getAuthorById } from "@/lib/data";

interface AuthorCardProps {
  authorId: string;
  updatedAt: string;
  readingMinutes?: number;
}

/**
 * Inline author card at the top of articles — E-E-A-T power move.
 *
 * Shows headshot, name, role, credentials, and quick metadata. Much more
 * trust-inspiring than a one-line byline. Used alongside LastReviewed badge.
 */
export default function AuthorCard({ authorId, updatedAt, readingMinutes }: AuthorCardProps) {
  const author = getAuthorById(authorId);
  if (!author) return null;

  const formattedDate = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="group relative overflow-hidden p-5 mb-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/50 border border-slate-200/80 dark:border-slate-800">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="flex items-start gap-4">
        <Link href={`/authors/${author.id}`} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={author.headshot}
            alt={`${author.name} — ${author.role}`}
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-white dark:ring-slate-800 shadow-md group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
            <Link
              href={`/authors/${author.id}`}
              className="font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {author.name}
            </Link>
            {author.credentials.length > 0 && (
              <span className="flex flex-wrap gap-1">
                {author.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                  >
                    {cred}
                  </span>
                ))}
              </span>
            )}
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            {author.role}
            {author.location ? ` · ${author.location}` : ""}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Updated <time dateTime={updatedAt}>{formattedDate}</time>
            </span>
            {readingMinutes && (
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingMinutes} min read
              </span>
            )}
            <Link
              href="/editorial-policy"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Editorial policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
