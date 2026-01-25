import { writeFileSync } from 'fs';
import { resolve } from 'path';

interface Route {
  url: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const routes: Route[] = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/games', changefreq: 'daily', priority: 1.0 },
  { url: '/tools', changefreq: 'daily', priority: 1.0 },
  { url: '/contact', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'daily', priority: 1.0 },
];

const hostname = 'https://orosemo.de';

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${hostname}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const sitemapPath = resolve('public/sitemap.xml');
writeFileSync(sitemapPath, xml);
console.log('✓ Sitemap generated:', sitemapPath);
