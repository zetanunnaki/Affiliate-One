import Link from "next/link";

interface LinkCardProps {
  href: string;
  title: string;
  description: string;
  badge?: string;
}

export default function LinkCard({ href, title, description, badge }: LinkCardProps) {
  return (
    <Link
      href={href}
      className="block p-4 my-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group not-prose"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600">
            {title}
          </span>
          <p className="text-sm text-zinc-500 mt-1">{description}</p>
        </div>
        {badge && (
          <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 rounded shrink-0">
            {badge}
          </span>
        )}
      </div>
    </Link>
  );
}
