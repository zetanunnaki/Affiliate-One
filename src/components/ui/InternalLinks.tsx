import Link from "next/link";

interface InternalLinksProps {
  links: { label: string; href: string; description?: string }[];
  title?: string;
}

export default function InternalLinks({
  links,
  title = "Related Guides",
}: InternalLinksProps) {
  return (
    <section className="my-8 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white dark:hover:bg-zinc-700/50 transition-colors group"
          >
            <span className="mt-0.5 text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
              &rarr;
            </span>
            <div>
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {link.label}
              </span>
              {link.description && (
                <p className="text-xs text-zinc-500 mt-0.5">
                  {link.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
