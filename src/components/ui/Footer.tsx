import Link from "next/link";
import { footerNav } from "@/lib/navigation";
import Logo from "@/components/ui/Logo";
import SocialIcons from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 dark:bg-[#080c15] text-slate-300 mt-auto overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <Logo forceDark />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-5">
              Independent VPN reviews and security guides for remote workers.
              Expert-tested recommendations you can trust.
            </p>
            <SocialIcons />
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

        {/* Trust strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 mb-6">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Independently tested" },
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "No pay-for-play" },
              { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", label: "Certified experts" },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Updated weekly" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-xs text-slate-400">
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                {item.label}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/60">
            <p className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} BuySecureVPN. All rights reserved.
              Some links are affiliate links.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">
                Affiliate Disclosure
              </Link>
              <span className="text-slate-600">&middot;</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <span className="text-slate-600">&middot;</span>
              <Link href="/sitemap-html" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
