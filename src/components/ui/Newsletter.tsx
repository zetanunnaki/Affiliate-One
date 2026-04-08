"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

interface NewsletterProps {
  source?: string;
}

export default function Newsletter({ source = "inline" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    // Track the signup event
    trackEvent({ name: "newsletter_signup", params: { source } });

    // In production, this would POST to your email provider's API
    setStatus("success");
    setEmail("");
  }

  return (
    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
        Weekly Security Digest
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Get the latest remote work security tips, VPN deals, and threat
        alerts delivered to your inbox every Tuesday.
      </p>

      {status === "success" ? (
        <p className="text-sm font-medium text-green-700 dark:text-green-400">
          Thanks for subscribing! Check your inbox to confirm.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="flex-1 px-3 py-2 text-sm border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shrink-0"
          >
            Subscribe
          </button>
        </form>
      )}
      <p className="text-xs text-zinc-500 mt-2">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
