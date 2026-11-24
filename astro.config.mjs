import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import contentSecurityPolicy from './integrations/content-security-policy.mjs';

// URLs stay stable: no trailing slash, `/ueber-uns` etc.
// `build.format: 'file'` emits `ueber-uns.html`, which GitHub Pages serves at
// `/ueber-uns`.
export default defineConfig({
  site: 'https://ocean-capital-partners.de',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Legacy URLs: Astro generates small redirect pages (meta refresh + canonical).
  redirects: {
    '/de': '/',
    '/de/about': '/ueber-uns',
    '/de/focus': '/fokus',
    '/de/team': '/team',
    '/de/contact': '/kontakt',
    '/en': '/home',
    '/en/about': '/about',
    '/en/focus': '/focus',
    '/en/team': '/our-team',
    '/en/contact': '/contact',
    '/philosophy': '/fokus',
  },
  // Security: a Content Security Policy is written into every built page.
  integrations: [contentSecurityPolicy()],
  vite: { plugins: [tailwindcss()] },
});
