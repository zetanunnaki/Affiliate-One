import type { Country, FAQItem } from "@/types";

export function generateCountryFAQs(country: Country): FAQItem[] {
  const faqs: FAQItem[] = [];

  // FAQ 1: Legality
  if (country.riskFlags.includes("censorship")) {
    faqs.push({
      question: `Is it legal to use a VPN in ${country.nameEn}?`,
      answer: `${country.vpnNotes} We recommend researching the latest local regulations before using a VPN in ${country.nameEn}. This information is educational and should not be taken as legal advice.`,
    });
  } else {
    faqs.push({
      question: `Is it legal to use a VPN in ${country.nameEn}?`,
      answer: `Yes, VPN use is legal in ${country.nameEn}. ${country.vpnNotes} VPNs are a standard security tool used by remote workers and businesses worldwide.`,
    });
  }

  // FAQ 2: Best VPN
  faqs.push({
    question: `What is the best VPN for ${country.nameEn} in 2026?`,
    answer: `Based on our testing, NordVPN is our top overall pick for ${country.nameEn}, offering fast speeds, strong security, and reliable servers in the ${country.region} region. Surfshark is the best budget option, and ExpressVPN is ideal for travelers visiting ${country.nameEn}.`,
  });

  // FAQ 3: Wi-Fi safety
  faqs.push({
    question: `Is public Wi-Fi safe in ${country.nameEn}?`,
    answer: `${country.travelNotes} While convenient, public Wi-Fi networks are vulnerable to various attacks including man-in-the-middle attacks and packet sniffing. Using a VPN encrypts your traffic and protects your data on any public network in ${country.nameEn}.`,
  });

  // FAQ 4: Payment
  faqs.push({
    question: `How can I pay for a VPN in ${country.nameEn}?`,
    answer: `${country.paymentNotes} Most major VPN providers accept international payment methods including credit cards, PayPal, and cryptocurrency. We recommend purchasing your VPN subscription before traveling to ${country.nameEn}.`,
  });

  // FAQ 5: Specific to risk flags
  if (country.riskFlags.includes("restricted-platforms")) {
    faqs.push({
      question: `Which apps and websites are blocked in ${country.nameEn}?`,
      answer: `Some platforms and services may be restricted or blocked in ${country.nameEn}. ${country.internetNotes} A VPN can help you access your usual apps and services while in ${country.nameEn}, though we recommend checking the latest information before your trip.`,
    });
  }

  if (country.riskFlags.includes("high-fraud")) {
    faqs.push({
      question: `How can I protect myself from online fraud in ${country.nameEn}?`,
      answer: `${country.nameEn} has higher rates of online fraud. Using a VPN adds a layer of encryption to your internet traffic, but you should also enable two-factor authentication on all accounts, use a password manager, and be cautious of phishing attempts. Avoid entering sensitive information on public Wi-Fi without a VPN.`,
    });
  }

  // FAQ 6: Remote work
  faqs.push({
    question: `Can I work remotely from ${country.nameEn} with a VPN?`,
    answer: `Yes, many remote workers use VPNs in ${country.nameEn} to securely access company resources and protect sensitive data. ${country.internetNotes} A VPN with split tunneling allows you to route work traffic through a secure tunnel while using local internet for general browsing.`,
  });

  // FAQ 7: Streaming
  faqs.push({
    question: `Can I use a VPN to stream services in ${country.nameEn}?`,
    answer: `A VPN can help you access streaming services that may be geo-restricted in ${country.nameEn}. NordVPN, Surfshark, and ExpressVPN are particularly effective at unblocking Netflix, Disney+, BBC iPlayer, and Amazon Prime libraries from other regions. Always check the terms of service of streaming providers before connecting.`,
  });

  // FAQ 8: Mobile / smartphone
  faqs.push({
    question: `Should I use a VPN on my phone in ${country.nameEn}?`,
    answer: `Yes — using a VPN on your mobile device in ${country.nameEn} is just as important as on a laptop, especially when connecting to public Wi-Fi at cafes, hotels, airports, or co-working spaces. All major VPN providers offer iOS and Android apps with one-tap connection and automatic Wi-Fi protection.`,
  });

  // FAQ 9: Banking
  faqs.push({
    question: `Is online banking safe in ${country.nameEn} with a VPN?`,
    answer: `A VPN adds an essential encryption layer when accessing online banking in ${country.nameEn}, especially over public networks. However, some banks may flag VPN logins as suspicious. We recommend connecting to a server in your home country when banking, and enabling two-factor authentication on all accounts.`,
  });

  // FAQ 10: Free vs paid
  faqs.push({
    question: `Should I use a free VPN in ${country.nameEn}?`,
    answer: `We strongly advise against free VPNs in ${country.nameEn}. Free providers typically log user data, sell browsing history to advertisers, contain malware, and provide poor performance. Paid VPNs like NordVPN ($3.39/mo) and Surfshark ($2.29/mo) cost less than a coffee per month and offer audited no-logs policies, faster speeds, and proper security.`,
  });

  return faqs;
}
