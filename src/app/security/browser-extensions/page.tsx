import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";

export const metadata: Metadata = {
  title: "Browser Extension Security (2026) — Which Extensions Are Safe?",
  description: "Browser extensions can read all your data. Here's how to audit your extensions, which ones to trust, and which to remove immediately.",
};

export default function BrowserExtensionsPage() {
  const safeExtensions = [
    { name: "uBlock Origin", purpose: "Ad/tracker blocking", trust: "High", reason: "Open-source, widely audited, by a trusted solo developer (Raymond Hill). The gold standard." },
    { name: "Bitwarden", purpose: "Password auto-fill", trust: "High", reason: "Open-source, audited, from a reputable company. Only accesses password fields." },
    { name: "HTTPS Everywhere", purpose: "Force HTTPS", trust: "High", reason: "By EFF. Now redundant in most browsers but not harmful." },
    { name: "Privacy Badger", purpose: "Tracker blocking", trust: "High", reason: "By EFF. Open-source, learns tracking patterns automatically." },
    { name: "NordVPN / FastestVPN extension", purpose: "VPN proxy + WebRTC leak prevention", trust: "High", reason: "From reputable VPN providers. Also blocks WebRTC leaks." },
  ];

  const riskyExtensions = [
    { name: "Free VPN extensions", risk: "High", reason: "Most free VPN extensions log and sell your browsing data. They have full access to all your web traffic." },
    { name: "Screenshot/screen recording", risk: "High", reason: "Can capture sensitive content including passwords, banking info, and private messages." },
    { name: "Coupon finders (Honey, etc.)", risk: "Medium", reason: "Track all your shopping behavior. Inject affiliate codes. May modify web pages." },
    { name: "Grammar checkers", risk: "Medium", reason: "Read everything you type — emails, passwords, private messages. Only use trusted ones (Grammarly is established but reads all content)." },
    { name: "Theme/customization extensions", risk: "Medium", reason: "Often request unnecessary permissions. Many have been caught injecting ads or tracking." },
    { name: "Unknown productivity tools", risk: "High", reason: "Small developer, unclear privacy policy, broad permissions. High risk of data collection or malware." },
  ];

  const faqs = [
    { question: "Can browser extensions see my passwords?", answer: "Extensions with 'Read and change all your data on all websites' permission can see everything — including passwords you type, banking information, and private messages. Only install extensions you absolutely need from trusted developers." },
    { question: "How do I audit my extensions?", answer: "Chrome: chrome://extensions. Firefox: about:addons. For each extension: (1) Do I still use it? Remove if not. (2) Is it from a known developer? (3) Check permissions — does it need 'access to all websites'? (4) When was it last updated? Abandoned extensions are risky. (5) Google '[extension name] security' to check for incidents." },
    { question: "How many extensions should I have?", answer: "As few as possible. Each extension is a potential attack vector. For most remote workers: password manager + uBlock Origin + VPN extension is sufficient. That's 3 extensions total. Every additional extension increases your attack surface." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Browser Extensions" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Browser Extension Security</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Browser extensions can read everything you do online — passwords, banking, emails, private messages. Most people have extensions they don&apos;t need from developers they don&apos;t trust. Time for an audit.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-04-07" />
      </header>
      {/* Our Top 4 Picks */}
      <TopVpnPicks heading="Our Top 4 VPN Picks" eyebrow="Protect yourself" />


      {/* Safe extensions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Extensions We Trust</h2>
        <div className="space-y-3">
          {safeExtensions.map((e) => (
            <div key={e.name} className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{e.name}</h3>
                <span className="text-xs font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">{e.trust} Trust</span>
              </div>
              <p className="text-sm text-zinc-500 mb-1">{e.purpose}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risky extensions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Extensions to Be Cautious About</h2>
        <div className="space-y-3">
          {riskyExtensions.map((e) => (
            <div key={e.name} className="p-4 border border-red-200 dark:border-red-800 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{e.name}</h3>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${e.risk === "High" ? "text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20" : "text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"}`}>{e.risk} Risk</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audit checklist */}
      <section className="mb-10 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Extension Audit Checklist (5 Minutes)</h2>
        <ol className="text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
          <li><strong>1.</strong> Open your extension manager (chrome://extensions or about:addons)</li>
          <li><strong>2.</strong> For each extension, ask: &quot;Have I used this in the last month?&quot; — Remove if no</li>
          <li><strong>3.</strong> Check permissions — does it need &quot;Read and change all data&quot;? Only essential extensions should have this</li>
          <li><strong>4.</strong> Check developer — is it a known company or individual? Unknown = higher risk</li>
          <li><strong>5.</strong> Check last update date — extensions not updated in 1+ year may be abandoned</li>
          <li><strong>6.</strong> Target: 3-5 extensions maximum (password manager, ad blocker, VPN)</li>
        </ol>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Browser Privacy Setup", href: "/guides/browser-privacy-setup", description: "Complete browser privacy guide" },
        { label: "Supply Chain Attacks", href: "/security/supply-chain", description: "How extensions get compromised" },
        { label: "Password Manager Guide", href: "/security/password-managers", description: "Secure auto-fill extension" },
        { label: "VPN Leak Testing", href: "/vpn/ip-leak-test", description: "Test for WebRTC leaks" },
      ]} />
    </article>
  );
}
