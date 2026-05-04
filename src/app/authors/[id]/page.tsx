import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllAuthors, getAuthorById } from "@/lib/data";
import { BUILD_MONTH_YEAR } from "@/lib/dates";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllAuthors().map((a) => ({ id: a.id }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { id } = await props.params;
  const author = getAuthorById(id);
  if (!author) return {};
  const title = `${author.name} — ${author.role}`;
  return {
    title,
    description: author.bio,
    alternates: { canonical: `/authors/${id}/` },
    openGraph: {
      title,
      description: author.bio,
      type: "profile",
      url: `/authors/${id}/`,
      images: [{ url: author.headshot, width: 400, height: 400, alt: `${author.name} headshot` }],
    },
    twitter: { card: "summary", images: [author.headshot] },
  };
}

export default async function AuthorPage(props: PageProps) {
  const { id } = await props.params;
  const author = getAuthorById(id);
  if (!author) notFound();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: `https://buysecurevpn.com${author.headshot}`,
    url: `https://buysecurevpn.com/authors/${author.id}/`,
    sameAs: author.sameAs,
    ...(author.credentials.length > 0 && {
      knowsAbout: author.credentials,
      hasCredential: author.credentials.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Certification",
        name: c,
      })),
    }),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="flex items-start gap-6 mb-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={author.headshot}
          alt={`${author.name} — ${author.role}`}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover shrink-0"
          loading="lazy"
        />
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {author.name}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">{author.role}</p>
          {author.location && (
            <p className="text-sm text-zinc-500">{author.location}</p>
          )}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          About
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {author.bio}
        </p>
      </div>

      {author.credentials.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Credentials
          </h2>
          <div className="flex flex-wrap gap-2">
            {author.credentials.map((c) => {
              const verifyUrls: Record<string, string> = {
                "CISSP": "https://www.isc2.org/Certifications/CISSP",
                "CompTIA Security+": "https://www.comptia.org/certifications/security",
                "CEH": "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/",
                "CCNA": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html",
              };
              const href = verifyUrls[c];
              return href ? (
                <a
                  key={c}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                >
                  {c}
                  <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <span
                  key={c}
                  className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full"
                >
                  {c}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {author.sameAs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Find {author.name.split(" ")[0]} Online
          </h2>
          <div className="flex flex-wrap gap-3">
            {author.sameAs.map((url) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-700 underline"
              >
                {url.includes("linkedin")
                  ? "LinkedIn"
                  : url.includes("github")
                    ? "GitHub"
                    : url.includes("scholar")
                      ? "Google Scholar"
                      : "Profile"}
              </a>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Articles by {author.name.split(" ")[0]}
        </h2>
        <div className="space-y-3">
          <Link
            href="/best/vpn"
            className="block p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Best VPN 2026: Expert-Tested & Independently Reviewed
            </span>
            <span className="block text-sm text-zinc-500 mt-1">
              Updated {BUILD_MONTH_YEAR}
            </span>
          </Link>
          <Link
            href="/vpn/providers"
            className="block p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              VPN Provider Reviews
            </span>
            <span className="block text-sm text-zinc-500 mt-1">
              Updated {BUILD_MONTH_YEAR}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
