import { writeFile, mkdir } from 'fs/promises';
import { dirname, join } from 'path';

const BASE = 'https://playerzero.ai';
const OUT = new URL('../public', import.meta.url).pathname;

// Direct SVG/static files (no _next/image processing)
const directFiles = [
  { url: '/customer-logos/georgia-pacific-trim.svg', out: 'customer-logos/georgia-pacific-trim.svg' },
  { url: '/customer-logos/zuora-wordmark.svg', out: 'customer-logos/zuora-wordmark.svg' },
  { url: '/customer-logos/enablecomp.svg', out: 'customer-logos/enablecomp.svg' },
  { url: '/customer-logos/onboard-logo.svg', out: 'customer-logos/onboard-logo.svg' },
  { url: '/customer-logos/keydata.svg', out: 'customer-logos/keydata.svg' },
  { url: '/icon.svg', out: 'seo/icon.svg' },
];

// _next/image proxied files — use original path
const nextImages = [
  { url: '/customer-logos/nylas.png', out: 'customer-logos/nylas.png', w: 256 },
  { url: '/customer-logos/sema4.avif', out: 'customer-logos/sema4.avif', w: 256 },
  { url: '/customer-logos/higher-logic.webp', out: 'customer-logos/higher-logic.webp', w: 256 },
  { url: '/customer-logos/icims.png', out: 'customer-logos/icims.png', w: 256 },
  { url: '/customer-logos/cayuse-logo-black.png', out: 'customer-logos/cayuse-logo-black.png', w: 256 },
  { url: '/customer-logos/connexure.png', out: 'customer-logos/connexure.png', w: 256 },
  { url: '/customer-logos/cyrano.png', out: 'customer-logos/cyrano.png', w: 256 },
  { url: '/customer-logos/zuora_logomark.png', out: 'customer-logos/zuora_logomark.png', w: 48 },
  { url: '/customer-logos/nylas-logomark.jpeg', out: 'customer-logos/nylas-logomark.jpeg', w: 48 },
  { url: '/customer-logos/onboard-logomark.jpeg', out: 'customer-logos/onboard-logomark.jpeg', w: 48 },
  { url: '/marketing/zuora-case-study.jpg', out: 'marketing/zuora-case-study.jpg', w: 1200 },
  { url: '/marketing/nylas-cover-image.avif', out: 'marketing/nylas-cover-image.avif', w: 1200 },
  { url: '/marketing/keydata-cover-image.jpg', out: 'marketing/keydata-cover-image.jpg', w: 1200 },
  { url: '/marketing/onboard-cover-image.avif', out: 'marketing/onboard-cover-image.avif', w: 1200 },
];

async function download(url, outPath) {
  const fullOut = join(OUT, outPath);
  await mkdir(dirname(fullOut), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(fullOut, buf);
    console.log(`✓ ${outPath} (${buf.length} bytes)`);
  } catch (e) {
    console.error(`✗ ${outPath}: ${e.message}`);
  }
}

async function run() {
  const batch = (arr, n) => {
    const batches = [];
    for (let i = 0; i < arr.length; i += n) batches.push(arr.slice(i, i + n));
    return batches;
  };

  // Direct files
  for (const b of batch(directFiles, 4)) {
    await Promise.all(b.map(f => download(`${BASE}${f.url}`, f.out)));
  }

  // Next images — use _next/image endpoint
  for (const b of batch(nextImages, 4)) {
    await Promise.all(b.map(f =>
      download(`${BASE}/_next/image?url=${encodeURIComponent(f.url)}&w=${f.w}&q=75`, f.out)
    ));
  }

  console.log('\nDone!');
}

run();
