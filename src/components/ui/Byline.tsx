import Link from "next/link";
import { getAuthorById } from "@/lib/data";

interface BylineProps {
  authorId: string;
  updatedAt: string;
}

export default function Byline({ authorId, updatedAt }: BylineProps) {
  const author = getAuthorById(authorId);
  if (!author) return null;

  const formattedDate = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex items-center gap-3 py-4 border-b border-zinc-200 dark:border-zinc-700 mb-6">
      <Link href={`/authors/${author.id}`} className="shrink-0 group/av">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={author.headshot}
          alt={`${author.name} — ${author.role}`}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-800 shadow-sm group-hover/av:scale-105 transition-transform"
          loading="lazy"
        />
      </Link>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Link
            href={`/authors/${author.id}`}
            className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {author.name}
          </Link>
          <span className="text-zinc-300 dark:text-zinc-600">&middot;</span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400 truncate">{author.role}</span>
        </div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 inline-flex items-center gap-1">
          <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Updated <time dateTime={updatedAt}>{formattedDate}</time>
        </div>
      </div>
    </div>
  );
}
