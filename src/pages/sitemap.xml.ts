import type { APIRoute } from 'astro';
import { languagePages, siteOrigin } from '../lib/site-routes';

// The ten DE/EN content pages. Legal pages (noindex), the e-mail disclaimer and the
// legacy redirect paths are deliberately not listed.
export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const paths = [...Object.values(languagePages.de), ...Object.values(languagePages.en)].sort();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${siteOrigin}${path}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
