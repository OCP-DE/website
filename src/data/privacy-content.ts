// Privacy notice (DE/EN), matching the processing actually used on this site: static site on
// GitHub Pages, no contact form, no cookies or tracking, business e-mail via Microsoft 365.
// Attribution in the last section. Sub-headings must match the set in
// src/components/legal/Privacy.astro.
export const privacyDate = { de: 'Stand: November 2026', en: 'Last updated: November 2026' } as const;
export type PrivacySection = [string, string];
export interface PrivacyText {
  title: string;
  intro: string;
  sections: PrivacySection[];
}

const de: PrivacyText = {
  title: 'Datenschutzerklärung',
  intro: '',
  sections: [
    [
      '1. Verantwortlicher',
      'Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:\n\nOcean Capital Partners GmbH\nvertreten durch den Geschäftsführer René Ufferhardt\nKegelhofstraße 73\n20251 Hamburg\nDeutschland\n\nTelefon: +49 40 369 306 18\nE-Mail: kontakt[at]ocean-capital-partners.de\nAmtsgericht Hamburg, HRB 202211\n\nDiese Hinweise gelten für den Besuch dieser Website und die Kontaktaufnahme mit uns. Für Transaktionen und andere Geschäftsvorgänge können ergänzende Datenschutzinformationen gelten.',
    ],
    [
      '2. Ihre Rechte',
      'Sie können unter den oben genannten Kontaktdaten jederzeit folgende Rechte geltend machen:\n\n• Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO),\n• Berichtigung unrichtiger Daten (Art. 16 DSGVO),\n• Löschung Ihrer Daten (Art. 17 DSGVO),\n• Einschränkung der Verarbeitung, etwa solange gesetzliche Pflichten einer Löschung entgegenstehen (Art. 18 DSGVO),\n• Widerspruch gegen die Verarbeitung (Art. 21 DSGVO) und\n• Datenübertragbarkeit, soweit die Verarbeitung auf Ihrer Einwilligung oder einem Vertrag beruht (Art. 20 DSGVO).\n\nEine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.\n\nSie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für uns zuständig ist der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (https://datenschutz-hamburg.de). Eine Liste aller Aufsichtsbehörden finden Sie unter https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.',
    ],
    [
      '3. Hosting und Server-Logfiles',
      'Art und Zweck der Verarbeitung\n\nBeim Aufruf dieser Website werden automatisch technische Informationen erfasst (Server-Logfiles), insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer, Browsertyp und Betriebssystem. Sie dienen dem Verbindungsaufbau, der fehlerfreien Darstellung sowie der Sicherheit und Stabilität der Website, insbesondere der Erkennung von Missbrauch. Rückschlüsse auf Ihre Person ziehen wir daraus nicht. Schriften und sonstige Inhalte werden ausschließlich von unserer eigenen Website geladen.\n\nRechtsgrundlage\n\nArt. 6 Abs. 1 Buchst. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und stabilen Betrieb der Website.\n\nEmpfänger\n\nDie Website wird bei GitHub Pages (GitHub, Inc.) gehostet. GitHub speichert nach eigenen Angaben die IP-Adressen der Besucher zu Sicherheitszwecken.\n\nSpeicherdauer\n\nWir selbst speichern keine Logfiles. Beim Hosting-Dienstleister werden sie nur so lange gespeichert, wie es für Auslieferung, Fehleranalyse und Angriffsabwehr erforderlich ist; bei einem Sicherheitsvorfall bis zu dessen Aufklärung.\n\nDrittlandübermittlung\n\nUSA, auf Grundlage des Angemessenheitsbeschlusses der EU-Kommission (siehe Abschnitt 6).\n\nBereitstellung\n\nDie Bereitstellung ist weder gesetzlich noch vertraglich vorgeschrieben; ohne Ihre IP-Adresse kann die Website jedoch nicht angezeigt werden.',
    ],
    [
      '4. Kontaktaufnahme per E-Mail oder Telefon',
      'Art und Zweck der Verarbeitung\n\nEin Kontaktformular gibt es auf dieser Website nicht. Wenn Sie uns per E-Mail schreiben, verarbeiten wir Ihre E-Mail-Adresse, Ihren Namen, den Inhalt Ihrer Nachricht samt Anlagen sowie technische Übermittlungsdaten (Zeitpunkt, beteiligte Server, IP-Adressen). Bei Anrufen verarbeiten wir Ihre Telefonnummer, Zeitpunkt und Dauer des Gesprächs sowie dessen Inhalt. Die Schaltfläche „E-Mail schreiben“ öffnet lediglich Ihr E-Mail-Programm; über die Website selbst werden keine Daten übermittelt. Wir nutzen Ihre Angaben ausschließlich zur Bearbeitung Ihres Anliegens.\n\nRechtsgrundlage\n\nArt. 6 Abs. 1 Buchst. f DSGVO; unser berechtigtes Interesse liegt in einer unkomplizierten Kommunikation. Zielt Ihre Anfrage auf einen Vertragsschluss, etwa eine Transaktion, ist zusätzlich Art. 6 Abs. 1 Buchst. b DSGVO Rechtsgrundlage.\n\nEmpfänger\n\nDie mit Ihrem Anliegen befassten Personen in unserem Unternehmen sowie Microsoft als Auftragsverarbeiter für unseren E-Mail-Dienst (Microsoft 365).\n\nSpeicherdauer\n\nWir löschen Ihre Anfrage, sobald sie erledigt ist, spätestens zwölf Monate nach Abschluss. Entsteht daraus ein Vertragsverhältnis, gelten die gesetzlichen Aufbewahrungsfristen nach § 257 HGB und § 147 AO von sechs, acht oder zehn Jahren (Art. 6 Abs. 1 Buchst. c DSGVO).\n\nDrittlandübermittlung\n\nUSA, auf Grundlage des Angemessenheitsbeschlusses der EU-Kommission (siehe Abschnitt 6).\n\nBereitstellung\n\nDie Bereitstellung Ihrer Daten ist freiwillig. Ohne die erforderlichen Angaben können wir Ihre Anfrage jedoch nicht bearbeiten.',
    ],
    [
      '5. Cookies und lokale Speicherung',
      'Diese Website setzt keine Cookies und verwendet keine Analyse-, Tracking- oder Marketingdienste. Ein Cookie-Banner ist daher nicht erforderlich.\n\nArt und Zweck der Verarbeitung\n\nIm Sitzungsspeicher Ihres Browsers (sessionStorage) legen wir lediglich zwei Einträge ohne Personenbezug ab: „ocean-language“ merkt sich die gewählte Sprache (de/en) für Impressum und Datenschutzerklärung, „ocean-visited“ verhindert, dass die Einblendanimation bei jedem Seitenwechsel erneut abläuft. Beide Einträge verlassen Ihr Gerät nicht und werden beim Schließen des Browserfensters gelöscht.\n\nRechtsgrundlage\n\n§ 25 Abs. 2 Nr. 2 TDDDG, da die Speicherung für die von Ihnen gewünschte Darstellung unbedingt erforderlich ist.\n\nLöschen und Blockieren\n\nSie können gespeicherte Website-Daten jederzeit in Ihrem Browser löschen oder blockieren; die Website bleibt dann uneingeschränkt nutzbar. Anleitungen finden Sie bei Ihrem Browseranbieter:\nMozilla Firefox: https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen\nGoogle Chrome: https://support.google.com/chrome/answer/95647?hl=de\nMicrosoft Edge: https://support.microsoft.com/de-de/windows/verwalten-von-cookies-in-microsoft-edge-anzeigen-zulassen-blockieren-l%C3%B6schen-und-verwenden-168dab11-0753-043d-7c16-ede5947fc64d\nApple Safari: https://support.apple.com/de-de/guide/safari/sfri11471/mac\nOpera: https://help.opera.com/en/latest/web-preferences/#cookies',
    ],
    [
      '6. Dienstleister und Übermittlung in Drittländer',
      'Wir setzen folgende Dienstleister ein:\n\n• GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA – Hosting dieser Website (GitHub Pages) auf Grundlage der GitHub-Nutzungsbedingungen einschließlich des GitHub Data Protection Agreement (Art. 28 DSGVO); https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement\n• Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland – E-Mail-Dienst Microsoft 365 auf Grundlage eines Vertrags zur Auftragsverarbeitung (Art. 28 DSGVO); https://www.microsoft.com/de-de/privacy/privacystatement\n\nDabei können Daten in die USA übermittelt werden. Hierfür besteht ein Angemessenheitsbeschluss der EU-Kommission (EU-US Data Privacy Framework, Art. 45 DSGVO), unter dem die Anbieter zertifiziert sind (https://www.dataprivacyframework.gov/list). Soweit dieser nicht greift, erfolgt die Übermittlung auf Grundlage der EU-Standardvertragsklauseln (Art. 46 Abs. 2 Buchst. c DSGVO).\n\nAn Behörden oder zur Verschwiegenheit verpflichtete Berater geben wir Daten nur weiter, wenn wir gesetzlich dazu verpflichtet sind oder es zur Wahrung unserer Rechte erforderlich ist.',
    ],
    [
      '7. Sicherheit',
      'Die Website wird ausschließlich verschlüsselt über HTTPS ausgeliefert. Für besonders vertrauliche Unterlagen stimmen wir gerne vorab einen sicheren Übermittlungsweg mit Ihnen ab. Eine automatisierte Entscheidungsfindung einschließlich Profiling (Art. 22 DSGVO) findet nicht statt.',
    ],
    [
      '8. Ihr Widerspruchsrecht nach Art. 21 DSGVO',
      'Einzelfallbezogenes Widerspruchsrecht\n\nSie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Ihrer Daten auf Grundlage von Art. 6 Abs. 1 Buchst. f DSGVO Widerspruch einzulegen; dies gilt auch für ein darauf gestütztes Profiling. Wir verarbeiten Ihre Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen, die Ihre Interessen überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.\n\nWiderspruch gegen Direktwerbung\n\nEiner Verarbeitung zu Zwecken der Direktwerbung können Sie jederzeit ohne Angabe von Gründen widersprechen.\n\nEmpfänger eines Widerspruchs\n\nOcean Capital Partners GmbH, Geschäftsführer René Ufferhardt, Kegelhofstraße 73, 20251 Hamburg\nTelefon: +49 40 369 306 18\nE-Mail: kontakt[at]ocean-capital-partners.de\n\nDer Widerspruch ist formfrei.',
    ],
    [
      '9. Änderungen und Fragen',
      'Wir passen diese Datenschutzerklärung an, wenn sich die rechtlichen Anforderungen oder unsere Verfahren ändern; es gilt die jeweils hier veröffentlichte Fassung. Bei Fragen zum Datenschutz schreiben Sie uns gerne an die in Abschnitt 1 genannte Adresse.',
    ],
    [
      '10. Urheberrechtlicher Hinweis',
      'Diese Datenschutzerklärung wurde mit Hilfe der activeMind AG erstellt.\nhttps://www.activemind.de/datenschutz/datenschutzbeauftragter/',
    ],
  ],
};

