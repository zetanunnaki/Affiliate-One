import fs from "fs";
import path from "path";

const editorials = [
  // Africa continued
  { slug: "ivory-coast", nameEn: "Ivory Coast", iso2: "CI", content: "Ivory Coast (Côte d'Ivoire) has growing internet infrastructure centered on Abidjan. Government has restricted social media during political events. French-speaking with Orange and MTN as major carriers." },
  { slug: "madagascar", nameEn: "Madagascar", iso2: "MG", content: "Madagascar has limited internet primarily in Antananarivo. National parks and wildlife areas have no connectivity. Growing mobile adoption. Download everything offline before leaving the capital." },
  { slug: "mozambique", nameEn: "Mozambique", iso2: "MZ", content: "Mozambique has growing mobile internet centered on Maputo. Portuguese-speaking. Beach resorts in Vilankulo and Tofo increasingly offer Wi-Fi. Northern regions have limited connectivity." },
  { slug: "malawi", nameEn: "Malawi", iso2: "MW", content: "Malawi has limited internet primarily in Lilongwe and Blantyre. Lake Malawi lodges increasingly offer satellite Wi-Fi. Government has throttled social media during elections." },
  { slug: "mali", nameEn: "Mali", iso2: "ML", content: "Mali has limited internet with government-imposed shutdowns during political events. Coverage mainly in Bamako. Security situation affects infrastructure. VPN essential during restriction periods." },
  { slug: "burkina-faso", nameEn: "Burkina Faso", iso2: "BF", content: "Burkina Faso has suspended social media during political transitions. Limited internet mainly in Ouagadougou. Security situation affects connectivity. VPN essential during political tensions." },
  { slug: "guinea", nameEn: "Guinea", iso2: "GN", content: "Guinea's internet is limited with government shutdowns during political events. Coverage mainly in Conakry. VPN use is common during social media blocks." },
  { slug: "sierra-leone", nameEn: "Sierra Leone", iso2: "SL", content: "Sierra Leone has growing mobile internet primarily in Freetown. English-speaking. Government has restricted internet during elections. Beach areas may have limited connectivity." },
  { slug: "liberia", nameEn: "Liberia", iso2: "LR", content: "Liberia has limited internet primarily in Monrovia. English-speaking with historical US ties. USD used alongside local currency. Growing mobile adoption through MTN and Orange." },
  { slug: "benin", nameEn: "Benin", iso2: "BJ", content: "Benin has blocked social media during elections and protests. French-speaking. Growing mobile money adoption. VPN essential during political restriction periods." },
  { slug: "togo", nameEn: "Togo", iso2: "TG", content: "Togo has restricted internet during political unrest. French-speaking. Coverage mainly in Lomé. VPN recommended during politically sensitive periods." },
  { slug: "gabon", nameEn: "Gabon", iso2: "GA", content: "Gabon has imposed internet shutdowns during political events. French-speaking. Decent coverage in Libreville. Rainforest areas have no connectivity." },
  { slug: "gambia", nameEn: "Gambia", iso2: "GM", content: "The Gambia imposed a complete internet shutdown during the 2016 elections, driving VPN awareness. English-speaking. Beach resort areas have tourist-grade Wi-Fi." },
  { slug: "eswatini", nameEn: "Eswatini", iso2: "SZ", content: "Eswatini (formerly Swaziland) has limited internet mainly in Mbabane. Government has restricted social media during political tensions. Small country with concentrated infrastructure." },
  { slug: "lesotho", nameEn: "Lesotho", iso2: "LS", content: "Lesotho has limited internet mainly in Maseru. This mountainous kingdom has challenging terrain for infrastructure. South African rand accepted alongside local currency." },
  // Central Asia & Others
  { slug: "armenia", nameEn: "Armenia", iso2: "AM", content: "Armenia has good internet in Yerevan with a growing IT hub. No significant internet restrictions. The tech sector is one of the fastest-growing in the Caucasus." },
  { slug: "belarus", nameEn: "Belarus", iso2: "BY", content: "Belarus has periodically blocked VPN services and restricted internet during political unrest. Government monitors internet extensively. Configure VPN before entering the country." },
  { slug: "turkmenistan", nameEn: "Turkmenistan", iso2: "TM", content: "Turkmenistan has one of the world's most restricted internet environments. VPN use is technically illegal but practiced. Extremely slow and expensive internet. One of the least connected countries globally." },
  { slug: "afghanistan", nameEn: "Afghanistan", iso2: "AF", content: "Afghanistan's internet is restricted under Taliban governance. Social media and content blocking. VPN essential for accessing blocked services. Security situation significantly affects connectivity." },
  { slug: "syria", nameEn: "Syria", iso2: "SY", content: "Syria's internet is severely damaged by conflict. Government monitors traffic extensively. VPN essential but reliability varies by region and controlling authority. Active conflict zones may have no telecommunications." },
];

const contentDir = path.join(process.cwd(), "content", "countries");
let created = 0;
for (const ed of editorials) {
  const filePath = path.join(contentDir, `${ed.slug}.mdx`);
  if (fs.existsSync(filePath)) { console.log(`SKIP: ${ed.slug}.mdx`); continue; }
  const mdx = `---
title: "Best VPN for ${ed.nameEn} (2026)"
description: "Expert-tested VPN recommendations for ${ed.nameEn}. Local internet context and securing your connection."
updatedAt: "2026-04-08"
author: "marcus-johnson"
category: "vpn"
countryIso2: "${ed.iso2}"
---

## ${ed.nameEn}: VPN Guide

${ed.content}

## Why Use a VPN in ${ed.nameEn}

- **Public Wi-Fi protection** — Encrypt traffic on shared networks
- **ISP privacy** — Prevent monitoring of your browsing activity
- **Content access** — Access home-country services while in ${ed.nameEn}
- **Communication security** — Protect messaging and VoIP calls

## Our Recommendations

- **NordVPN** — Fastest speeds with reliable nearest-server connections
- **Surfshark** — Best value with unlimited devices at $2.29/month
- **ExpressVPN** — Most consistent in difficult network conditions
`;
  fs.writeFileSync(filePath, mdx);
  created++;
}
console.log(`Created ${created}. Total editorial files: ${fs.readdirSync(contentDir).length}`);
