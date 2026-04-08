import Link from "next/link";
import type { Metadata } from "next";
import { getAllAuthors } from "@/lib/data";

export const metadata: Metadata = {
  title: "About SecureWork",
  description:
    "SecureWork provides independent, expert-tested security guides for remote workers. Learn about our team, mission, and editorial standards.",
};

export default function AboutPage() {
  const authors = getAllAuthors();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
        About SecureWork
      </h1>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
          SecureWork is an independent publication dedicated to helping remote
          workers stay secure online. We test VPNs, review security tools, and
          write practical guides based on real-world experience.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          Our Mission
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Remote work is the future, but it comes with unique security
          challenges. Our mission is to provide clear, accurate, and actionable
          security guidance to help remote workers protect their data, privacy,
          and productivity — no matter where they work from.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          Our Team
        </h2>
        <div className="space-y-4 mb-8">
          {authors.map((author) => (
            <Link
              key={author.id}
              href={`/authors/${author.id}`}
              className="flex items-start gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors no-underline"
            >
              <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-zinc-500">
                  {author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {author.name}
                </h3>
                <p className="text-sm text-zinc-500">{author.role}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {author.bio.slice(0, 120)}...
                </p>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8 mb-4">
          How We Work
        </h2>
        <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
          <li>
            <strong>Independent testing:</strong> We purchase and test every
            product we review using our own methodology.
          </li>
          <li>
            <strong>No pay-for-play:</strong> Providers cannot pay for a higher
            rating or favorable review.
          </li>
          <li>
            <strong>Regular updates:</strong> We re-test products quarterly and
            update our recommendations.
          </li>
          <li>
            <strong>Transparent methodology:</strong> Our testing criteria and
            process are published openly.
          </li>
        </ul>

        <div className="mt-8 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Questions about our editorial process?{" "}
            <Link
              href="/editorial-policy"
              className="text-blue-600 hover:text-blue-700"
            >
              Read our Editorial Policy
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
