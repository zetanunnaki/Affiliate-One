import Link from "next/link";
import Image from "next/image";
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
      <Image
        src={author.headshot}
        alt={`${author.name} — ${author.role}`}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full"
        unoptimized
      />
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
