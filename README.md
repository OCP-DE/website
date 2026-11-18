# Ocean Capital Partners – Website

Public website of **Ocean Capital Partners GmbH**, Hamburg (`ocean-capital-partners.de`).
A static [Astro](https://astro.build) site in German and English. There's no server, no database and no contact form.

## Quick start

```bash
nvm use            # Node version from .nvmrc (22)
npm ci             # install exactly what package-lock.json pins
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
npm run check      # Astro + TypeScript checks
```

## Structure

| Path | Purpose |
|---|---|
| `src/data/site-content.ts` | All page text, DE and EN (single source of truth) |
| `src/data/privacy-content.ts` | Privacy notice (Datenschutzerklärung), DE and EN |
| `src/data/imprint-content.ts` | Imprint (Impressum), DE and EN |
| `src/lib/seo.ts` | Titles, descriptions, canonicals, `hreflang`, JSON-LD |
| `src/lib/site-routes.ts` | URL map DE ↔ EN, navigation |
| `src/layouts/BaseLayout.astro` | `<head>`, header, footer |
| `src/components/site/` | Page sections (home, about/focus/team, contact) |
| `src/components/legal/` | Imprint and privacy rendering |
| `src/pages/` | One file per URL, plus `sitemap.xml.ts` and `404.astro` |
| `src/assets/` | Photos, optimised to WebP at build time |
| `src/scripts/site.ts` | Small client scripts (menu, bio toggles, language switch, email) |
| `public/` | Logos, favicon, OG image, `robots.txt`, `CNAME` |

### URLs

| DE | EN |
|---|---|
| `/` | `/home` |
| `/ueber-uns` | `/about` |
| `/fokus` | `/focus` |
| `/team` | `/our-team` |
| `/kontakt` | `/contact` |

- Legal pages: `/impressum`, `/datenschutz` and `/disclaimer`. Each serves one URL with both languages; `#english` / `#deutsch` select the language. They are `noindex` and not in the sitemap.
- Legacy URLs (`/de/*`, `/en/*`, `/philosophy`) redirect via small redirect pages generated from `astro.config.mjs` (`redirects`), with a canonical link to the new URL.

## Design layers

- `src/styles.css` – original layout and design tokens.
- `src/styles/motion.css` – subtle motion (hero drift, scroll reveal, compass); respects reduced motion.
- `src/styles/design/*.css` + `src/data/design.ts` – design layers on top of the base styles, each switchable on its own.

## Hosting: GitHub Pages

`.github/workflows/deploy.yml` builds the site and deploys `dist/` to GitHub Pages on every push to `main` (or manually via *Actions → Deploy → Run workflow*). URLs stay extension-free (`build.format: 'file'`).

One-time setup:
1. *Settings → Pages → Build and deployment → Source:* **GitHub Actions**.
2. *Settings → Pages → Custom domain:* `ocean-capital-partners.de`, then tick **Enforce HTTPS** once the certificate is issued. `public/CNAME` must stay in the repo.
3. DNS at the domain provider: apex `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and `AAAA` `2606:50c0:8000::153` … `8003::153`); `www` as `CNAME` to `ocp-de.github.io`. Keep the existing MX/SPF/DKIM records for Microsoft 365 untouched.
4. Optionally verify the domain for the organisation (*Organisation settings → Pages → Verified domains*) to prevent takeovers.

There are no environment variables or secrets.

## Contributing

Read [AGENTS.md](AGENTS.md) before changing anything. The short version: branch → pull request → review. Never push directly to `main` (it deploys).

## Licences

- Code and content: © Ocean Capital Partners GmbH
- Font Manrope: SIL OFL, see [docs/licenses/Manrope-OFL.txt](docs/licenses/Manrope-OFL.txt)
- Icons: Lucide (ISC)
- Hamburg photo: CC BY-SA 2.0, credited in the imprint (`/impressum#bildnachweis`)
