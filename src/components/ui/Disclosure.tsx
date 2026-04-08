import Link from "next/link";

export default function Disclosure() {
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg px-4 py-3 text-sm text-amber-800 dark:text-amber-200 my-4">
      <strong>Disclosure:</strong> Some links on this page are affiliate links.
      We may earn a commission if you make a purchase, at no extra cost to you.
      This does not affect our editorial independence.{" "}
      <Link
        href="/affiliate-disclosure"
        className="underline hover:text-amber-900 dark:hover:text-amber-100"
      >
        Learn more
      </Link>
    </div>
  );
}
