import { content, type Language } from '../data/site-content';
import { languagePages, siteOrigin, type LegalPage, type SitePage } from './site-routes';
import { organizationLogo } from './brand-logo';
import { PHONE } from '../data/imprint-content';

export const siteName = 'Ocean Capital Partners';

export interface HeadData {
  title: string;
  description: string;
  ogDescription: string;
  language: Language;
  canonical: string;
  robots?: string;
  alternates: { hreflang: string; href: string }[];
  jsonLd: object[];
}

export const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteOrigin}/#organization`,
  name: siteName,
  legalName: 'Ocean Capital Partners GmbH',
  alternateName: 'Ocean Capital Partners GmbH Hamburg',
  url: `${siteOrigin}/`,
  logo: new URL(organizationLogo, siteOrigin).href,
  image: new URL('/images/og-default.jpg', siteOrigin).href,
  // Identifies the company unambiguously (Hamburg, German register) - the same facts as the
  // imprint, so search engines do not confuse it with other companies of a similar name.
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kegelhofstraße 73',
    postalCode: '20251',
    addressLocality: 'Hamburg',
    addressCountry: 'DE',
  },
  telephone: PHONE.replace(/\s+/g, ' '),
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'Handelsregister Amtsgericht Hamburg',
    value: 'HRB 202211',
  },
  areaServed: [
    { '@type': 'Country', name: 'Deutschland' },
    { '@type': 'Country', name: 'Österreich' },
    { '@type': 'Country', name: 'Schweiz' },
  ],
  knowsAbout: ['Private Equity', 'Mittelstand', 'Unternehmensnachfolge', 'Carve-outs', 'Sondersituationen'],
};

const homeTitles = {
  de: 'Ocean Capital Partners | Mittelstandsinvestor aus Hamburg',
  en: 'Ocean Capital Partners | Private Equity Investor from Hamburg',
} as const;
const shareDescriptions = {
  de: 'Investor für mittelständische Unternehmen bei Unternehmensnachfolgen, Konzernausgliederungen und in Sondersituationen.',
  en: 'Investor for mid-sized businesses with a focus on ownership succession, corporate carve-outs and special situations.',
} as const;
const names = {
  de: { home: 'Start', about: 'Über uns', focus: 'Fokus', team: 'Team – Partner und Beirat', contact: 'Kontakt' },
  en: { home: 'Home', about: 'About Us', focus: 'Focus', team: 'Team – Partners and Advisory Board', contact: 'Contact' },
};
const descriptions = {
  de: {
    home: 'Ocean Capital Partners GmbH ist ein operativer Mittelstandsinvestor aus Hamburg für Unternehmensnachfolgen, Carve-outs und Sondersituationen.',
    about:
      'Ocean Capital Partners verbindet unternehmerisches Denken, operative Exzellenz und finanzwirtschaftliche Expertise mit einem langfristigen Beteiligungsansatz.',
    focus:
      'Unser Beteiligungsfokus: Unternehmen in Deutschland, Österreich und der Schweiz bei Nachfolge, Carve-outs und Sondersituationen. Entdecken Sie unsere Investitionskriterien.',
    team: 'Die Partner Dr. Andre Vollbrecht und René Ufferhardt sowie der Beirat mit Lutz Wiemer, Guido Zoeller und Viktor Kettler – mit Erfahrung aus Industrie, Private Equity, Restrukturierung, Finanzen und Steuern.',
    contact: 'Kontaktieren Sie Ocean Capital Partners in Hamburg mit Ihrer Anfrage.',
  },
  en: {
    home: 'We are an owner-managed investor based in Hamburg, with a hands-on approach to mid-sized businesses. We contribute expertise and entrepreneurial capital to develop companies, particularly in ownership succession, corporate carve-outs and special situations.',
    about:
      "Discover Ocean Capital Partners' investment approach: entrepreneurial thinking, operational expertise and long-term ownership of mid-sized businesses.",
    focus:
      'Our investment focus: ownership succession, corporate carve-outs and special situations in Germany, Austria and Switzerland. Explore our investment criteria.',
    team: 'Partners Dr. Andre Vollbrecht and René Ufferhardt and advisory board members Lutz Wiemer, Guido Zoeller and Viktor Kettler – with experience in industry, private equity, restructuring, finance and tax.',
    contact: 'A strong partnership starts with a conversation. Get in touch with Ocean Capital Partners in Hamburg.',
  },
};

function pageTitle(title: string, language: Language) {
  return title ? `${siteName} | ${title}` : homeTitles[language];
}

