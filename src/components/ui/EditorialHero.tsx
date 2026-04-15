import type { ReactNode } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Byline from "@/components/ui/Byline";

interface EditorialHeroProps {
  breadcrumbs: Array<{ label: string; href?: string }>;
  eyebrow: string;
  /** Three-line headline: first sans, second italic serif accent, third sans */
  headlineTop: string;
  headlineItalic: string;
  headlineBottom: string;
  lede: string;
  authorId: string;
  updatedAt: string;
  /** Extra content rendered under the lede (CTAs, callouts) */
  children?: ReactNode;
  /** Small label for masthead right side */
  masthead?: string;
}

/**
 * Shared editorial hero used across best-of and landing pages.
 * Magazine-style: masthead strip, oversized mixed-weight display headline,
 * amber italic serif accent, lede, optional CTAs, byline footer.
 */
export default function EditorialHero({
  breadcrumbs,
  eyebrow,
  headlineTop,
  headlineItalic,
  headlineBottom,
  lede,
  authorId,
  updatedAt,
  children,
  masthead = "The 2026 VPN Report",
}: EditorialHeroProps) {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1100px_700px_at_80%_25%,rgba(245,158,11,0.13),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_5%_85%,rgba(37,99,235,0.22),transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-[0.055] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M80 0H0v80' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Masthead strip */}
        <div className="flex items-center justify-between gap-4 pb-6 mb-12 border-b border-white/10">
          <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="hidden md:inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Updated weekly
            </span>
            <span className="text-slate-700">|</span>
            <span>{masthead}</span>
          </div>
        </div>

        {/* Rubric */}
        <div className="inline-flex items-center gap-2.5 mb-6">
          <span className="h-px w-10 bg-amber-400" />
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-400">
            {eyebrow}
          </span>
        </div>

        {/* Oversized editorial headline */}
        <h1 className="font-black tracking-[-0.03em] leading-[0.92] text-[44px] sm:text-[72px] lg:text-[92px] max-w-5xl">
          <span className="block text-white">{headlineTop}</span>
          <span className="block italic font-serif text-amber-300 -mt-1 lg:-mt-2">
            {headlineItalic}
          </span>
          <span className="block text-white">{headlineBottom}</span>
        </h1>

        {/* Lede */}
        <p className="mt-8 max-w-3xl text-lg sm:text-xl text-slate-300 leading-[1.55]">
          {lede}
        </p>

        {children && <div className="mt-8">{children}</div>}

        {/* Byline */}
        <div className="mt-12 [&_a]:text-slate-300 [&_a:hover]:text-white [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
          <Byline authorId={authorId} updatedAt={updatedAt} />
        </div>
      </div>
    </div>
  );
}
