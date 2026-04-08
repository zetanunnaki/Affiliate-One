import type { MDXComponents } from "mdx/types";
import Callout from "@/components/ui/Callout";
import LinkCard from "@/components/ui/LinkCard";
import ProsCons from "@/components/ui/ProsCons";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    LinkCard,
    ProsCons,

    /* ── Headings with decorative accents ── */
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-10 mb-5 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <div className="mt-16 mb-6 scroll-mt-24 group">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 group-hover:h-10 transition-all duration-300" />
          <h2 className="text-[1.65rem] font-extrabold tracking-tight text-slate-900 dark:text-white">
            {children}
          </h2>
        </div>
        <div className="ml-4 h-px bg-gradient-to-r from-blue-200 via-blue-100 to-transparent dark:from-blue-800 dark:via-blue-900 dark:to-transparent" />
      </div>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-10 mb-3 scroll-mt-24 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mt-8 mb-2 pl-3 border-l-2 border-blue-300 dark:border-blue-700">
        {children}
      </h4>
    ),

    /* ── Body text ── */
    p: ({ children }) => (
      <p className="text-[1.0625rem] leading-[1.9] text-slate-600 dark:text-slate-300 mb-5">
        {children}
      </p>
    ),

    /* ── Lists with custom animated bullets ── */
    ul: ({ children }) => (
      <ul className="space-y-3 mb-6 ml-0.5">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-3 mb-6 ml-0.5 list-none pl-0">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="flex items-start gap-3 text-[1.0625rem] leading-[1.85] text-slate-600 dark:text-slate-300 group/li">
        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 shrink-0 group-hover/li:scale-150 group-hover/li:bg-blue-500 transition-all duration-200" />
        <span className="flex-1">{children}</span>
      </li>
    ),

    /* ── Links with animated underline ── */
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
      >
        {children}
      </a>
    ),

    /* ── Blockquote with gradient border + quote icon ── */
    blockquote: ({ children }) => (
      <div className="relative my-8 rounded-xl overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-400 rounded-full" />
        <div className="bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/40 dark:to-transparent pl-6 pr-6 py-5 rounded-r-xl">
          <svg className="w-8 h-8 text-blue-200 dark:text-blue-800 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-slate-700 dark:text-slate-200 not-italic [&>p]:mb-0 [&>p]:text-[1.0625rem] [&>p]:leading-[1.85]">
            {children}
          </blockquote>
        </div>
      </div>
    ),

    /* ── Tables ── */
    table: ({ children }) => (
      <div className="my-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-800/60">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="px-5 py-3.5 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-5 py-3.5 text-sm text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
        {children}
      </td>
    ),

    /* ── Horizontal rule with icon ── */
    hr: () => (
      <div className="my-14 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />
        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />
      </div>
    ),

    /* ── Code with terminal header ── */
    code: ({ children, className }) => {
      if (!className) {
        return (
          <code className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[0.875rem] font-semibold text-blue-700 dark:text-blue-300 border border-slate-200/80 dark:border-slate-700/80">
            {children}
          </code>
        );
      }
      return <code className={className}>{children}</code>;
    },
    pre: ({ children }) => (
      <div className="my-8 rounded-2xl overflow-hidden border border-slate-800 shadow-lg group hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-slate-500 font-mono">code</span>
        </div>
        <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-5 overflow-x-auto text-sm leading-relaxed">
          {children}
        </pre>
      </div>
    ),

    /* ── Images with caption ── */
    img: ({ src, alt }) => (
      <figure className="my-8 group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || ""}
          className="w-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 group-hover:shadow-2xl group-hover:scale-[1.01] transition-all duration-500"
          loading="lazy"
        />
        {alt && (
          <figcaption className="mt-3 text-center text-sm text-slate-400 dark:text-slate-500 italic">
            {alt}
          </figcaption>
        )}
      </figure>
    ),

    /* ── Bold text with subtle highlight ── */
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900 dark:text-white">
        {children}
      </strong>
    ),

    ...components,
  };
}