type TeamPerson = {
  slug: string;
  name: string;
  role: Record<Language, string>;
  advisory: boolean;
  sameAs?: string[];
  subjectOf?: object | object[];
  // Current organisations named in the visible biography (helps disambiguate the person).
  affiliation?: string[];
};
const teamPeople: TeamPerson[] = [
  {
    slug: 'guido-zoeller',
    name: 'Guido Zoeller',
    role: { de: 'Mitglied des Beirats', en: 'Advisory Board Member' },
    advisory: true,
    sameAs: ['https://de.wikipedia.org/wiki/Guido_Zoeller', 'https://www.linkedin.com/in/guido-zoeller-71756180/'],
    affiliation: ['Société Générale'],
  },
  {
    slug: 'andre-vollbrecht',
    name: 'Dr. Andre Vollbrecht',
    role: { de: 'Partner', en: 'Partner' },
    advisory: false,
    subjectOf: { '@type': 'WebPage', url: 'https://notare-amgaensemarkt.de/de/historie' },
  },
  {
    slug: 'rene-ufferhardt',
    name: 'René Ufferhardt',
    role: { de: 'Partner', en: 'Partner' },
    advisory: false,
    sameAs: ['https://www.companyhouse.de/p/Rene-Ufferhardt-liaqDrwlrEqio221IaapH0iBTUU'],
  },
  {
    slug: 'lutz-wiemer',
    name: 'Lutz Wiemer',
    role: { de: 'Mitglied des Beirats', en: 'Advisory Board Member' },
    advisory: true,
    sameAs: ['https://www.linkedin.com/in/lutz-wiemer-227550110/'],
    subjectOf: { '@type': 'Article', url: 'https://iz.jobs/news/lutz-wiemer-91250/' },
  },
  {
    slug: 'viktor-kettler',
    name: 'Viktor Kettler',
    role: { de: 'Mitglied des Beirats', en: 'Advisory Board Member' },
    advisory: true,
    sameAs: ['https://www.xing.com/profile/Viktor_Kettler'],
    affiliation: ['Naust Gruppe'],
    subjectOf: [
      { '@type': 'WebPage', url: 'https://www.naust.de/viktor-kettler-neuer-partner/' },
      { '@type': 'Article', url: 'https://www.regiomanager.de/artikel/naust-hunecke-und-partner-rundum-gut-beraten/' },
    ],
  },
];

function teamJsonLd(language: Language) {
  const advisoryPeople = content[language].advisoryPeople as string[][];
  return teamPeople.map(({ slug, name, role, advisory, sameAs, subjectOf, affiliation }) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteOrigin}/team#${slug}`,
    name,
    url: `${siteOrigin}${languagePages[language].team}`,
    // Visible role on the team page; advisory board members are not employees.
    jobTitle: role[language],
    ...(advisory ? {} : { worksFor: { '@id': organizationData['@id'] } }),
    ...(sameAs ? { sameAs } : {}),
    ...(subjectOf ? { subjectOf } : {}),
    ...(affiliation ? { affiliation: affiliation.map((org) => ({ '@type': 'Organization', name: org })) } : {}),
    memberOf: {
      '@type': 'OrganizationRole',
      // Advisory role names come from the visible label, so structured data never implies employment.
      roleName: advisory
        ? (advisoryPeople.find(([person]) => person === name)?.[1]?.split(' · ')[0] ?? role[language])
        : role[language],
      memberOf: { '@id': organizationData['@id'] },
    },
  }));
}

export function pageHead(page: SitePage, language: Language): HeadData {
  const path = languagePages[language][page];
  return {
    title: pageTitle(page === 'home' ? '' : names[language][page], language),
    description: descriptions[language][page],
    ogDescription: shareDescriptions[language],
    language,
    canonical: `${siteOrigin}${path}`,
    alternates: [
      ...(['de', 'en'] as const).map((locale) => ({
        hreflang: locale,
        href: `${siteOrigin}${languagePages[locale][page]}`,
      })),
      { hreflang: 'x-default', href: `${siteOrigin}${languagePages.de[page]}` },
    ],
    jsonLd:
      page === 'home'
        ? [
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              // Site name shown by Google above the search result.
              name: siteName,
              alternateName: ['Ocean Capital Partners GmbH', 'OCP Hamburg'],
              url: `${siteOrigin}/`,
              inLanguage: language,
              publisher: { '@id': organizationData['@id'] },
            },
          ]
        : page === 'team'
          ? teamJsonLd(language)
          : [],
  };
}

export function legalHead(page: LegalPage): HeadData {
  const title = page === 'impressum' ? 'Impressum' : page === 'datenschutz' ? 'Datenschutz' : 'E-Mail-Disclaimer';
  const description =
    page === 'impressum'
      ? 'Impressum und rechtliche Angaben der Ocean Capital Partners GmbH, Hamburg.'
      : page === 'datenschutz'
        ? 'Datenschutzerklärung der Ocean Capital Partners GmbH, Hamburg.'
        : 'Hinweise zur E-Mail-Kommunikation der Ocean Capital Partners GmbH, Hamburg.';
  return {
    title: pageTitle(title, 'de'),
    description,
    ogDescription: shareDescriptions.de,
    language: 'de',
    canonical: `${siteOrigin}/${page}`,
    robots: page === 'disclaimer' ? 'noindex, follow, nosnippet' : 'noindex, follow',
    alternates: [],
    jsonLd: [],
  };
}

export function notFoundHead(): HeadData {
  return {
    title: `${siteName} | Seite nicht gefunden`,
    description: descriptions.de.home,
    ogDescription: shareDescriptions.de,
    language: 'de',
    canonical: `${siteOrigin}/`,
    robots: 'noindex',
    alternates: [],
    jsonLd: [],
  };
}
