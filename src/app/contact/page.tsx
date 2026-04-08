import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the BuySecureVPN team. Report errors, suggest topics, or ask questions.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Contact Us</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        Have a question, correction, or suggestion? We&apos;d love to hear from you.
      </p>

      <div className="space-y-6">
        <div className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Editorial Inquiries</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            For corrections, fact-checking concerns, or editorial feedback, email us at{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">editorial@buysecurevpn.com</span>
          </p>
        </div>

        <div className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">General Questions</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            For general questions or topic suggestions, email{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">hello@buysecurevpn.com</span>
          </p>
        </div>

        <div className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Business & Partnerships</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            For business inquiries, email{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">partnerships@buysecurevpn.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
