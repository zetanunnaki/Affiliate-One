"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Mobile-only sticky TOC — floating dropdown pill that appears after
 * scrolling past the hero. Tapping it opens a list of article sections;
 * tapping a section smooth-scrolls to it and closes the menu.
 *
 * Hidden on xl+ (where the sidebar TOC is already visible).
 * Hidden on pages without any h2/h3 headings.
 *
 * Positioned above the StickyMobileCta (bottom: 88px) so both can coexist.
 */
export default function MobileStickyTOC() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Collect headings from the article
    const els = Array.from(
      document.querySelectorAll("article h2, article h3")
    );
    const items: TOCItem[] = els
      .filter((el) => el.id && el.textContent)
      .map((el) => ({
        id: el.id,
        text: (el.textContent || "").trim(),
        level: el.tagName === "H2" ? 2 : 3,
      }));
    setHeadings(items);

    // Scroll: show after 500px, track active heading
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // IntersectionObserver for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    els.forEach((el) => el.id && observer.observe(el));

    // Close on escape
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      observer.disconnect();
    };
  }, []);

  if (headings.length < 3) return null;

  const activeHeading = headings.find((h) => h.id === activeId);
  const activeIndex = activeHeading ? headings.findIndex((h) => h.id === activeId) : -1;
  const progress = activeIndex >= 0 ? Math.round(((activeIndex + 1) / headings.length) * 100) : 0;

  return (
    <>
      {/* Backdrop when open */}
      {open && (
        <div
          className="xl:hidden fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main sticky pill + dropdown */}
      <div
        className={`xl:hidden fixed inset-x-0 z-50 transition-all duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        style={{ bottom: "88px" }}
      >
        <div className="max-w-xl mx-auto px-4">
          {/* Dropdown panel (opens upward) */}
          {open && (
            <div className="mb-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl ring-1 ring-black/5 overflow-hidden animate-in slide-in-from-bottom-2 fade-in duration-200">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  On this page
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="max-h-[50vh] overflow-y-auto py-2">
                {headings.map((h) => {
                  const isActive = activeId === h.id;
                  return (
                    <li key={h.id}>
                      <button
                        onClick={() => {
                          document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                          setOpen(false);
                        }}
                        className={`w-full text-left flex items-center gap-2 px-5 py-2.5 text-sm leading-snug transition-colors ${
                          h.level === 3 ? "pl-8 text-[13px]" : ""
                        } ${
                          isActive
                            ? "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 font-semibold"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                        }`}
                      >
                        {isActive && (
                          <span className="w-1 h-4 rounded-full bg-blue-500 shrink-0" />
                        )}
                        <span className={isActive ? "" : "ml-[5px]"}>{h.text}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Always-visible pill */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Jump to section"
            className="w-full flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-xl shadow-black/10 ring-1 ring-black/5 hover:shadow-2xl transition-all"
          >
            {/* Progress circle */}
            <div className="relative w-6 h-6 shrink-0">
              <svg className="w-6 h-6 -rotate-90" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-200 dark:text-slate-700" />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-blue-600 transition-all duration-300"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 10}`,
                    strokeDashoffset: `${2 * Math.PI * 10 * (1 - progress / 100)}`,
                  }}
                />
              </svg>
            </div>

            <div className="flex-1 min-w-0 text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 leading-none mb-0.5">
                {activeHeading ? `Section ${activeIndex + 1} / ${headings.length}` : "Contents"}
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                {activeHeading?.text || "Jump to section"}
              </div>
            </div>

            <svg
              className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
