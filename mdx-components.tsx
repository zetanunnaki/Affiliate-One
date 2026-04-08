import type { MDXComponents } from "mdx/types";
import Callout from "@/components/ui/Callout";
import LinkCard from "@/components/ui/LinkCard";
import ProsCons from "@/components/ui/ProsCons";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    LinkCard,
    ProsCons,
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mt-10 mb-5 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[1.65rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mt-14 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800 scroll-mt-20">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-10 mb-3 scroll-mt-20">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-bold text-zinc-800 dark:text-zinc-200 mt-8 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-[1.0625rem] leading-[1.85] text-zinc-600 dark:text-zinc-350 mb-5">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2 mb-6 ml-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-2 mb-6 ml-1 list-decimal pl-5">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-[1.0625rem] leading-[1.8] text-zinc-600 dark:text-zinc-350 pl-1">
        {children}
      </li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 font-medium border-b border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-xl py-3 pl-5 pr-5 my-6 text-zinc-700 dark:text-zinc-300 not-italic [&>p]:mb-0">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6 rounded-xl border border-zinc-200 dark:border-zinc-700">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-zinc-50 dark:bg-zinc-800/80">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 border-t border-zinc-100 dark:border-zinc-800">
        {children}
      </td>
    ),
    hr: () => (
      <hr className="border-none h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent my-12" />
    ),
    code: ({ children, className }) => {
      // Inline code (no language class)
      if (!className) {
        return (
          <code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-[0.875rem] font-medium text-zinc-800 dark:text-zinc-200">
            {children}
          </code>
        );
      }
      // Code block (has language class from rehype)
      return <code className={className}>{children}</code>;
    },
    pre: ({ children }) => (
      <pre className="bg-zinc-900 dark:bg-zinc-950 text-zinc-100 rounded-xl border border-zinc-800 p-4 overflow-x-auto my-6 text-sm leading-relaxed">
        {children}
      </pre>
    ),
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || ""}
        className="rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700 my-6"
        loading="lazy"
      />
    ),
    ...components,
  };
}
