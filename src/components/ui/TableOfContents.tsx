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
    <nav className="hidden xl:block sticky top-24 w-64 shrink-0 self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
      {/* Header with progress */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          On This Page
        </h2>
        <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-600 tabular-nums">
          {progress}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${sectionProgress}%` }}
        />
      </div>

      {/* TOC items */}
      <ul className="space-y-0.5">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`
                  block text-[13px] leading-snug py-1.5 rounded-md transition-all duration-200
                  ${h.level === 3 ? "pl-5" : "pl-3"}
                  ${isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/20"
                    : "text-zinc-500 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  )}
                  <span className={isActive ? "" : "ml-[14px]"}>{h.text}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-6 flex items-center gap-1.5 text-xs text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        Back to top
      </button>
    </nav>
  );
}
