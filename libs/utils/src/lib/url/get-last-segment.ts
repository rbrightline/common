import { last } from '../array';
import { segments } from './segments';

/**
 * Get last segment of the path/url
 * @param path
 * @returns
 */
export function getLastSegment(path: string): string {
  const segs = segments(path);
  return last(segs);
}
