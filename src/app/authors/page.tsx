import Link from "next/link";
import type { Metadata } from "next";
import { getAllAuthors } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Authors — Security Experts & Analysts",
  description: "Meet the team behind BuySecureVPN. Certified security professionals who test, review, and write our guides.",
};

export default function AuthorsPage() {
  const authors = getAllAuthors();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Our Authors
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Every guide, review, and recommendation is written by a certified
          security professional with hands-on experience. Meet the team.
        </p>
      </header>

      <div className="space-y-6">
        {authors.map((author) => (
          <Link
            key={author.id}
            href={`/authors/${author.id}`}
            className="flex items-start gap-5 p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
          >
            <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center shrink-0">
              <span className="text-xl font-bold text-zinc-500 dark:text-zinc-400">
                {author.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600">
                {author.name}
              </h2>
              <p className="text-sm text-zinc-500 mb-2">{author.role}{author.location ? ` — ${author.location}` : ""}</p>
              {author.credentials.length > 0 && (
                <div className="flex gap-2 mb-2">
                  {author.credentials.map((c) => (
                    <span key={c} className="px-2 py-0.5 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded">
                      {c}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {author.bio}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
