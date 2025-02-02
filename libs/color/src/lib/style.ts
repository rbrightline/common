export type TextStyle = {
  bold: string;
  italic: string;
  underline: string;
  reverse: string;
  reset: string;
};

export const CSSTextStyle: TextStyle = {
  bold: 'font-weight: bold',
  italic: 'font-style: italic',
  underline: 'text-decoration: underline',
  reverse: 'filter: invert(1)',
  reset: `font-weight: unset, font-style: unset, text-decoration: unset, filter: unset`,
};
/**
 * Ansi style prefix
 */
export const AnsiStyle: TextStyle = {
  bold: '\x1b[1m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
  reverse: '\x1b[7m',
  reset: '\x1b[0m',
};
