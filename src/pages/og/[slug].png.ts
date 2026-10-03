import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';
import { profile } from '../../data/profile';

// Link-preview images (1200×630), one per page, rendered at build time.
export const getStaticPaths = (async () => {
  const work = await getCollection('work');
  return [
    {
      params: { slug: 'home' },
      props: {
        kicker: 'RAINER B. · CALGARY',
        title: 'I design the systems that connect people, data and processes.',
      },
    },
    ...work.map((entry) => ({
      params: { slug: entry.id },
      props: { kicker: 'ARCHITECTURE CASE STUDY', title: entry.data.title },
    })),
  ];
}) satisfies GetStaticPaths;

const escapeXml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text: string, max: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    if ((line + ' ' + word).trim().length > max) {
      lines.push(line);
      line = word;
    } else {
      line = (line + ' ' + word).trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

export const GET: APIRoute = async ({ props }) => {
  const { kicker, title } = props as { kicker: string; title: string };
  const lines = wrap(title, 26).slice(0, 4);
  const titleSvg = lines
    .map(
      (line, i) =>
        `<text x="80" y="${250 + i * 76}" font-size="64" font-weight="700" fill="#e8edf4">${escapeXml(line)}</text>`,
    )
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#141b29" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#0a0e15"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <g transform="translate(80 70)">
    <path d="M3 2h7v32H3z" fill="#e8edf4"/>
    <path d="M10 2h7.5a9 9 0 0 1 0 18H10v-6h6.8a3 3 0 0 0 0-6H10z" fill="#e8edf4"/>
    <path d="M13.5 20h7l8 14H21z" fill="#e8edf4"/>
    <circle cx="35" cy="30.5" r="3.5" fill="#ff7a6b"/>
  </g>
  <text x="80" y="170" font-family="DejaVu Sans Mono, Consolas, monospace" font-size="22" letter-spacing="3" fill="#ff7a6b">${escapeXml(kicker)}</text>
  <g font-family="DejaVu Sans, Segoe UI, Arial, sans-serif">${titleSvg}</g>
  <g transform="translate(860 330)" fill="none" stroke-width="2">
    <path d="M0 60 L120 0 L240 60 L120 120 Z" stroke="#63c7ff" fill="rgba(99,199,255,0.06)"/>
    <path d="M0 110 L120 50 L240 110 L120 170 Z" stroke="#ff7a6b" fill="rgba(255,122,107,0.06)"/>
    <path d="M0 160 L120 100 L240 160 L120 220 Z" stroke="#63c7ff" fill="rgba(99,199,255,0.06)"/>
  </g>
  <text x="80" y="570" font-family="DejaVu Sans Mono, Consolas, monospace" font-size="22" fill="#9ba7ba">${escapeXml(new URL(profile.siteUrl).host)}</text>
</svg>`;

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
