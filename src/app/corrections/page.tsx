import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corrections Policy",
  description: "How SecureWork handles errors and corrections in published content.",
};

export default function CorrectionsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Corrections Policy</h1>
      <p className="text-sm text-zinc-500 mb-8">Last updated: April 7, 2026</p>
      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>We strive for accuracy in all our content. When we make a mistake, we correct it transparently and promptly.</p>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How We Handle Corrections</h2>
        <ul>
          <li><strong>Minor corrections</strong> (typos, broken links) are fixed immediately without notation.</li>
          <li><strong>Factual corrections</strong> are noted at the top of the article with the correction date and what was changed.</li>
          <li><strong>Significant corrections</strong> that affect a recommendation or rating include a detailed note explaining the change.</li>
        </ul>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Report an Error</h2>
        <p>If you believe we have published inaccurate information, please <a href="/contact" className="text-blue-600 hover:text-blue-700">contact us</a> with details. Include the article URL, the specific claim you believe is incorrect, and any supporting evidence.</p>
      </div>
    </div>
  );
}
