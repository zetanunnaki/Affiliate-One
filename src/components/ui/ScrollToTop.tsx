"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollTop > 400);
      if (docHeight > 0) {
        setProgress(Math.min(100, Math.round((scrollTop / docHeight) * 100)));
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 group transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="relative w-12 h-12">
        {/* Circular progress ring */}
        <svg className="absolute inset-0 w-12 h-12 -rotate-90" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="21"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-slate-200 dark:text-slate-700"
          />
          <circle
            cx="24"
            cy="24"
            r="21"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-blue-600 transition-[stroke-dashoffset] duration-150"
            style={{
              strokeDasharray: `${2 * Math.PI * 21}`,
              strokeDashoffset: `${2 * Math.PI * 21 * (1 - progress / 100)}`,
            }}
          />
        </svg>
        {/* Inner button */}
        <div className="absolute inset-1 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:scale-105 transition-all duration-200">
          <svg
            className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
