"use client";

import { useCallback, useEffect, useState } from "react";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

/**
 * Premium social share bar.
 *
 * Features:
 *  - Branded SVG icons with on-hover color reveal and lift animation
 *  - "Copied!" tooltip feedback on the copy-link button
 *  - Native Web Share API when available (mobile) — one-tap OS share sheet
 *  - Accessible: keyboard focus states, aria-labels, live region for copy toast
 *  - Platform brand colors bleed in only on hover to avoid rainbow chaos at rest
 */
export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [pageUrl, setPageUrl] = useState(url || "");
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    if (!url && typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanNativeShare(true);
    }
  }, [url]);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(pageUrl);

  const copyLink = useCallback(async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard permission denied — ignore */
    }
  }, [pageUrl]);

  const nativeShare = useCallback(async () => {
    if (typeof navigator === "undefined" || typeof navigator.share !== "function") return;
    try {
      await navigator.share({ title, url: pageUrl });
    } catch {
      /* user dismissed share sheet — ignore */
    }
  }, [title, pageUrl]);

  const shares = [
    {
      name: "X",
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      hoverBg: "hover:bg-zinc-900 dark:hover:bg-white",
      hoverText: "hover:text-white dark:hover:text-zinc-900",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      hoverBg: "hover:bg-[#1877f2]",
      hoverText: "hover:text-white",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036 26.805 26.805 0 00-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 00-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      hoverBg: "hover:bg-[#0a66c2]",
      hoverText: "hover:text-white",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Reddit",
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      hoverBg: "hover:bg-[#ff4500]",
      hoverText: "hover:text-white",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      hoverBg: "hover:bg-[#e60023]",
      hoverText: "hover:text-white",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.853c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.029 11.985.029z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      hoverBg: "hover:bg-[#25d366]",
      hoverText: "hover:text-white",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`,
      hoverBg: "hover:bg-emerald-600",
      hoverText: "hover:text-white",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[18px] h-[18px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
            Found this helpful?
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Share it with someone who needs it
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {shares.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${s.name}`}
              className={`group/btn relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 ring-1 ring-slate-200/70 dark:ring-slate-700/60 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/10 dark:hover:shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${s.hoverBg} ${s.hoverText}`}
            >
              {s.icon}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-[11px] font-medium text-white bg-slate-900 dark:bg-slate-700 rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                {s.name}
              </span>
            </a>
          ))}

          {/* Divider */}
          <span className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1" aria-hidden="true" />

          {/* Copy link */}
          <button
            type="button"
            onClick={copyLink}
            aria-label="Copy link"
            className="group/btn relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 ring-1 ring-slate-200/70 dark:ring-slate-700/60 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-blue-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {copied ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            )}
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-[11px] font-medium text-white bg-slate-900 dark:bg-slate-700 rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              {copied ? "Copied!" : "Copy link"}
            </span>
          </button>

          {/* Native share (mobile only, when supported) */}
          {canNativeShare && (
            <button
              type="button"
              onClick={nativeShare}
              aria-label="Share via device"
              className="group/btn relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 ring-1 ring-slate-200/70 dark:ring-slate-700/60 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-blue-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Screen-reader live region announcing copy status */}
      <div role="status" aria-live="polite" className="sr-only">
        {copied ? "Link copied to clipboard" : ""}
      </div>
    </div>
  );
}
