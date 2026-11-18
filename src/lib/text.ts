/** Split editorial text into paragraphs on blank lines (as the original `Paragraphs` component). */
export const paragraphs = (text: string) => text.split(/\n{2,}/);
