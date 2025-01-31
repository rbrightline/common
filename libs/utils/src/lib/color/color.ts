// Colors

import { ToString } from '@rline/type';

/**
 * Console color
 */
export const BLACK = '\x1b[30m';

/**
 * Console color
 */
export const RED = '\x1b[31m';

/**
 * Console color
 */
export const GREEN = '\x1b[32m';

/**
 * Console color
 */
export const YELLOW = '\x1b[33m';

/**
 * Console color
 */
export const BLUE = '\x1b[34m';

/**
 * Console color
 */
export const MAGENTA = '\x1b[35m';

/**
 * Console color
 */
export const CYAN = '\x1b[36m';

/**
 * Console color
 */
export const WHITE = '\x1b[37m';

// Bg colors

/**
 * Console color
 */
export const BG_BLACK = '\x1b[40m';

/**
 * Console color
 */
export const BG_RED = '\x1b[41m';

/**
 * Console color
 */
export const BG_GREEN = '\x1b[42m';

/**
 * Console color
 */
export const BG_YELLOW = '\x1b[43m';

/**
 * Console color
 */
export const BG_BLUE = '\x1b[44m';

/**
 * Console color
 */
export const BG_MAGENTA = '\x1b[45m';

/**
 * Console color
 */
export const BG_CYAN = '\x1b[46m';

/**
 * Console color
 */
export const BG_WHITE = '\x1b[47m';

// Styles

/**
 * Console color
 */
export const BOLD = '\x1b[1m';

/**
 * Console color
 */
export const UNDERLINE = '\x1b[4m';

/**
 * Console color
 */
export const REVERSE = '\x1b[7m';

/**
 * Console color
 */
export const RESET_ALL_STYLE = '\x1b[0m';

/**
 * console color
 * @param logs
 * @returns
 */
export function black<T extends ToString>(...logs: T[]): string {
  return `${BLACK}${logs}${WHITE}`;
}

/**
 * console color
 * @param logs
 * @returns
 */
export function red<T extends ToString>(...logs: T[]): string {
  return `${RED}${logs}${WHITE}`;
}

/**
 * console color
 * @param logs
 * @returns
 */
export function green<T extends ToString>(...logs: T[]): string {
  return `${GREEN}${logs}${WHITE}`;
}

/**
 * console color
 * @param logs
 * @returns
 */
export function yellow<T extends ToString>(...logs: T[]): string {
  return `${YELLOW}${logs}${WHITE}`;
}

/**
 * console color
 * @param logs
 * @returns
 */
export function blue<T extends ToString>(...logs: T[]): string {
  return `${BLUE}${logs}${WHITE}`;
}

/**
 * console color
 * @param logs
 * @returns
 */
export function magenta<T extends ToString>(...logs: T[]): string {
  return `${MAGENTA}${logs}${WHITE}`;
}

/**
 * console color
 * @param logs
 * @returns
 */
export function cyan<T extends ToString>(...logs: T[]): string {
  return `${CYAN}${logs}${WHITE}`;
}

/**
 * console color
 * @param logs
 * @returns
 */
export function white<T extends ToString>(...logs: T[]): string {
  return `${WHITE}${logs}${WHITE}`;
}

/**
 * console color
 * @param logs
 * @returns
 */
export function bgBlack(...logs: ToString[]): string {
  return `${BG_BLACK}${logs}${BG_BLACK}`;
}
/**
 * console color
 * @param logs
 * @returns
 */
export function bgRed(...logs: ToString[]): string {
  return `${BG_RED}${logs}${BG_BLACK}`;
}
/**
 * console color
 * @param logs
 * @returns
 */
export function bgGreen(...logs: ToString[]): string {
  return `${BG_GREEN}${logs}${BG_BLACK}`;
}
/**
 * console color
 * @param logs
 * @returns
 */
export function bgYellow(...logs: ToString[]): string {
  return `${BG_YELLOW}${logs}${BG_BLACK}`;
}
/**
 * console color
 * @param logs
 * @returns
 */
export function bgBlue(...logs: ToString[]): string {
  return `${BG_BLUE}${logs}${BG_BLACK}`;
}
/**
 * console color
 * @param logs
 * @returns
 */
export function bgMagenta(...logs: ToString[]): string {
  return `${BG_MAGENTA}${logs}${BG_BLACK}`;
}
/**
 * console color
 * @param logs
 * @returns
 */
export function bgCyan(...logs: ToString[]): string {
  return `${BG_CYAN}${logs}${BG_BLACK}`;
}
/**
 * console color
 * @param logs
 * @returns
 */
export function bgWhite(...logs: ToString[]): string {
  return `${BG_WHITE}${logs}${BG_BLACK}`;
}
/**
 * console style
 * @param logs
 * @returns
 */
export function bold(...logs: ToString[]): string {
  return `${BOLD}${logs}${RESET_ALL_STYLE}`;
}
/**
 * console style
 * @param logs
 * @returns
 */
export function underline(...logs: ToString[]): string {
  return `${UNDERLINE}${logs}${RESET_ALL_STYLE}`;
}
/**
 * console style
 * @param logs
 * @returns
 */
export function reverse(...logs: ToString[]): string {
  return `${REVERSE}${logs}${RESET_ALL_STYLE}`;
}
