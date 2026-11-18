// Imprint text (§ 5 DDG), German and English. Maintained per language, no runtime translation.
export const EMAIL = 'kontakt[at]ocean-capital-partners.de';
export const PHONE = '+49 40 369 306 18';
export const PHONE_HREF = '+494036930618';

export const imprintText = {
  de: {
    title: 'Impressum',
    lead: 'Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)',
    provider: 'Anbieter',
    // Same block as the controller in the privacy notice (section 1).
    providerBody: ['Ocean Capital Partners GmbH', 'vertreten durch den Geschäftsführer René Ufferhardt', 'Kegelhofstraße 73', '20251 Hamburg', 'Deutschland'],
    contact: 'Kontakt',
    phoneLabel: 'Telefon',
    emailLabel: 'E-Mail',
    register: 'Registereintrag',
    registerBody: ['Handelsregister: Amtsgericht Hamburg, HRB 202211', 'Sitz der Gesellschaft: Hamburg'],
    website: 'Hinweise zum Internetauftritt',
    websiteBody:
      'Diese Website stellt die Ocean Capital Partners GmbH und ihren Beteiligungsansatz vor. Ihre Inhalte dienen der allgemeinen Information und stellen weder ein öffentliches Angebot zum Erwerb von Finanzinstrumenten noch eine individuelle Anlageempfehlung oder Anlageberatung dar. Konkrete Transaktionen bedürfen einer gesonderten Prüfung und individueller Vereinbarungen. Durch die Nutzung dieser Website kommt kein Beratungsvertrag zustande.',
    copyright: 'Urheberrecht',
    copyrightBody:
      'Für Texte, Gestaltung und sonstige Inhalte dieser Website gelten die jeweiligen gesetzlichen Schutzrechte. Eine Nutzung außerhalb gesetzlicher Erlaubnisse setzt die Zustimmung des jeweiligen Rechteinhabers voraus. Für das nachfolgend genannte Foto gelten die Bedingungen der verlinkten Creative-Commons-Lizenz.',
    credit: 'Bildnachweis',
    creditIntro: ['Hamburg-Motiv auf Startseite, Über uns, Fokus und Team: „Binnenalster in Hamburg“.', 'Urheber: Thomas Ulrich / LoboStudio Hamburg.', 'Copyright: © 2010 Thomas Ulrich / LoboStudio Hamburg.'],
    sourceLabel: 'Quelle: Wikimedia Commons, ',
    originalLabel: 'Ursprüngliche Veröffentlichung: Flickr, ',
    licenceLabel: 'Lizenz: Creative Commons Namensnennung – Weitergabe unter gleichen Bedingungen 2.0 Generic (CC BY-SA 2.0), ',
    creditEdit:
      'Bearbeitung für diese Website: Größenanpassung und darstellungsabhängiger Beschnitt, Abdunklung durch eine darübergelegte Gestaltungsebene sowie CSS-Anpassungen von Sättigung, Kontrast und Helligkeit. Soweit dadurch eine lizenzrechtliche Bearbeitung entsteht, steht diese unter derselben Lizenz. Die Lizenz gilt für dieses Foto und dessen Bearbeitung, nicht für die übrigen Website-Inhalte.',
  },
  en: {
    title: 'Legal Notice',
    lead: 'Information pursuant to section 5 of the German Digital Services Act (Digitale-Dienste-Gesetz, DDG)',
    provider: 'Website Operator',
    providerBody: ['Ocean Capital Partners GmbH', 'represented by its Managing Director, René Ufferhardt', 'Kegelhofstraße 73', '20251 Hamburg', 'Germany'],
    contact: 'Contact',
    phoneLabel: 'Telephone',
    emailLabel: 'Email',
    register: 'Commercial Register',
    registerBody: ['Registered with the Commercial Register of the Hamburg Local Court (Amtsgericht Hamburg) under HRB 202211', 'Registered office: Hamburg'],
    website: 'Website Information',
    websiteBody:
      'This website presents Ocean Capital Partners GmbH and its investment approach. Its contents are provided for general information and do not constitute a public offer to acquire financial instruments, an individual investment recommendation or investment advice. Specific transactions require separate assessment and individual agreements. Use of this website does not establish an advisory relationship.',
    copyright: 'Copyright',
    copyrightBody:
      'The text, design and other contents of this website are subject to the applicable intellectual property rights. Any use beyond what is permitted by law requires the consent of the relevant rights holder. The photograph identified below is subject to the terms of the linked Creative Commons licence.',
    credit: 'Image Credits',
    creditIntro: ['Hamburg photograph on Home, About Us, Focus and Team: “Binnenalster in Hamburg”.', 'Photographer: Thomas Ulrich / LoboStudio Hamburg.', 'Copyright: © 2010 Thomas Ulrich / LoboStudio Hamburg.'],
    sourceLabel: 'Source: Wikimedia Commons, ',
    originalLabel: 'Originally published on Flickr: ',
    licenceLabel: 'Licence: Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0), ',
    creditEdit:
      'Changes made for this website: resizing and responsive cropping, darkening through an overlay and CSS adjustments to saturation, contrast and brightness. To the extent that these changes constitute an adaptation under the licence, the adaptation is made available under the same licence. The licence applies to this photograph and its adaptation, not to the other contents of the website.',
  },
} as const;

export const WIKIMEDIA_URL = 'https://commons.wikimedia.org/wiki/File:Binnenalster_in_Hamburg_(5066395711).jpg';
export const FLICKR_URL = 'https://flickr.com/photos/39713146@N08/5066395711';
export const LICENCE_URL = 'https://creativecommons.org/licenses/by-sa/2.0/';
