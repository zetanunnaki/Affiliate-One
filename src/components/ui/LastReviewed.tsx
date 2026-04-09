import Link from "next/link";
import { getAuthorById } from "@/lib/data";

interface LastReviewedProps {
  authorId: string;
  reviewedAt: string;
}

/**
 * E-E-A-T "Last reviewed" badge — sits at the top of guide content.
 *
 * Signals editorial oversight to both readers and search engines:
 *  - Visible "fact-checked" badge with reviewer name
 *  - Date of last editorial review
 *  - Linked author profile for credentials verification
 *  - Semantic <time> element for machine readability
 *
 * Used by Google's E-E-A-T (Experience, Expertise, Authoritativeness,
 * Trustworthiness) signals to evaluate YMYL content quality.
 */
export default function LastReviewed({ authorId, reviewedAt }: LastReviewedProps) {
  const author = getAuthorById(authorId);
  if (!author) return null;

  const formattedDate = new Date(reviewedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex items-center gap-3 px-4 py-3 mb-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50">
      <div className="shrink-0 w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
        <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold text-emerald-900 dark:text-emerald-100 leading-tight">
          Fact-checked by{" "}
          <Link
            href={`/authors/${author.id}`}
            className="underline decoration-emerald-300 dark:decoration-emerald-700 underline-offset-2 hover:decoration-emerald-600 dark:hover:decoration-emerald-400"
          >
            {author.name}
          </Link>
          {author.credentials.length > 0 && (
            <span className="ml-1.5 text-emerald-700 dark:text-emerald-300 font-normal">
              ({author.credentials.join(", ")})
            </span>
          )}
        </p>
        <p className="text-xs text-emerald-700/80 dark:text-emerald-300/80 leading-tight mt-0.5">
          Last reviewed{" "}
          <time dateTime={reviewedAt}>{formattedDate}</time>
          {" "}· See our{" "}
          <Link
            href="/editorial-policy"
            className="underline decoration-emerald-300/60 dark:decoration-emerald-700/60 underline-offset-2 hover:decoration-emerald-600 dark:hover:decoration-emerald-400"
          >
            editorial policy
          </Link>
        </p>
      </div>
    </div>
  );
}
