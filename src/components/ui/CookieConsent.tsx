"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so the banner slides in after page settles
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-hidden={!visible}
      className={`fixed bottom-4 inset-x-4 sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-md z-50 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-black/50">
        {/* Gradient top accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                We use cookies
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We use cookies to improve your experience and analyze site traffic. See our{" "}
                <Link href="/cookies" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Cookie Notice
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={decline}
              className="flex-1 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="flex-1 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg shadow-md shadow-blue-600/25 transition-all hover:-translate-y-0.5"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
