// Design layers on top of the base styles (src/styles.css). Each layer can be turned off by
// setting it to `false`; its styles live in src/styles/design/<nn>-<name>.css and only apply
// while the switch is on (via a `d-<name>` class on <html>).
export const design = {
  /** Colours: white ground, black text, logo navy as the only colour. */
  colours: true,
  /** Team: generous grid, black roles, portraits as wide as their column. */
  team: true,
  /** Footer: one calm line on desktop, two rows on tablet, stacked on phones. */
  footer: true,
  /** Details: hero labels, profile table, buttons, heading scale, focus rings, language switch. */
  details: true,
  /** Headings: small label with a fine line, then the heading. */
  headings: true,
  /** Rhythm: equal space above and below every section. */
  rhythm: true,
  /** Polish: balanced headings, quiet text links, one secondary tone, portrait hairline. */
  polish: true,
} as const;

export type DesignFeature = keyof typeof design;

/** Class names for <html>, e.g. "d-colours d-team". */
export const designClasses = (Object.keys(design) as DesignFeature[])
  .filter((key) => design[key])
  .map((key) => `d-${key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`)
  .join(' ');
