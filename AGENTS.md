# AGENTS.md — Beitragsregeln für die OCP-Website

Leitfaden für alle (Menschen und KI-Agenten), die an dieser Website mitarbeiten. Die Seite ist der öffentliche Auftritt der **Ocean Capital Partners GmbH**, Hamburg (`ocean-capital-partners.de`).

## Stack & Deploy
- **Astro**, statisch gebaut. Kein Server, keine Datenbank, kein Kontaktformular, keine Secrets.
- Node-Version siehe `.nvmrc`. Setup: `npm ci`. Lokal: `npm run dev` · Build: `npm run build` (Output `dist/`) · Prüfung: `npm run check`.
- Hosting: **GitHub Pages** über `.github/workflows/deploy.yml`, baut automatisch jeden Push auf `main`. Details im README.
- **Deploy ist automatisch:** Darum **nicht direkt auf `main` committen** — Branch (`ocp/JJJJ-MM-TT-thema`) + Pull Request, Review abwarten. Vor dem PR `npm run build` und `npm run check` fehlerfrei.
- URLs bleiben ohne Slash und ohne `.html` (`build.format: 'file'`). Bestehende URLs nicht umbenennen; falls doch nötig, Weiterleitung in `astro.config.mjs` (`redirects`) ergänzen.

## Repository-Hygiene
- Das Repository ist **öffentlich** (wie die Website selbst). Keine Zugangsdaten, keine personenbezogenen Daten Dritter (z. B. Kontaktanfragen), keine Datenraum- oder Deal-Unterlagen ins Repo.
- Lokale Archive (`*.zip`), `private-data/` und `.env*` sind per `.gitignore` ausgeschlossen — so lassen.
- Commit-Messages sachlich und knapp.

## Inhaltliche Konventionen
- **Zweisprachig DE/EN.** Jede Textänderung in `src/data/site-content.ts` immer in **beiden** Sprachen; keine Laufzeit-Übersetzung.
- Anrede **Sie**; Ton: hanseatisch, unternehmerisch, sachlich — kein Hochglanz-Marketing, keine Superlative.
- Englische Überschriften und Kartentitel in **Title Case** (Artikel/Präpositionen/Konjunktionen im Innern klein); Eyebrows bleiben in Versalien im Text, nie per CSS `capitalize`.
- Texte stehen ausschließlich in `src/data/*`; Seiten und Komponenten nicht mit Text hartkodieren.
- Porträts: einheitlich per CSS-Crop (`.portrait-*` in `src/styles.css`) ausrichten, Originalpixel nicht generativ verändern. Fotos nach `src/assets/team/` (werden beim Build optimiert).
- Bildnachweise vollständig nur im Impressum (`#bildnachweis`), keine Credit-Leisten an Fotos.

## Pflicht-Checks vor jedem PR
1. **Impressum** (§ 5 DDG) vollständig und aktuell (Anschrift, Vertretung, Register, Kontakt).
2. **Datenschutzerklärung** stimmt mit der Technik überein: jeder neue Drittdienst (Schriften, Karten, Videos, Analyse, Formulare) muss vorher dort benannt sein — sonst nicht einbauen. Derzeit: keine Tracker, keine externen Ressourcen, Schrift lokal gebündelt. Jede neue Quelle zusätzlich in der Sicherheitsrichtlinie freigeben (`integrations/content-security-policy.mjs`), sonst blockiert der Browser sie.
3. **Keine Anlageberatung / kein öffentliches Angebot:** keine Rendite- oder Erfolgsversprechen, keine Aussagen, die als Angebot von Finanzinstrumenten oder Fondsanteilen gelesen werden können (KAGB/WpIG/KWG). Formulierungen wie „garantiert", „sichere Rendite" vermeiden.
4. **Personen** (Fotos, Namen, Biografien, Zitate) nur mit dokumentierter Einwilligung; Rollen korrekt (Beirat ≠ Angestellte). JSON-LD in `src/lib/seo.ts` konsistent zur sichtbaren Teamseite halten.
5. **SEO:** Titel/Beschreibung je Sprache in `src/lib/seo.ts`; neue Inhaltsseiten in `languagePages` (DE+EN) eintragen — Sitemap und `hreflang` folgen daraus.
6. Darstellung bei 360/390 px, 768/1024 px und 1440/1920 px geprüft.

## Nicht tun
- ❌ Direkt auf `main` pushen.
- ❌ Kontaktformular, Tracking, Cookie-Banner-pflichtige Dienste oder externe CDNs ohne vorherige Datenschutz-Anpassung einbauen.
- ❌ Nur eine Sprache ändern.
- ❌ Stockfotos als „unser Team" ausgeben.
- ❌ Interne, vertrauliche oder personenbezogene Informationen ins Repository schreiben.
