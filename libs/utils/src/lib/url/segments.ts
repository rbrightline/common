/**
 * Get all segments of the path/url
 * @param path
 * @returns
 */
export function segments(path: string): string[] {
  return path.split('/');
}
