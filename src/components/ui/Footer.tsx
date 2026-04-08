import Link from "next/link";
import { footerNav } from "@/lib/navigation";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-[#080c15] text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <Logo forceDark />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Independent VPN reviews and security guides for remote workers.
              Expert-tested recommendations you can trust.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerNav.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} BuySecureVPN. All rights reserved.
            Some links are affiliate links.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/affiliate-disclosure" className="hover:text-slate-300 transition-colors">
              Affiliate Disclosure
            </Link>
            <span className="text-slate-700">&middot;</span>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <span className="text-slate-700">&middot;</span>
            <Link href="/sitemap-html" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
