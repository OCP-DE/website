// Content Security Policy for the static build.
//
// GitHub Pages cannot send custom HTTP headers, so the policy is written into every page as
// <meta http-equiv="Content-Security-Policy">. Astro inlines its small scripts, so after the
// build each page's own inline scripts are hashed and only exactly those may run - anything
// injected later (or loaded from another domain) is blocked by the browser.
//
// Everything the site uses is served from its own domain: font, images, styles, scripts.
// Adding a third-party service (font, map, video, analytics) would need a change here AND in
// the privacy notice first (see AGENTS.md).
import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(path)));
    else if (entry.name.endsWith('.html')) out.push(path);
  }
  return out;
}

// Inline scripts the browser executes (classic or module); JSON-LD data blocks are not code.
const inlineScript = /<script(?![^>]*\bsrc=)(?:\s+type="module")?\s*>([\s\S]*?)<\/script>/g;

function policy(hashes) {
  return [
    "default-src 'self'",
    `script-src 'self'${hashes.map((h) => ` '${h}'`).join('')}`,
    // Inline style attributes are used for small layout values (e.g. reveal delays).
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    // The build embeds one tiny font subset directly in the stylesheet (data: URL).
    "font-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'none'",
    'upgrade-insecure-requests',
  ].join('; ');
}

export default function contentSecurityPolicy() {
  return {
    name: 'ocp-content-security-policy',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = await htmlFiles(root);
        let count = 0;
        for (const file of files) {
          const html = await readFile(file, 'utf8');
          if (html.includes('http-equiv="Content-Security-Policy"')) continue;
          // Legacy-URL redirect pages contain no code and no charset; nothing to protect.
          if (html.includes('http-equiv="refresh"')) continue;
          const hashes = [...html.matchAll(inlineScript)]
            .map((m) => m[1])
            .filter((code) => code.trim())
            .map((code) => `sha256-${createHash('sha256').update(code, 'utf8').digest('base64')}`);
          const meta = `<meta http-equiv="Content-Security-Policy" content="${policy([...new Set(hashes)])}">`;
          // Place it right after <meta charset>, before any script.
          const next = html.replace(/(<meta charset="[^"]*"\s*\/?>)/i, `$1${meta}`);
          if (next === html) {
            logger.warn(`No <meta charset> found, CSP not added: ${file}`);
            continue;
          }
          await writeFile(file, next);
          count++;
        }
        logger.info(`Content Security Policy added to ${count} pages.`);
      },
    },
  };
}
