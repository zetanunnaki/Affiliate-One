/**
 * Centralized social media profile config.
 *
 * Set these once when accounts are created. Used across:
 *  - Footer social icons row
 *  - Organization JSON-LD `sameAs` (helps Google entity resolution)
 *  - Twitter card `site` attribution
 *  - Pinterest domain verification meta tag
 *
 * Set `url` to "" for any platform you don't have an account on yet.
 */
export const SOCIAL = {
  twitter: {
    handle: "buysecurevpn",       // without the @
    url: "https://x.com/buysecurevpn",
  },
  facebook: {
    url: "https://facebook.com/buysecurevpn",
  },
  linkedin: {
    url: "https://www.linkedin.com/company/buysecurevpn",
  },
  pinterest: {
    url: "https://pinterest.com/buysecurevpn",
    verificationCode: "", // p:domain_verify content from Pinterest claim flow
  },
  reddit: {
    url: "https://reddit.com/user/buysecurevpn",
  },
  youtube: {
    url: "",
  },
  instagram: {
    url: "",
  },
};

/**
 * Returns the array of profile URLs that are actually configured.
 * Used by Organization schema sameAs and footer icon row.
 */
export function getSocialUrls(): string[] {
  return Object.values(SOCIAL)
    .map((s) => ("url" in s ? s.url : ""))
    .filter(Boolean);
}
