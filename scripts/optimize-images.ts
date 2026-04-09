/**
 * Convert PNG images in public/images/** to WebP for major file-size wins.
 *
 * - Walks public/images/ recursively
 * - For each .png, writes a .webp sibling at quality 82
 * - Skips if .webp is newer than the .png
 * - Reports total bytes saved
 *
 * Run: npx tsx scripts/optimize-images.ts
 */

import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");
const QUALITY = 82;

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith(".png")) out.push(full);
  }
  return out;
}

async function convert(pngPath: string): Promise<{ skipped: boolean; before: number; after: number }> {
  const webpPath = pngPath.replace(/\.png$/, ".webp");
  const pngStat = fs.statSync(pngPath);

  if (fs.existsSync(webpPath)) {
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs >= pngStat.mtimeMs) {
      return { skipped: true, before: pngStat.size, after: webpStat.size };
    }
  }

  await sharp(pngPath).webp({ quality: QUALITY, effort: 6 }).toFile(webpPath);
  const after = fs.statSync(webpPath).size;
  return { skipped: false, before: pngStat.size, after };
}

async function main() {
  if (!fs.existsSync(ROOT)) {
    console.error(`No directory at ${ROOT}`);
    process.exit(1);
  }

  const files = walk(ROOT);
  console.log(`Found ${files.length} PNG file(s) under public/images/\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const rel = path.relative(process.cwd(), file);
    try {
      const r = await convert(file);
      totalBefore += r.before;
      totalAfter += r.after;
      if (r.skipped) {
        skipped++;
        process.stdout.write(`  · ${rel} (cached)\n`);
      } else {
        converted++;
        const pct = ((1 - r.after / r.before) * 100).toFixed(0);
        console.log(`  ✓ ${rel}  ${(r.before / 1024).toFixed(0)}KB → ${(r.after / 1024).toFixed(0)}KB  (-${pct}%)`);
      }
    } catch (err) {
      console.log(`  ✗ ${rel}: ${(err as Error).message}`);
    }
  }

  const savedKB = (totalBefore - totalAfter) / 1024;
  console.log(`\n=== Done ===`);
  console.log(`  Converted: ${converted}   Cached: ${skipped}`);
  console.log(`  Total:     ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
  console.log(`  Saved:     ${savedKB > 1024 ? `${(savedKB / 1024).toFixed(1)} MB` : `${savedKB.toFixed(0)} KB`}`);
}

main().catch((err) => {
  console.error("fatal:", err);
  process.exit(1);
});
