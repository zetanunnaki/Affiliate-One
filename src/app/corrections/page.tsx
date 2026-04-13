import type { Metadata } from "next";
import Link from "next/link";
import LegalPageHero from "@/components/layouts/LegalPageHero";

export const metadata: Metadata = {
  title: "Corrections Policy",
  description: "How BuySecureVPN handles errors and corrections in published content.",
};

export default function CorrectionsPage() {
  return (
    <div>
      <LegalPageHero
        eyebrow="Accuracy"
        title="Corrections Policy"
        description="How we handle errors and corrections in published content — transparently and promptly."
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Last updated: April 7, 2026
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight">
          <p>
            We strive for accuracy in all our content. When we make a mistake, we
            correct it transparently and promptly.
          </p>

          <h2>How We Handle Corrections</h2>
          <ul>
            <li><strong>Minor corrections</strong> (typos, broken links) are fixed immediately without notation.</li>
            <li><strong>Factual corrections</strong> are noted at the top of the article with the correction date and what was changed.</li>
            <li><strong>Significant corrections</strong> that affect a recommendation or rating include a detailed note explaining the change.</li>
          </ul>

          <h2>Report an Error</h2>
          <p>
            If you believe we have published inaccurate information, please{" "}
            <Link href="/contact">contact us</Link> with details. Include the
            article URL, the specific claim you believe is incorrect, and any
            supporting evidence.
          </p>
        </div>
      </article>
    </div>
  );
}
