import Link from "next/link";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import TableOfContents from "@/components/ui/TableOfContents";
import FeedbackWidget from "@/components/ui/FeedbackWidget";
import type { PostFrontmatter } from "@/types";

interface ArticleLayoutProps {
  frontmatter: PostFrontmatter;
  children: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}

// Hero image by category — falls back to security
const heroImageByCategory: Record<string, { src: string; alt: string }> = {
  vpn: { src: "/images/illustrations/hero-vpn-desk.png", alt: "VPN security on laptop workspace" },
  security: { src: "/images/illustrations/hero-home-office.png", alt: "Secure home office setup" },
  travel: { src: "/images/illustrations/hero-airport-wifi.png", alt: "VPN on public airport WiFi" },
  "public-wifi": { src: "/images/illustrations/hero-airport-wifi.png", alt: "VPN on public airport WiFi" },
};

const categoryIcons: Record<string, React.ReactNode> = {
  vpn: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  security: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  travel: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  "public-wifi": <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" /></svg>,
};

export default function ArticleLayout({ frontmatter, children, breadcrumbs }: ArticleLayoutProps) {
  const defaultBreadcrumbs = breadcrumbs || [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: frontmatter.title },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    dateModified: frontmatter.updatedAt,
    author: { "@type": "Person", name: frontmatter.author },
  };

  const catIcon = categoryIcons[frontmatter.category] || categoryIcons.security;
  const heroImage = heroImageByCategory[frontmatter.category] || heroImageByCategory.security;

  return (
    <>
      <ReadingProgressBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ═══ HERO — Dark gradient like NordVPN articles ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.08),transparent_60%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="[&_nav]:text-slate-400 [&_a]:text-slate-400 [&_a:hover]:text-white [&_span]:text-slate-500">
            <Breadcrumbs items={defaultBreadcrumbs} />
          </div>

          {frontmatter.category && (
            <Link href={`/guides/category/${frontmatter.category}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full mb-5 hover:bg-blue-500/20 transition-colors">
              {catIcon}
              {frontmatter.category.charAt(0).toUpperCase() + frontmatter.category.slice(1)} Guide
            </Link>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.15] mb-5">
            {frontmatter.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
            {frontmatter.description}
          </p>

          <div className="pt-5 border-t border-white/10 [&_a]:text-blue-300 [&_a:hover]:text-blue-200 [&_span]:text-slate-400 [&_time]:text-slate-400 [&>div]:border-0 [&>div]:mb-0 [&>div]:pb-0">
            <Byline authorId={frontmatter.author} updatedAt={frontmatter.updatedAt} />
          </div>
        </div>
      </div>

      {/* ═══ FEATURED IMAGE — sits right under the dark hero ═══ */}
      <div className="relative -mt-6 mb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-black/5 object-cover aspect-[16/9]"
            loading="eager"
          />
        </div>
      </div>

      {/* ═══ CONTENT + SIDEBAR ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-14">
          <article className="flex-1 min-w-0 max-w-3xl">
            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight">
              {children}
            </div>

            <div className="mt-16 space-y-10">
              <FeedbackWidget pageId={frontmatter.title} />

              {frontmatter.adsEnabled !== false && (
                <div className="p-6 bg-gradient-to-r from-slate-50 to-slate-100/80 dark:from-slate-800/30 dark:to-slate-900/30 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Advertisement</p>
                </div>
              )}

              {/* CTA */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
                <div className="relative p-7 sm:p-8">
                  <h2 className="text-xl font-bold text-white mb-2">Ready to Get Protected?</h2>
                  <p className="text-blue-100 text-sm mb-6">Take the next step in securing your remote work setup.</p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      { label: "Best VPN 2026", href: "/best/vpn", desc: "Our top picks" },
                      { label: "Password Manager", href: "/best/password-manager", desc: "Secure accounts" },
                      { label: "Security Checklist", href: "/tools/security-checklist", desc: "45-item audit" },
                    ].map((link) => (
                      <Link key={link.href} href={link.href} className="flex flex-col p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200">
                        <span className="text-sm font-semibold text-white">{link.label}</span>
                        <span className="text-xs text-blue-200">{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Citations */}
              {frontmatter.citations && frontmatter.citations.length > 0 && (
                <section className="pt-8 border-t border-slate-100 dark:border-slate-800">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    Sources & Citations
                  </h2>
                  <ol className="space-y-2.5">
                    {frontmatter.citations.map((citation, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400 group hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                        <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 shrink-0 mt-0.5 group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400 transition-colors">{i + 1}</span>
                        <span className="break-words">{citation}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </article>

          {frontmatter.toc !== false && <TableOfContents />}
        </div>
      </div>
    </>
  );
}
