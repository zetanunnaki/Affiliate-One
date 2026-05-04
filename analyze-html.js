const html = require('fs').readFileSync('out/index.html','utf8');
console.log('Total:', html.length, 'bytes', Math.round(html.length/1024)+'KB');

// RSC payload blocks
const rsc = html.match(/<script>self\.__next_f\.push[\s\S]*?<\/script>/g) || [];
let rt = 0;
rsc.forEach(s => rt += s.length);
console.log('RSC payload:', rsc.length, 'blocks,', rt, 'bytes', Math.round(rt/1024)+'KB');

// SVGs
const svgs = html.match(/<svg[\s\S]*?<\/svg>/g) || [];
let st = 0;
svgs.forEach(s => st += s.length);
console.log('SVGs:', svgs.length, 'instances,', st, 'bytes', Math.round(st/1024)+'KB');

// Class attributes
const cls = html.match(/class="[^"]*"/g) || [];
let ct = 0;
cls.forEach(c => ct += c.length);
console.log('Classes:', cls.length, 'attrs,', ct, 'bytes', Math.round(ct/1024)+'KB');

// ld+json
const ldj = html.match(/<script type="application\/ld\+json">[^<]+<\/script>/g) || [];
let lt = 0;
ldj.forEach(s => lt += s.length);
console.log('LD+JSON:', ldj.length, 'tags,', lt, 'bytes', Math.round(lt/1024)+'KB');

// style tags
const sty = html.match(/<style[^>]*>[\s\S]*?<\/style>/g) || [];
let stt = 0;
sty.forEach(s => stt += s.length);
console.log('Styles:', sty.length, 'tags,', stt, 'bytes', Math.round(stt/1024)+'KB');

// Count script tags total
const allScripts = html.match(/<script[\s\S]*?<\/script>/g) || [];
let ast = 0;
allScripts.forEach(s => ast += s.length);
console.log('All scripts:', allScripts.length, 'tags,', ast, 'bytes', Math.round(ast/1024)+'KB');

// Find the biggest RSC payload block
if (rsc.length > 0) {
  const sizes = rsc.map((s, i) => ({ i, len: s.length })).sort((a, b) => b.len - a.len);
  console.log('\nTop 5 RSC blocks:');
  sizes.slice(0, 5).forEach(s => console.log('  Block', s.i, ':', s.len, 'bytes', Math.round(s.len/1024)+'KB'));

  // Show a snippet of the largest
  console.log('\nLargest RSC block preview (first 500 chars):');
  console.log(rsc[sizes[0].i].substring(0, 500));
}
