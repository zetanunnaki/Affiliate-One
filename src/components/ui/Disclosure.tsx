import Link from "next/link";

export default function Disclosure() {
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg px-4 py-3 text-sm text-amber-800 dark:text-amber-200 my-4">
      <strong>Affiliate Disclosure:</strong> BuySecureVPN earns commissions from
      NordVPN, Surfshark, Proton VPN, and FastestVPN affiliate programs when you
      purchase through our links — at no extra cost to you. Our ratings are based
      on independent 47-point testing, not commission rates.{" "}
      <Link
        href="/affiliate-disclosure"
        className="underline hover:text-amber-900 dark:hover:text-amber-100"
      >
        Full disclosure
      </Link>
    </div>
  );
}
