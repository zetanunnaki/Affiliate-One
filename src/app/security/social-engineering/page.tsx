import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";
import TopVpnPicks from "@/components/ui/TopVpnPicks";
import ArticleSchema from "@/components/seo/ArticleSchema";

export const metadata: Metadata = {
  title: "Social Engineering Attacks: The Complete Guide for Remote Workers (2026)",
  description:
    "How social engineering works, why remote workers are prime targets, and specific defenses against pretexting, baiting, tailgating, and quid pro quo attacks.",
  alternates: { canonical: "/security/social-engineering/" },
  openGraph: {
    title: "Social Engineering Attacks: The Complete Guide for Remote Workers (2026)",
    description: "How social engineering works, why remote workers are prime targets, and specific defenses against pretexting, baiting, tailgating, and quid pro quo attacks.",
    type: "article",
    url: "/security/social-engineering/",
    images: [{ url: "/images/og/og-security.webp", width: 1200, height: 675, alt: "Social Engineering Guide" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-security.webp"] },
};

export default function SocialEngineeringPage() {
  const attacks = [
    { name: "Phishing", desc: "Fake emails/messages impersonating trusted entities to steal credentials or install malware.", example: "Email from 'IT department' asking you to verify your password via a link.", defense: "Verify through separate channel. Never click links in unexpected emails." },
    { name: "Pretexting", desc: "Creating a fabricated scenario to extract information. The attacker builds trust through a believable story.", example: "Caller claiming to be from your bank's fraud department, asking to 'verify' your account details.", defense: "Hang up and call back on the number printed on your card/statement." },
    { name: "Baiting", desc: "Offering something enticing (free USB, movie download) that contains malware.", example: "USB drive labeled 'Confidential - Q4 Salaries' left in a parking lot or co-working space.", defense: "Never plug in found USB drives. Never download from untrusted sources." },
    { name: "Quid Pro Quo", desc: "Offering a service in exchange for information. Often impersonates IT support.", example: "'IT support' calls offering to fix a computer problem you didn't report, asks for login credentials.", defense: "Verify IT requests through official channels. Your IT department has your info already." },
    { name: "Tailgating/Piggybacking", desc: "Physically following an authorized person into a restricted area.", example: "Someone carrying boxes asks you to hold the office door open for them.", defense: "Don't hold doors for strangers in secure areas. It's not rude — it's security." },
    { name: "Vishing (Voice Phishing)", desc: "Phone-based social engineering using urgency, authority, or emotion.", example: "Call from 'Microsoft support' claiming your computer is sending error reports and they need remote access.", defense: "Microsoft never calls you. Your bank never calls asking for full credentials. When in doubt, hang up." },
  ];

  const faqs = [
    { question: "Why are remote workers targeted by social engineering?", answer: "Remote workers are more isolated (can't walk to a colleague's desk to verify a request), use more digital communication (easier to impersonate via email/chat), often work from less secure environments (public Wi-Fi, shared spaces), and may have weaker security awareness training than office workers." },
    { question: "Can technology prevent social engineering?", answer: "Technology helps but can't fully prevent it. 2FA stops attackers who phish your password. VPNs prevent network-based eavesdropping. Email filters catch many phishing attempts. But social engineering ultimately exploits human psychology — awareness and verification habits are the strongest defense." },
    { question: "What's the single best defense?", answer: "The 'verify through a separate channel' rule. If someone contacts you requesting something sensitive (credentials, money transfer, data access), verify the request through a completely different communication channel. If they emailed, call them. If they called, message them on Slack. Never verify through the same channel the request came from." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ArticleSchema
        title="Social Engineering Attacks: The Complete Guide for Remote Workers (2026)"
        description="How social engineering works, why remote workers are prime targets, and specific defenses against pretexting, baiting, tailgating, and quid pro quo attacks."
        url="/security/social-engineering/"
        authorName="Sarah Chen"
        authorUrl="https://buysecurevpn.com/authors/sarah-chen/"
        image="https://buysecurevpn.com/images/og/og-security.webp"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Social Engineering" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Social Engineering Attacks: Complete Guide</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">Social engineering bypasses technical security by exploiting human psychology. It&apos;s the most common attack vector and the hardest to defend against with technology alone.</p>
        <Byline authorId="sarah-chen" updatedAt="2026-01-15" />
      </header>
      {/* Our Top 5 Picks */}
      <TopVpnPicks heading="Our Top 5 VPN Picks" eyebrow="Protect yourself" />


      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">6 Types of Social Engineering</h2>
        <div className="space-y-4">
          {attacks.map((a) => (
            <div key={a.name} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{a.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{a.desc}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h4 className="text-xs font-semibold text-red-800 dark:text-red-300 uppercase mb-1">Example</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">{a.example}</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="text-xs font-semibold text-green-800 dark:text-green-300 uppercase mb-1">Defense</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">{a.defense}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">The Golden Rule</h2>
        <p className="text-zinc-700 dark:text-zinc-300 font-medium">When someone asks for something sensitive, <strong>verify through a separate channel.</strong></p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Email request? Verify by phone. Phone request? Verify by Slack. Slack request? Verify in person or by phone. Never verify through the same channel the request came from — it could be compromised.</p>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Phishing Guide", href: "/security/phishing", description: "Detailed phishing defense" },
        { label: "SIM Swap Protection", href: "/guides/sim-swap-protection", description: "Phone-based social engineering" },
        { label: "AI-Powered Threats", href: "/security/ai-threats", description: "AI makes social engineering scarier" },
        { label: "Incident Response", href: "/security/incident-response", description: "What to do if you're hit" },
      ]} />
    </article>
  );
}
