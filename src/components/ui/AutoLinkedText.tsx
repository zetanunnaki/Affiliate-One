import Link from "next/link";
import internalLinks from "@/data/internalLinks.json";

interface AutoLinkedTextProps {
  children: string;
  maxLinks?: number;
  excludeHrefs?: string[];
}

/**
 * Automatically links keywords in text content to relevant internal pages.
 * Only links each keyword once (first occurrence).
 * Used in country context blocks and article descriptions.
 */
export default function AutoLinkedText({
  children,
  maxLinks = 3,
  excludeHrefs = [],
}: AutoLinkedTextProps) {
  if (!children || typeof children !== "string") return <>{children}</>;

  // Sort by keyword length (longest first) to prevent partial matches
  const sortedLinks = [...internalLinks]
    .filter((link) => !excludeHrefs.includes(link.href))
    .sort((a, b) => b.keyword.length - a.keyword.length);

  let text = children;
  const replacements: { start: number; end: number; keyword: string; href: string }[] = [];
  let linkCount = 0;

  for (const link of sortedLinks) {
    if (linkCount >= maxLinks) break;

    const regex = new RegExp(`\\b(${link.keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`, "i");
    const match = text.match(regex);

    if (match && match.index !== undefined) {
      // Check this position isn't already taken by a longer keyword
      const start = match.index;
      const end = start + match[0].length;
      const overlaps = replacements.some(
        (r) => (start >= r.start && start < r.end) || (end > r.start && end <= r.end)
      );

      if (!overlaps) {
        replacements.push({ start, end, keyword: match[0], href: link.href });
        linkCount++;
      }
    }
  }

  if (replacements.length === 0) return <>{children}</>;

  // Sort by position for left-to-right rendering
  replacements.sort((a, b) => a.start - b.start);

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const rep of replacements) {
    if (rep.start > lastIndex) {
      parts.push(text.slice(lastIndex, rep.start));
    }
    parts.push(
      <Link
        key={rep.start}
        href={rep.href}
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {rep.keyword}
      </Link>
    );
    lastIndex = rep.end;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
