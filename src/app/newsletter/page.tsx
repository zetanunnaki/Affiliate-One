import type { Metadata } from "next";
import Newsletter from "@/components/ui/Newsletter";

export const metadata: Metadata = {
  title: "Newsletter — Weekly Security Digest",
  description: "Get the latest remote work security tips, VPN deals, and threat alerts delivered to your inbox every Tuesday.",
};

export default function NewsletterPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Weekly Security Digest
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Join thousands of remote workers who get our weekly security briefing.
          Practical tips, VPN deals, and threat alerts — no spam, no fluff.
        </p>
      </div>

      <Newsletter source="newsletter-page" />

      <div className="mt-12 space-y-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">What you get</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Security Tips", desc: "Actionable advice you can implement in 5 minutes or less" },
            { title: "Threat Alerts", desc: "New vulnerabilities and scams targeting remote workers" },
            { title: "Tool Deals", desc: "VPN and security tool discounts and promotions" },
          ].map((item) => (
            <div key={item.title} className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-sm text-zinc-500 space-y-1">
          <p>Delivered every Tuesday morning (your time zone).</p>
          <p>Unsubscribe anytime with one click. We never share your email.</p>
        </div>
      </div>
    </div>
  );
}
