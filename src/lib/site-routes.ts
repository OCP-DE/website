export const siteOrigin = 'https://ocean-capital-partners.de';
export const languagePages = {
  de: { home: '/', about: '/ueber-uns', focus: '/fokus', team: '/team', contact: '/kontakt' },
  en: { home: '/home', about: '/about', focus: '/focus', team: '/our-team', contact: '/contact' },
} as const;
export type SitePage = keyof typeof languagePages.de;
export const navigationPages = ['about', 'focus', 'team', 'contact'] as const;
export const legalPaths = ['/impressum', '/datenschutz', '/disclaimer'] as const;
export type LegalPage = 'impressum' | 'datenschutz' | 'disclaimer';
