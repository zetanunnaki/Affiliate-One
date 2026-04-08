interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  context?: string;
}

export default function Testimonial({ quote, author, role, context }: TestimonialProps) {
  return (
    <div className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900">
      <blockquote className="text-sm text-zinc-700 dark:text-zinc-300 italic leading-relaxed mb-3">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
            {author.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div>
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 block">{author}</span>
          <span className="text-xs text-zinc-500">{role}{context ? ` — ${context}` : ""}</span>
        </div>
      </div>
    </div>
  );
}
