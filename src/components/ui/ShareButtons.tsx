"use client";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const pageUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(pageUrl);

  const links = [
    {
      name: "X",
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:text-zinc-900 dark:hover:text-white",
    },
    {
      name: "Reddit",
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      color: "hover:text-orange-600",
    },
    {
      name: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      color: "hover:text-red-600",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:text-blue-600",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:text-blue-700",
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:text-green-500",
    },
    {
      name: "Email",
      href: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`,
      color: "hover:text-green-600",
    },
  ];

  async function copyLink() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(pageUrl);
    }
  }

  return (
    <div className="flex items-center gap-3 py-4 border-t border-zinc-200 dark:border-zinc-700 mt-8">
      <span className="text-sm font-medium text-zinc-500">Share:</span>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm text-zinc-500 ${link.color} transition-colors`}
        >
          {link.name}
        </a>
      ))}
      <button
        onClick={copyLink}
        className="text-sm text-zinc-500 hover:text-blue-600 transition-colors"
      >
        Copy Link
      </button>
    </div>
  );
}
