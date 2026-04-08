import type { Metadata } from "next";
import Byline from "@/components/ui/Byline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Physical Security for Remote Workers (2026) — Protect Your Devices IRL",
  description: "Digital security is useless if someone steals your laptop. Physical security practices for home offices, co-working spaces, cafés, and travel.",
};

export default function PhysicalSecurityPage() {
  const faqs = [
    { question: "Is physical security really a concern for remote workers?", answer: "Yes. Laptop theft is common in cafés, co-working spaces, airports, and hotels. A stolen device without encryption gives the thief access to everything — work data, personal files, saved passwords (if not using a password manager). Even with encryption, a stolen device is a costly disruption." },
    { question: "What's more important — encryption or physical security?", answer: "Both. Encryption protects data if the device is stolen. Physical security prevents the theft in the first place. Together, they provide defense in depth. Enable encryption AND practice physical security." },
    { question: "Do I really need a cable lock in a co-working space?", answer: "In shared spaces with strangers: yes. Even brief trips to the bathroom leave your laptop vulnerable. A $20 cable lock buys time and deters opportunistic theft. In a private office with colleagues you trust: less necessary." },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Security", href: "/security" }, { label: "Physical Security" }]} />
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Physical Security for Remote Workers</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">All your VPN encryption and 2FA is useless if someone walks off with your laptop at a café. Physical security is the foundation that digital security builds on.</p>
        <Byline authorId="elena-rodriguez" updatedAt="2026-04-07" />
      </header>

      {/* By location */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Security by Location</h2>
        <div className="space-y-4">
          {[
            { location: "Home Office", risk: "Low", tips: ["Lock your screen when stepping away (even at home — kids, visitors)", "Store devices in a locked drawer overnight", "Use a surge protector to prevent electrical damage", "Position screen away from windows (shoulder surfing from outside)", "Shred printed documents with sensitive info"] },
            { location: "Co-Working Space", risk: "Medium", tips: ["Use a cable lock when at your desk", "Take your laptop with you when leaving for more than a bathroom break", "Use a privacy screen to prevent shoulder surfing", "Don't leave devices charging unattended", "Lock your locker (if provided) — don't leave devices in open storage"] },
            { location: "Café / Public Space", risk: "High", tips: ["Keep your laptop bag strap wrapped around your chair/leg", "Sit with your back to a wall — prevents shoulder surfing and bag snatching from behind", "NEVER leave devices unattended, even briefly", "Use a privacy screen", "Be aware of 'shoulder surfing' — people watching your screen or keyboard"] },
            { location: "Hotel Room", risk: "Medium", tips: ["Use the room safe for devices when going out", "If the safe is too small, use a cable lock on furniture", "Don't leave devices visible through windows", "Assume hotel staff can access your room — encrypt everything", "Check the safe works BEFORE trusting it with devices"] },
            { location: "Airport / Transit", risk: "High", tips: ["Keep devices in carry-on luggage — NEVER check them", "In security lines, don't send your laptop through X-ray until you're next in line", "Use a bag with a hidden laptop compartment", "Don't leave devices charging at public outlets unattended", "Use USB data blockers at public charging stations"] },
          ].map((loc) => (
            <div key={loc.location} className="p-5 border border-zinc-200 dark:border-zinc-700 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{loc.location}</h3>
                <span className={`text-xs font-bold px-2 py-1 rounded ${loc.risk === "High" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : loc.risk === "Medium" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"}`}>{loc.risk} Risk</span>
              </div>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                {loc.tips.map((tip, i) => <li key={i}>+ {tip}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Essential gear */}
      <section className="mb-10 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Physical Security Kit</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-700 dark:text-zinc-300">
          <div>+ <strong>Cable lock</strong> ($15-25) — Kensington-style for desk anchoring</div>
          <div>+ <strong>Privacy screen</strong> ($25-40) — Limits viewing angles</div>
          <div>+ <strong>Webcam cover</strong> ($2-5) — Physical slider cover</div>
          <div>+ <strong>USB data blocker</strong> ($5-10) — Prevents juice jacking</div>
          <div>+ <strong>Portable charger</strong> (10,000+ mAh) — Avoid public USB ports</div>
          <div>+ <strong>Anti-theft bag</strong> ($40-100) — Hidden compartments, slash-proof</div>
        </div>
      </section>

      {/* Digital + Physical combined */}
      <section className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">If Your Device Is Stolen</h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">If you&apos;ve followed security best practices, theft is recoverable:</p>
        <ol className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
          <li><strong>1.</strong> Full-disk encryption = thief can&apos;t access your data</li>
          <li><strong>2.</strong> Find My Device = locate, lock, or remote wipe</li>
          <li><strong>3.</strong> Password manager = change passwords from another device</li>
          <li><strong>4.</strong> Cloud backup = your work is recoverable</li>
          <li><strong>5.</strong> Insurance = replace the hardware</li>
        </ol>
      </section>

      <FAQ items={faqs} />
      <InternalLinks links={[
        { label: "Device Encryption", href: "/guides/device-encryption-guide", description: "Protect data if device is stolen" },
        { label: "Travel Security", href: "/security/travel", description: "Security while traveling" },
        { label: "Co-Working Security", href: "/guides/coworking-security", description: "Shared space protection" },
        { label: "USB Security", href: "/security/usb-security", description: "USB attack prevention" },
      ]} />
    </article>
  );
}
