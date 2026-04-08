"use client";

import { useState } from "react";

interface FeedbackWidgetProps {
  pageId: string;
}

export default function FeedbackWidget({ pageId }: FeedbackWidgetProps) {
  const [state, setState] = useState<"idle" | "yes" | "no" | "thanks">("idle");

  function handleFeedback(helpful: boolean) {
    setState(helpful ? "yes" : "no");
    if (typeof window !== "undefined" && "dataLayer" in window) {
      (window as Record<string, unknown[]>).dataLayer?.push({
        event: "article_feedback",
        pageId,
        helpful,
      });
    }
    setTimeout(() => setState("thanks"), 400);
  }

  if (state === "thanks") {
    return (
      <div className="flex items-center justify-center gap-2 py-5 px-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-sm text-green-700 dark:text-green-300">
        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Thanks for the feedback! It helps us improve.
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 px-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50/50 dark:bg-zinc-800/30">
      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
        Was this guide helpful?
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handleFeedback(true)}
          className={`flex items-center gap-1.5 px-4 py-2 text-sm rounded-xl transition-all duration-200 ${
            state === "yes"
              ? "bg-green-500 text-white scale-105"
              : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-green-300 dark:hover:border-green-700 hover:bg-green-50 dark:hover:bg-green-900/20"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          Yes
        </button>
        <button
          onClick={() => handleFeedback(false)}
          className={`flex items-center gap-1.5 px-4 py-2 text-sm rounded-xl transition-all duration-200 ${
            state === "no"
              ? "bg-red-500 text-white scale-105"
              : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-red-300 dark:hover:border-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
          }`}
        >
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          No
        </button>
      </div>
    </div>
  );
}
