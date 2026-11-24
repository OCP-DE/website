// Small progressive enhancements replacing the former React state. The site is fully
// readable without JavaScript; these only add menus, toggles and convenience actions.

const root = document.documentElement;

function storeLanguage(lang: string) {
  try {
    sessionStorage.setItem('ocean-language', lang);
  } catch {
    /* storage unavailable (private mode) — nothing to remember */
  }
}

// Content pages remember their language, so legal pages open in the same language.
const pageLang = root.dataset['pageLang'];
if (pageLang) storeLanguage(pageLang);

// Legal pages: switch the language in place.
function setLegalLanguage(lang: 'de' | 'en') {
  root.setAttribute('data-legal-lang', lang);
  root.lang = lang;
  storeLanguage(lang);
}
document.querySelectorAll<HTMLAnchorElement>('[data-legal-switch]').forEach((link) => {
  link.addEventListener('click', () => setLegalLanguage(link.dataset['legalSwitch'] === 'en' ? 'en' : 'de'));
});
if (root.hasAttribute('data-legal-lang')) {
  window.addEventListener('hashchange', () => {
    if (location.hash === '#english') setLegalLanguage('en');
    if (location.hash === '#deutsch') setLegalLanguage('de');
  });
  // Language-specific anchors (e.g. #bildnachweis) exist once per language; jump to the visible one.
  const id = decodeURIComponent(location.hash.slice(1));
  if (id && id !== 'english' && id !== 'deutsch') {
    const target = document.querySelector<HTMLElement>(`[data-lang="${root.getAttribute('data-legal-lang')}"] [data-anchor="${CSS.escape(id)}"]`);
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }
}

// Mobile menu.
document.querySelectorAll<HTMLButtonElement>('[data-menu-toggle]').forEach((button) => {
  const menu = document.getElementById(button.getAttribute('aria-controls') ?? '');
  if (!menu) return;
  const openIcon = button.querySelector<HTMLElement>('[data-icon-open]');
  const closeIcon = button.querySelector<HTMLElement>('[data-icon-close]');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', (open ? button.dataset['labelClose'] : button.dataset['labelOpen']) ?? '');
    menu.hidden = !open;
    if (openIcon) openIcon.hidden = open;
    if (closeIcon) closeIcon.hidden = !open;
  });
});

// Team biographies.
document.querySelectorAll<HTMLButtonElement>('[data-team-toggle]').forEach((button) => {
  const card = button.closest<HTMLElement>('.team-person');
  const bio = card?.querySelector<HTMLElement>('.team-bio');
  const label = button.querySelector<HTMLElement>('[data-label]');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    card?.classList.toggle('is-open', open);
    bio?.setAttribute('aria-hidden', String(!open));
    if (label) label.textContent = (open ? button.dataset['less'] : button.dataset['more']) ?? '';
  });
});

// Scroll reveal: fade sections in once as they enter the viewport (CSS handles reduced motion).
const reveal = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reveal.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    // Trigger as soon as any part is inside the lower 90 % of the window, so even very tall
    // blocks (team grid on phones) appear reliably.
    { rootMargin: '0px 0px -10% 0px', threshold: 0 },
  );
  reveal.forEach((el) => io.observe(el));
} else {
  reveal.forEach((el) => el.classList.add('is-visible'));
}

// Compass (About): fade in once when it comes into view (styles in motion.css).
document.querySelectorAll<HTMLElement>('.compass-band').forEach((band) => {
  if (!('IntersectionObserver' in window)) {
    band.classList.add('is-visible');
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        band.classList.add('is-visible');
        io.disconnect();
      }
    },
    { rootMargin: '0px 0px -15% 0px', threshold: 0 },
  );
  io.observe(band);
});

// Legal pages: obfuscated address becomes a real mailto link once scripts run.
// The address is only assembled in the browser, keeping it away from simple scrapers.
document.querySelectorAll<HTMLAnchorElement>('[data-email-link]').forEach((link) => {
  const subject = link.dataset['subject'];
  link.href = `mailto:${link.dataset['user']}@${link.dataset['domain']}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
});
