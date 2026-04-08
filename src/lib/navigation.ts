import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  {
    label: "Security",
    href: "/security",
    children: [
      { label: "Remote Work Security", href: "/security/remote-work" },
      { label: "Public Wi-Fi Safety", href: "/security/public-wifi" },
      { label: "Account Security & 2FA", href: "/security/2fa" },
      { label: "Password Managers", href: "/security/password-managers" },
      { label: "Travel Security", href: "/security/travel" },
      { label: "Phishing & Scams", href: "/security/phishing" },
    ],
  },
  {
    label: "VPN",
    href: "/vpn",
    children: [
      { label: "Best VPN 2026", href: "/best/vpn" },
      { label: "Best VPN by Country", href: "/countries" },
      { label: "VPN Providers", href: "/vpn/providers" },
      { label: "VPN for Remote Work", href: "/vpn/intent/remote-work" },
      { label: "VPN for Travel", href: "/vpn/intent/travel" },
      { label: "VPN for Privacy", href: "/vpn/intent/privacy" },
    ],
  },
  {
    label: "Best Of",
    href: "/best/vpn",
    children: [
      { label: "Best VPN 2026", href: "/best/vpn" },
      { label: "Best Password Manager", href: "/best/password-manager" },
      { label: "Best 2FA App", href: "/best/2fa-app" },
    ],
  },
  {
    label: "Guides",
    href: "/guides",
  },
  {
    label: "Countries",
    href: "/countries",
  },
  {
    label: "Tools",
    href: "/tools/wifi-audit",
  },
];

export const footerNav = {
  resources: [
    { label: "Security Guides", href: "/guides" },
    { label: "VPN Reviews", href: "/vpn/providers" },
    { label: "Country Directory", href: "/countries" },
    { label: "Wi-Fi Audit Tool", href: "/tools/wifi-audit" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Review Board", href: "/review-board" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Notice", href: "/cookies" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Corrections Policy", href: "/corrections" },
  ],
};
