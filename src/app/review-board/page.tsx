import type { Metadata } from "next";
import Link from "next/link";
import { getAllAuthors } from "@/lib/data";

export const metadata: Metadata = {
  title: "Review Board",
  description: "Meet SecureWork's editorial review board responsible for ensuring accuracy and quality.",
};

export default function ReviewBoardPage() {
  const authors = getAllAuthors();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Review Board</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        Our review board ensures all published content meets our standards for accuracy, fairness, and usefulness. Every security recommendation and VPN review is verified by at least one board member.
      </p>

      <div className="space-y-6 mb-12">
        {authors.map((author) => (
          <Link
            key={author.id}
            href={`/authors/${author.id}`}
            className="flex items-start gap-4 p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors block"
          >
            <div className="w-14 h-14 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center shrink-0">
              <span className="text-lg font-bold text-zinc-500">
                {author.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div>
              <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">{author.name}</h2>
              <p className="text-sm text-zinc-500 mb-1">{author.role}</p>
              {author.credentials.length > 0 && (
                <div className="flex gap-2 mb-2">
                  {author.credentials.map((c) => (
                    <span key={c} className="px-2 py-0.5 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded">
                      {c}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{author.bio.slice(0, 150)}...</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Review Process</h2>
        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
          <li><strong>Security content:</strong> Reviewed for technical accuracy, threat model assumptions, and tested device/OS versions.</li>
          <li><strong>VPN reviews:</strong> Verified against our testing methodology with documented test dates and conditions.</li>
          <li><strong>Country pages:</strong> Checked for accuracy of local internet context, legal information, and travel advice.</li>
          <li><strong>All content:</strong> Verified for factual accuracy, clear sourcing, and distinction between facts and opinions.</li>
        </ul>
      </div>
    </div>
  );
}
