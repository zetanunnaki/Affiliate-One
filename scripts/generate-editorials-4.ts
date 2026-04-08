import fs from "fs";
import path from "path";

const editorials = [
  // Caribbean & Americas territories
  { slug: "puerto-rico", nameEn: "Puerto Rico", iso2: "PR", content: "Puerto Rico is a US territory with good broadband in San Juan metro area. USD economy with US regulations. Growing tech and co-working scene in Old San Juan and Condado." },
  { slug: "curacao", nameEn: "Curacao", iso2: "CW", content: "Curaçao is a Dutch Caribbean territory with good digital infrastructure driven by the online gaming industry. Open internet with no restrictions. Growing digital economy." },
  { slug: "aruba", nameEn: "Aruba", iso2: "AW", content: "Aruba has good Caribbean infrastructure. Dutch territory with USD accepted. Tourist-focused economy drives reliable hotel and resort Wi-Fi. Small island with comprehensive coverage." },
  { slug: "antigua-and-barbuda", nameEn: "Antigua and Barbuda", iso2: "AG", content: "Antigua and Barbuda has decent Caribbean connectivity. English-speaking with growing digital nomad infrastructure. Both islands covered by mobile networks." },
  { slug: "saint-lucia", nameEn: "Saint Lucia", iso2: "LC", content: "Saint Lucia has good resort Wi-Fi infrastructure. The Pitons area and Rodney Bay are well-connected. English-speaking Caribbean island with open internet." },
  { slug: "grenada", nameEn: "Grenada", iso2: "GD", content: "Grenada has basic but functional internet for a Caribbean island. Grand Anse beach and St. George's have decent connectivity. English-speaking with no restrictions." },
  { slug: "dominica", nameEn: "Dominica", iso2: "DM", content: "Dominica is nature-focused with basic internet. Roseau has coverage. Eco-lodges and rainforest areas may have satellite-only or no connectivity." },
  { slug: "saint-kitts-and-nevis", nameEn: "Saint Kitts and Nevis", iso2: "KN", content: "Saint Kitts and Nevis has decent connectivity for a small nation. Citizenship by Investment program attracts tech-savvy residents. Both islands covered." },
  { slug: "saint-vincent-grenadines", nameEn: "Saint Vincent and the Grenadines", iso2: "VC", content: "Saint Vincent has basic internet. Grenadine islands (Bequia, Mustique) have resort Wi-Fi. Remote sailing destinations may be offline." },
  { slug: "sint-maarten", nameEn: "Sint Maarten", iso2: "SX", content: "Sint Maarten (Dutch side) has good tourist infrastructure. Shared island with French Saint-Martin. Tourist-driven economy ensures reliable hotel connectivity." },
  { slug: "saint-martin", nameEn: "Saint Martin", iso2: "MF", content: "Saint Martin (French side) has good connectivity. French territory with Euro currency. French digital infrastructure and rights apply." },
  { slug: "belize", nameEn: "Belize", iso2: "BZ", content: "Belize is English-speaking with improving internet. Ambergris Caye and Caye Caulker have tourist Wi-Fi. Jungle areas have limited connectivity. USD-pegged currency." },
  { slug: "guyana", nameEn: "Guyana", iso2: "GY", content: "Guyana has improving infrastructure driven by oil revenues. Georgetown has decent coverage. English-speaking. Interior and Amazonian regions have very limited connectivity." },
  { slug: "suriname", nameEn: "Suriname", iso2: "SR", content: "Suriname has basic internet in Paramaribo. Dutch-speaking. Interior and rainforest regions have very limited connectivity. Small but growing online community." },
  { slug: "paraguay", nameEn: "Paraguay", iso2: "PY", content: "Paraguay has growing internet in Asuncion and major cities. Guaraní and Spanish speaking. Rural areas and Chaco region have very limited connectivity." },
  { slug: "bolivia", nameEn: "Bolivia", iso2: "BO", content: "Bolivia has growing internet in La Paz, Cochabamba, and Santa Cruz. Altitude and remote areas affect coverage. No significant internet restrictions." },
  { slug: "honduras", nameEn: "Honduras", iso2: "HN", content: "Honduras has growing mobile internet. Bay Islands (Roatán) have tourist connectivity. Tegucigalpa and San Pedro Sula have the best broadband. VPNs legal and unrestricted." },
  { slug: "nicaragua", nameEn: "Nicaragua", iso2: "NI", content: "Nicaragua has restricted social media during political events. San Juan del Sur and Granada have tourist Wi-Fi. Caribbean coast has limited coverage." },
  // Pacific & Asia territories
  { slug: "papua-new-guinea", nameEn: "Papua New Guinea", iso2: "PG", content: "Papua New Guinea has very limited internet. Port Moresby has basic coverage. Highlands and remote areas are completely offline. One of the least connected Pacific nations." },
  { slug: "timor-leste", nameEn: "Timor-Leste", iso2: "TL", content: "Timor-Leste has limited but growing internet in Dili. USD-based economy. Rural areas have very limited connectivity. One of Asia's newest nations." },
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
- **ISP privacy** — Prevent browsing activity monitoring
- **Content access** — Access home-country services while abroad
- **Remote work security** — Protect work data on any network

## Our Recommendations

- **NordVPN** — Fastest speeds with reliable nearest-server connections
- **Surfshark** — Best value with unlimited devices at $2.29/month
- **ExpressVPN** — Most consistent in variable network conditions
`;
  fs.writeFileSync(filePath, mdx);
  created++;
}
console.log(`Created ${created}. Total: ${fs.readdirSync(contentDir).length}`);
