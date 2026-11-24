// Security contact (RFC 9116), generated on every build.
// The standard requires an expiry date so that outdated contact details are not trusted
// forever. It is set to one year after the build, and the site is rebuilt automatically every
// month (schedule in .github/workflows/deploy.yml) - so the date renews itself.
import type { APIRoute } from 'astro';
import { siteOrigin } from '../../lib/site-routes';

export const GET: APIRoute = () => {
  const expires = new Date();
  expires.setUTCFullYear(expires.getUTCFullYear() + 1);
  expires.setUTCHours(0, 0, 0, 0);
  const body = [
    `# Security contact for ${new URL(siteOrigin).host} (RFC 9116).`,
    'Contact: mailto:kontakt@ocean-capital-partners.de',
    `Expires: ${expires.toISOString()}`,
    'Preferred-Languages: de, en',
    `Canonical: ${siteOrigin}/.well-known/security.txt`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
