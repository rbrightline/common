/**
 * Add pad before the string value
 * @param content
 * @param pad
 * @returns
 */
export function padStart(content: string, pad: string) {
  return `${pad}${content}`;
}

/**
 * Add pad after the stringn value
 * @param content
 * @param pad
 * @returns
 */
export function padEnd(content: string, pad: string) {
  return `${content}${pad}`;
}