const en: PrivacyText = {
  title: 'Privacy Notice',
  intro: '',
  sections: [
    [
      "1. Data Controller",
      "The controller responsible for the processing of personal data within the meaning of the EU General Data Protection Regulation (GDPR) is:\n\nOcean Capital Partners GmbH\nrepresented by its Managing Director, René Ufferhardt\nKegelhofstraße 73\n20251 Hamburg\nGermany\n\nTelephone: +49 40 369 306 18\nEmail:\u00a0kontakt[at]ocean-capital-partners.de\nRegistered with the Commercial Register of the Hamburg Local Court (Amtsgericht Hamburg) under HRB 202211\n\nThis privacy notice applies to your use of this website and to any communication with us. Separate privacy information may apply to transactions and other business relationships.",
    ],
    [
      "2. Your Rights as a Data Subject",
      "Subject to the statutory requirements, you have the right to:\n\n• obtain access to the personal data we hold about you (Article 15 GDPR);\n• have inaccurate data rectified (Article 16 GDPR);\n• have your data erased (Article 17 GDPR);\n• restrict processing, for example where statutory retention obligations prevent erasure (Article 18 GDPR);\n• object to processing (Article 21 GDPR); and\n• receive your data in a portable format where processing is based on your consent or on a contract (Article 20 GDPR).\n\nTo exercise these rights, please use the contact details above. Where processing is based on your consent, you may withdraw it at any time with effect for the future.\n\nYou also have the right to lodge a complaint with a supervisory authority. The authority competent for us is the Hamburg Commissioner for Data Protection and Freedom of Information (https://datenschutz-hamburg.de). A list of the German supervisory authorities is available at https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.",
    ],
    [
      "3. Website Hosting and Server Log Files",
      "Purpose of Processing\n\nEach time you access this website, technical information is collected automatically (server log files), in particular your IP address, the date and time of access, the page requested, the referring URL, and the browser and operating system used. This information is required to establish the connection, to display the website correctly and to ensure its security and stability, in particular to detect misuse. We do not use it to identify you. Fonts and all other content are served exclusively from our own website.\n\nLegal Basis\n\nArticle 6(1)(f) GDPR. Our legitimate interest lies in operating the website securely and reliably.\n\nRecipients\n\nThis website is hosted on GitHub Pages, a service provided by GitHub, Inc. According to GitHub, the IP addresses of visitors are logged for security purposes.\n\nRetention Period\n\nWe do not store server log files ourselves. Our hosting provider retains them only for as long as necessary to deliver the website, analyse errors and defend against attacks and, in the event of a security incident, until it has been fully investigated.\n\nTransfers to Third Countries\n\nData may be transferred to the United States on the basis of the European Commission’s adequacy decision (see section 6).\n\nRequirement to Provide Data\n\nYou are under no legal or contractual obligation to provide this information. Without your IP address, however, the website cannot be displayed.",
    ],
    [
      "4. Contacting Us by Email or Telephone",
      "Purpose of Processing\n\nThis website does not offer a contact form. If you contact us by email, we process your email address, your name, the content of your message including any attachments, and technical transmission data (time of sending, servers involved, IP addresses). If you contact us by telephone, we process your telephone number, the time and duration of the call and the information you provide. The “Send an Email” button merely opens your email program; no data is transmitted via the website itself. We use your information solely to deal with your enquiry.\n\nLegal Basis\n\nArticle 6(1)(f) GDPR; our legitimate interest lies in communicating with you efficiently. Where your enquiry concerns the conclusion of a contract, such as a transaction, processing is also based on Article 6(1)(b) GDPR.\n\nRecipients\n\nThe members of our team who deal with your enquiry, and Microsoft as processor for our email service (Microsoft 365).\n\nRetention Period\n\nWe delete your enquiry once it has been dealt with, and no later than twelve months after the matter has been concluded. Where a contractual relationship results, the statutory retention periods of six, eight or ten years under section 257 of the German Commercial Code (HGB) and section 147 of the German Fiscal Code (AO) apply (Article 6(1)(c) GDPR).\n\nTransfers to Third Countries\n\nData may be transferred to the United States on the basis of the European Commission’s adequacy decision (see section 6).\n\nRequirement to Provide Data\n\nProviding your data is voluntary. Without the necessary information, however, we are unable to respond to your enquiry.",
    ],
    [
      "5. Cookies and Local Storage",
      "This website does not use cookies or any analytics, tracking or marketing services. For this reason, no cookie banner is displayed.\n\nPurpose of Processing\n\nWe store just two entries in your browser’s session storage, neither of which relates to you personally: “ocean-language” remembers the language you have selected (German or English) for the Legal Notice and the Privacy Notice, and “ocean-visited” prevents the introductory animation from replaying each time you change page. Neither entry leaves your device, and both are deleted when you close the browser window.\n\nLegal Basis\n\nSection 25(2) no. 2 of the German Telecommunications Digital Services Data Protection Act (TDDDG), as this storage is strictly necessary to provide the display you have requested.\n\nManaging Stored Data\n\nYou can delete or block stored website data in your browser settings at any time; the website will remain fully functional. Instructions are available from your browser provider:\nMozilla Firefox: https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox\nGoogle Chrome: https://support.google.com/chrome/answer/95647?hl=en\nMicrosoft Edge: https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d\nApple Safari: https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac\nOpera: https://help.opera.com/en/latest/web-preferences/#cookies",
    ],
    [
      "6. Service Providers and Transfers to Third Countries",
      "We use the following service providers:\n\n• GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA – hosting of this website (GitHub Pages) under the GitHub Terms of Service, including the GitHub Data Protection Agreement (Article 28 GDPR). Privacy statement: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\n• Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Ireland – Microsoft 365 email service under a data processing agreement pursuant to Article 28 GDPR. Privacy statement: https://www.microsoft.com/en-gb/privacy/privacystatement\n\nIn this context, personal data may be transferred to the United States. Such transfers are based on the European Commission’s adequacy decision for the EU–US Data Privacy Framework (Article 45 GDPR), under which these providers are certified (https://www.dataprivacyframework.gov/list). Where the adequacy decision does not apply, transfers are based on the EU Standard Contractual Clauses (Article 46(2)(c) GDPR).\n\nWe only disclose data to public authorities or to advisers bound by professional secrecy where we are legally obliged to do so or where this is necessary to establish, exercise or defend legal claims.",
    ],
    [
      "7. Security",
      "This website is delivered exclusively via encrypted HTTPS connections. For particularly confidential documents, we would be pleased to agree a secure method of transmission with you in advance. We do not use automated decision-making, including profiling (Article 22 GDPR).",
    ],
    [
      "8. Your Right to Object (Article 21 GDPR)",
      "Objection on Grounds Relating to Your Situation\n\nYou have the right to object at any time, on grounds relating to your particular situation, to the processing of your personal data based on Article 6(1)(f) GDPR; this also applies to profiling based on that provision. In that case, we will no longer process your data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or the processing serves the establishment, exercise or defence of legal claims.\n\nObjection to Direct Marketing\n\nYou may object at any time, without giving reasons, to the processing of your data for direct marketing purposes.\n\nHow to Object\n\nOcean Capital Partners GmbH, Managing Director René Ufferhardt, Kegelhofstraße 73, 20251 Hamburg, Germany\nTelephone: +49 40 369 306 18\nEmail:\u00a0kontakt[at]ocean-capital-partners.de\n\nYour objection does not need to take any particular form.",
    ],
    [
      "9. Changes and Questions",
      "We will update this privacy notice whenever legal requirements or our processing activities change; the version published on this website applies. If you have any questions about data protection, please contact us using the details in section 1.",
    ],
    [
      "10. Attribution",
      "This privacy notice was prepared with the assistance of activeMind AG.\nhttps://www.activemind.de/datenschutz/datenschutzbeauftragter/",
    ],
  ],
};

export const privacyContent: Record<'de' | 'en', PrivacyText> = { de, en };
export const privacySections = de.sections;
