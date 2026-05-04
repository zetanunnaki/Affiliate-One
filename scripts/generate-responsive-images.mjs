import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, basename, extname } from "path";

const SIZES = [640, 1024];
const DIRS = [
  "public/images/countries",
  "public/images/illustrations",
  "public/images/authors",
];

async function processDir(dir) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    return 0;
  }
  let count = 0;
  for (const file of files) {
    if (!file.endsWith(".webp")) continue;
    if (/-\d+w\.webp$/.test(file)) continue;
    const src = join(dir, file);
    const meta = await sharp(src).metadata();
    const name = basename(file, extname(file));
    for (const w of SIZES) {
      if (meta.width <= w) continue;
      const out = join(dir, `${name}-${w}w.webp`);
      const exists = await stat(out).catch(() => null);
      if (exists) continue;
      await sharp(src).resize(w).webp({ quality: 80 }).toFile(out);
      count++;
    }
  }
  return count;
}

let total = 0;
for (const dir of DIRS) {
  const n = await processDir(dir);
  total += n;
  if (n) console.log(`  ${dir}: ${n} variants`);
}
console.log(`Generated ${total} responsive images`);
