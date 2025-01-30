import { normalizePaths } from './normalize-paths';

/**
 * Get all segments of the path/url
 * @param path
 * @returns
 */
export function segments(path: string): string[] {
  return normalizePaths(path).split(/\/|\\/);
}
