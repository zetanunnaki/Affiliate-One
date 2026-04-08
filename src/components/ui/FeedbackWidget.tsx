"use client";

import { useState } from "react";

interface FeedbackWidgetProps {
  pageId: string;
}

export default function FeedbackWidget({ pageId }: FeedbackWidgetProps) {
  const [state, setState] = useState<"idle" | "yes" | "no" | "thanks">("idle");

  function handleFeedback(helpful: boolean) {
    setState(helpful ? "yes" : "no");
    // In production, send to analytics
    if (typeof window !== "undefined" && "dataLayer" in window) {
      (window as Record<string, unknown[]>).dataLayer?.push({
        event: "article_feedback",
        pageId,
        helpful,
      });
    }
    setTimeout(() => setState("thanks"), 300);
  }

  if (state === "thanks") {
    return (
      <div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center text-sm text-green-800 dark:text-green-200">
        Thanks for your feedback! It helps us improve our guides.
      </div>
    );
  }

  return (
    <div className="my-6 p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg text-center">
      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">
        Was this guide helpful?
      </p>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => handleFeedback(true)}
          className={`px-4 py-2 text-sm rounded-lg transition-colors ${
            state === "yes"
              ? "bg-green-600 text-white"
              : "border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-green-50 dark:hover:bg-green-900/20"
          }`}
        >
          Yes, helpful
        </button>
        <button
          onClick={() => handleFeedback(false)}
          className={`px-4 py-2 text-sm rounded-lg transition-colors ${
            state === "no"
              ? "bg-red-600 text-white"
              : "border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-red-50 dark:hover:bg-red-900/20"
          }`}
        >
          Not really
        </button>
      </div>
    </div>
  );
}
