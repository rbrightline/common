// Colors

import { ToString } from '@rline/type';

export const BLACK = '\x1b[30m';
export const RED = '\x1b[31m';
export const GREEN = '\x1b[32m';
export const YELLOW = '\x1b[33m';
export const BLUE = '\x1b[34m';
export const MAGENTA = '\x1b[35m';
export const CYAN = '\x1b[36m';
export const WHITE = '\x1b[37m';

// Bg colors
export const BG_BLACK = '\x1b[40m';
export const BG_RED = '\x1b[41m';
export const BG_GREEN = '\x1b[42m';
export const BG_YELLOW = '\x1b[43m';
export const BG_BLUE = '\x1b[44m';
export const BG_MAGENTA = '\x1b[45m';
export const BG_CYAN = '\x1b[46m';
export const BG_WHITE = '\x1b[47m';

// Styles
export const BOLD = '\x1b[1m';
export const UNDERLINE = '\x1b[4m';
export const REVERSE = '\x1b[7m';
export const RESET_ALL_STYLE = '\x1b[0m';

export function black<T extends ToString>(...logs: T[]): string {
  return `${BLACK}${logs}${WHITE}`;
}

//     \x1b[31m - Red
export function red<T extends ToString>(...logs: T[]): string {
  return `${RED}${logs}${WHITE}`;
}

export function green<T extends ToString>(...logs: T[]): string {
  return `${GREEN}${logs}${WHITE}`;
}

export function yellow<T extends ToString>(...logs: T[]): string {
  return `${YELLOW}${logs}${WHITE}`;
}

export function blue<T extends ToString>(...logs: T[]): string {
  return `${BLUE}${logs}${WHITE}`;
}

export function magenta<T extends ToString>(...logs: T[]): string {
  return `${MAGENTA}${logs}${WHITE}`;
}

export function cyan<T extends ToString>(...logs: T[]): string {
  return `${CYAN}${logs}${WHITE}`;
}

export function white<T extends ToString>(...logs: T[]): string {
  return `${WHITE}${logs}${WHITE}`;
}

export function bgBlack(...logs: ToString[]): string {
  return `${BG_BLACK}${logs}${BG_BLACK}`;
}
export function bgRed(...logs: ToString[]): string {
  return `${BG_RED}${logs}${BG_BLACK}`;
}
export function bgGreen(...logs: ToString[]): string {
  return `${BG_GREEN}${logs}${BG_BLACK}`;
}
export function bgYellow(...logs: ToString[]): string {
  return `${BG_YELLOW}${logs}${BG_BLACK}`;
}
export function bgBlue(...logs: ToString[]): string {
  return `${BG_BLUE}${logs}${BG_BLACK}`;
}
export function bgMagenta(...logs: ToString[]): string {
  return `${BG_MAGENTA}${logs}${BG_BLACK}`;
}
export function bgCyan(...logs: ToString[]): string {
  return `${BG_CYAN}${logs}${BG_BLACK}`;
}
export function bgWhite(...logs: ToString[]): string {
  return `${BG_WHITE}${logs}${BG_BLACK}`;
}

// Style
export function bold(...logs: ToString[]): string {
  return `${BOLD}${logs}${RESET_ALL_STYLE}`;
}
export function underline(...logs: ToString[]): string {
  return `${UNDERLINE}${logs}${RESET_ALL_STYLE}`;
}
export function reverse(...logs: ToString[]): string {
  return `${REVERSE}${logs}${RESET_ALL_STYLE}`;
}
