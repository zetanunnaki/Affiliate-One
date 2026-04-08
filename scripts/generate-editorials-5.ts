import fs from "fs";
import path from "path";

const editorials = [
  { slug: "seychelles", nameEn: "Seychelles", iso2: "SC", content: "Seychelles has decent resort Wi-Fi on Mahe, Praslin, and La Digue. Offshore financial sector drives infrastructure." },
  { slug: "kosovo", nameEn: "Kosovo", iso2: "XK", content: "Kosovo has good internet in Pristina with a growing IT sector. Affordable pricing." },
  { slug: "liechtenstein", nameEn: "Liechtenstein", iso2: "LI", content: "Liechtenstein is a microstate with excellent Swiss-adjacent infrastructure." },
  { slug: "monaco", nameEn: "Monaco", iso2: "MC", content: "Monaco has world-class connectivity. Comprehensive 5G coverage in this tiny principality." },
  { slug: "andorra", nameEn: "Andorra", iso2: "AD", content: "Andorra attracts digital nomads with favorable tax policies. Good connectivity." },
  { slug: "mauritania", nameEn: "Mauritania", iso2: "MR", content: "Mauritania has limited internet mainly in Nouakchott. Saharan regions are offline." },
  { slug: "somalia", nameEn: "Somalia", iso2: "SO", content: "Somalia has surprisingly competitive mobile internet despite instability." },
  { slug: "libya", nameEn: "Libya", iso2: "LY", content: "Libya's internet is limited due to ongoing instability. VPN essential for blocked content." },
  { slug: "sudan", nameEn: "Sudan", iso2: "SD", content: "Sudan's internet severely impacted by conflict since 2023. Extended shutdowns occurred." },
  { slug: "yemen", nameEn: "Yemen", iso2: "YE", content: "Yemen has extremely limited internet due to ongoing conflict. One of the least connected." },
  { slug: "equatorial-guinea", nameEn: "Equatorial Guinea", iso2: "GQ", content: "Equatorial Guinea has limited internet despite oil wealth. Coverage in Malabo and Bata." },
  { slug: "central-african-republic", nameEn: "Central African Republic", iso2: "CF", content: "Central African Republic has extremely limited internet. Coverage mainly in Bangui." },
  { slug: "chad", nameEn: "Chad", iso2: "TD", content: "Chad has imposed internet shutdowns during political events. Limited coverage in Ndjamena." },
  { slug: "djibouti", nameEn: "Djibouti", iso2: "DJ", content: "Djibouti has strategic submarine cable infrastructure but domestic internet is expensive." },
  { slug: "eritrea", nameEn: "Eritrea", iso2: "ER", content: "Eritrea is one of the worlds least connected countries. Under 5% internet penetration." },
  { slug: "south-sudan", nameEn: "South Sudan", iso2: "SS", content: "South Sudan has very limited internet affected by conflict. Coverage mainly in Juba." },
  { slug: "burundi", nameEn: "Burundi", iso2: "BI", content: "Burundi has restricted internet during political events. Limited coverage in Bujumbura." },
  { slug: "guinea-bissau", nameEn: "Guinea-Bissau", iso2: "GW", content: "Guinea-Bissau has very limited internet mainly in Bissau. Portuguese-speaking." },
  { slug: "samoa", nameEn: "Samoa", iso2: "WS", content: "Samoa has basic but improving internet. Submarine cable improving speeds." },
  { slug: "tonga", nameEn: "Tonga", iso2: "TO", content: "Tonga internet improved after submarine cable repair post-2022 eruption." },
  { slug: "vanuatu", nameEn: "Vanuatu", iso2: "VU", content: "Vanuatu has basic internet in Port Vila. Outer islands have limited connectivity." },
  { slug: "solomon-islands", nameEn: "Solomon Islands", iso2: "SB", content: "Solomon Islands has very limited internet mainly in Honiara." },
  { slug: "turks-and-caicos", nameEn: "Turks and Caicos", iso2: "TC", content: "Turks and Caicos has good resort connectivity. British territory with USD economy." },
  { slug: "cayman-islands", nameEn: "Cayman Islands", iso2: "KY", content: "Cayman Islands has excellent infrastructure driven by financial services." },
  { slug: "bermuda", nameEn: "Bermuda", iso2: "BM", content: "Bermuda has good infrastructure. British territory with financial services driving connectivity." },
  { slug: "gibraltar", nameEn: "Gibraltar", iso2: "GI", content: "Gibraltar has good connectivity. Online gambling industry drives digital infrastructure." },
  { slug: "faroe-islands", nameEn: "Faroe Islands", iso2: "FO", content: "Faroe Islands have good broadband for a remote archipelago. Danish territory." },
  { slug: "greenland", nameEn: "Greenland", iso2: "GL", content: "Greenland has limited infrastructure. Nuuk has fiber. Remote communities use satellite." },
  { slug: "new-caledonia", nameEn: "New Caledonia", iso2: "NC", content: "New Caledonia has decent infrastructure. French territory with good Noumea coverage." },
  { slug: "french-polynesia", nameEn: "French Polynesia", iso2: "PF", content: "French Polynesia has decent Tahiti and Bora Bora connectivity. Remote atolls use satellite." },
  { slug: "guam", nameEn: "Guam", iso2: "GU", content: "Guam has good infrastructure as a US territory. Military presence drives connectivity." },
  { slug: "us-virgin-islands", nameEn: "US Virgin Islands", iso2: "VI", content: "US Virgin Islands have decent infrastructure. US territory with resort connectivity." },
  { slug: "american-samoa", nameEn: "American Samoa", iso2: "AS", content: "American Samoa has limited infrastructure. Basic connectivity in Pago Pago." },
  { slug: "northern-mariana-islands", nameEn: "Northern Mariana Islands", iso2: "MP", content: "Northern Mariana Islands have decent connectivity on Saipan. US Commonwealth." },
  { slug: "san-marino", nameEn: "San Marino", iso2: "SM", content: "San Marino uses Italian telecom networks. Tiny republic with comprehensive coverage." },
  { slug: "vatican-city", nameEn: "Vatican City", iso2: "VA", content: "Vatican City uses Italian infrastructure. Adequate visitor Wi-Fi in public areas." },
  { slug: "marshall-islands", nameEn: "Marshall Islands", iso2: "MH", content: "Marshall Islands have very limited internet. Coverage mainly in Majuro." },
  { slug: "micronesia", nameEn: "Micronesia", iso2: "FM", content: "Micronesia has very limited internet. Pohnpei has the best connectivity." },
];

const contentDir = path.join(process.cwd(), "content", "countries");
let created = 0;
for (const ed of editorials) {
  const filePath = path.join(contentDir, `${ed.slug}.mdx`);
  if (fs.existsSync(filePath)) { continue; }
  const mdx = `---
title: "Best VPN for ${ed.nameEn} (2026)"
description: "VPN recommendations for ${ed.nameEn}. Local internet context and connection security."
updatedAt: "2026-04-08"
author: "marcus-johnson"
category: "vpn"
countryIso2: "${ed.iso2}"
---

## ${ed.nameEn}: VPN Guide

${ed.content}

## Our Recommendations

- **NordVPN** — Fastest speeds with reliable connections
- **Surfshark** — Best value at $2.29/month with unlimited devices
- **ExpressVPN** — Most consistent in difficult network conditions
`;
  fs.writeFileSync(filePath, mdx);
  created++;
}
console.log(`Created ${created}. Total: ${fs.readdirSync(contentDir).length}`);
