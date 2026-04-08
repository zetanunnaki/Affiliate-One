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
      <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center">
        <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
          {author.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </div>
      <div>
        <Link
          href={`/authors/${author.id}`}
          className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-blue-600"
        >
          {author.name}
        </Link>
        <span className="text-zinc-400 mx-1">&middot;</span>
        <span className="text-sm text-zinc-500">{author.role}</span>
        <div className="text-xs text-zinc-500">
          Updated <time dateTime={updatedAt}>{formattedDate}</time>
        </div>
      </div>
    </div>
  );
}
