"use client";

import { useEffect, useState } from "react";
import { getVariant, trackConversion } from "@/lib/ab-test";

interface ABTestCtaProps {
  href: string;
  providerName: string;
  brandColor: string;
  brandColorDark: string;
  className?: string;
}

const CTA_MAP: Record<string, (name: string) => string> = {
  get: (name) => `Get ${name}`,
  try: (name) => `Try ${name} Free`,
  claim: (name) => `Claim ${name} Deal`,
};

export default function ABTestCta({
  href,
  providerName,
  brandColor,
  brandColorDark,
  className = "",
}: ABTestCtaProps) {
  const [label, setLabel] = useState(`Get ${providerName}`);

  useEffect(() => {
    const variant = getVariant("ctaText");
    const fn = CTA_MAP[variant] || CTA_MAP.get;
    setLabel(fn(providerName));
  }, [providerName]);

  return (
    <a
      href={href}
      rel="noopener noreferrer sponsored"
      onClick={() => trackConversion("ctaText", "cta_click")}
      className={`group/cta relative overflow-hidden inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 sm:py-4 text-sm font-black tracking-wide text-white rounded-xl sm:rounded-2xl shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 uppercase ${className}`}
      style={{
        background: `linear-gradient(135deg, ${brandColor} 0%, ${brandColorDark} 100%)`,
        boxShadow: `0 14px 30px -12px ${brandColor}66, 0 6px 12px -4px ${brandColor}40`,
      }}
    >
      <span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700"
        aria-hidden
      />
      <span className="relative">{label}</span>
      <svg
        className="relative w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  );
}
