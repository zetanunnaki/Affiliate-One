import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { estimateReadingTime } from "@/lib/reading-time";
import ArticleLayout from "@/components/layouts/ArticleLayout";
import ReadingTime from "@/components/ui/ReadingTime";
import ShareButtons from "@/components/ui/ShareButtons";
import RelatedPosts from "@/components/ui/RelatedPosts";
import HowToSchema from "@/components/seo/HowToSchema";

const HOW_TO_SLUGS: Record<string, { steps: { name: string; text: string }[]; totalTime: string }> = {
  "vpn-setup-beginners": {
    totalTime: "PT5M",
    steps: [
      { name: "Choose a VPN Provider", text: "Select NordVPN, Surfshark, or ExpressVPN based on your needs and budget." },
      { name: "Create an Account", text: "Visit the provider's website and sign up with a 30-day money-back guarantee." },
      { name: "Download and Install the App", text: "Download the VPN app for your OS (Windows, macOS, iOS, Android, Linux)." },
      { name: "Log In and Connect", text: "Open the app, log in, and click Connect to the fastest available server." },
      { name: "Verify Your Connection", text: "Visit whatismyipaddress.com to confirm your IP shows the VPN server location." },
    ],
  },
  "two-factor-auth-setup": {
    totalTime: "PT15M",
    steps: [
      { name: "Install an Authenticator App", text: "Download Authy or Google Authenticator on your phone." },
      { name: "Enable 2FA on Gmail", text: "Go to myaccount.google.com/security and enable 2-Step Verification with the authenticator app." },
      { name: "Enable 2FA on Microsoft", text: "Go to account.microsoft.com/security and add two-step verification." },
      { name: "Enable 2FA on GitHub", text: "Go to Settings > Password and authentication > Enable two-factor authentication." },
      { name: "Save Backup Codes", text: "Download and securely store recovery codes from each service in your password manager." },
    ],
  },
  "password-manager-setup": {
    totalTime: "PT15M",
    steps: [
      { name: "Choose a Password Manager", text: "Select Bitwarden (free), 1Password (families), or Proton Pass (privacy)." },
      { name: "Create a Strong Master Password", text: "Use a 4-6 word passphrase like 'correct-horse-battery-staple'." },
      { name: "Install the Browser Extension and Mobile App", text: "Install on Chrome/Firefox/Safari and iOS/Android." },
      { name: "Import Existing Passwords", text: "Export from your browser as CSV and import into the password manager." },
      { name: "Enable 2FA on the Password Manager", text: "Protect your vault with an authenticator app." },
      { name: "Start Replacing Weak Passwords", text: "Use the password health tool to find and replace reused or weak passwords." },
    ],
  },
  "data-breach-response": {
    totalTime: "PT60M",
    steps: [
      { name: "Identify What Was Compromised", text: "Check the breach notification for what data was exposed (email, password, financial, SSN)." },
      { name: "Change the Compromised Password", text: "Go directly to the affected service and change your password immediately." },
      { name: "Change Reused Passwords Everywhere", text: "If you reused that password on other services, change it on all of them." },
      { name: "Enable 2FA", text: "If the breached account didn't have 2FA, enable it now with an authenticator app." },
      { name: "Check Have I Been Pwned", text: "Visit haveibeenpwned.com to discover all known breaches involving your email." },
      { name: "Monitor Financial Accounts", text: "Check bank statements, set up transaction alerts, and consider a credit freeze." },
    ],
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs("guides").map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug("guides", slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      modifiedTime: post.frontmatter.updatedAt,
    },
  };
}

export default async function GuidePage(props: PageProps) {
  const { slug } = await props.params;
  const post = getPostBySlug("guides", slug);
  if (!post) notFound();

  const readingMinutes = estimateReadingTime(post.content);
  const howTo = HOW_TO_SLUGS[slug];

  const { content: mdxContent } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  return (
    <ArticleLayout frontmatter={post.frontmatter}>
      {howTo && (
        <HowToSchema
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          steps={howTo.steps}
          totalTime={howTo.totalTime}
        />
      )}
      <div className="mb-4 -mt-2">
        <ReadingTime minutes={readingMinutes} />
      </div>
      {mdxContent}
      <ShareButtons title={post.frontmatter.title} />
      <RelatedPosts currentSlug={slug} category={post.frontmatter.category} />
    </ArticleLayout>
  );
}
