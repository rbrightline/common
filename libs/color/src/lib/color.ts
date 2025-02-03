/**
 * Accessable colors
 */
export type Color = {
  black: string;
  white: string;
  blue: string;
  orange: string;
  green: string;
  purple: string;
  red: string;
  reset: string;
};
/**
 * Accessable colors as hex
 */
export const HexColor: Color = {
  black: 'color: #000000',
  white: 'color: #FFFFFF',
  blue: 'color: #0072B2',
  orange: 'color: #E69F00',
  green: 'color: #009E73',
  purple: 'color: #CC79A7',
  red: 'color: #D55E00',
  reset: 'color: #000000',
};

/**
 * Accessable colors for ansi text
 */
export const AnsiColor: Color = {
  black: '\x1b[30m',
  white: '\x1b[37m',
  blue: '\x1b[34m', // Title
  orange: '\x1b[38;5;214m', // Warning (closest ANSI approximation for Orange)
  green: '\x1b[32m', // Info
  purple: '\x1b[35m', // Debug
  red: '\x1b[31m', // Error (red is closest to vermilion)
  reset: '\x1b[0m', // Reset color
};

/**
 * Accessable colors for ansi background
 */
export const AnsiBgColor: Color = {
  black: '\x1b[40m',
  white: '\x1b[47m',
  blue: '\x1b[44m', // Title - Blue Background
  orange: '\x1b[48;5;214m', // Warning - Orange Background (closest ANSI approximation)
  green: '\x1b[42m', // Info - Green Background
  purple: '\x1b[45m', // Debug - Purple Background
  red: '\x1b[41m', // Error - Red Background (closest to Vermilion)
  reset: '\x1b[0m', // Reset color
};
