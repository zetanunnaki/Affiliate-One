"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("article h2, article h3")
    );
    const items: TOCItem[] = elements
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      }));
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -75% 0px", threshold: 0 }
    );

    for (const el of elements) {
      if (el.id) observer.observe(el);
    }

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(100, Math.round((scrollTop / docHeight) * 100)));
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (headings.length === 0) return null;

  const activeIndex = headings.findIndex((h) => h.id === activeId);
  const sectionProgress = headings.length > 1
    ? Math.round(((activeIndex >= 0 ? activeIndex : 0) / (headings.length - 1)) * 100)
    : 0;

  return (
    <nav className="hidden xl:block sticky top-24 w-64 shrink-0 self-start max-h-[calc(100vh-8rem)]">
      <div className="relative pl-5">
        {/* Vertical rail */}
        <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent dark:from-slate-700 dark:via-slate-800" />
        <div
          className="absolute left-0 top-1 w-px bg-gradient-to-b from-blue-500 to-indigo-500 transition-all duration-500 ease-out"
          style={{ height: `${Math.max(2, sectionProgress)}%` }}
        />

        {/* Header with circular progress */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="relative w-7 h-7">
            <svg className="w-7 h-7 -rotate-90" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-200 dark:text-slate-800" />
              <circle
                cx="14"
                cy="14"
                r="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-blue-500 transition-all duration-300"
                style={{
                  strokeDasharray: `${2 * Math.PI * 12}`,
                  strokeDashoffset: `${2 * Math.PI * 12 * (1 - progress / 100)}`,
                }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-blue-600 dark:text-blue-400 tabular-nums">
              {progress}
            </span>
          </div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">
            On This Page
          </h2>
        </div>

        {/* TOC items */}
        <ul className="space-y-0.5 max-h-[calc(100vh-18rem)] overflow-y-auto pr-2 -mr-2">
          {headings.map((h) => {
            const isActive = activeId === h.id;
            return (
              <li key={h.id} className="relative">
                {/* Active dot indicator on the rail */}
                {isActive && (
                  <span className="absolute -left-[22px] top-2.5 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-500/20 animate-pulse-dot" />
                )}
                <a
                  href={`#${h.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`
                    block text-[13px] leading-snug py-1.5 px-2 rounded-md transition-all duration-200
                    ${h.level === 3 ? "pl-5 text-[12px]" : ""}
                    ${isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                    }
                  `}
                >
                  {h.text}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
          Back to top
        </button>
      </div>
    </nav>
  );
}
