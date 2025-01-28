import { updateArray } from '../array';
import { segments } from './segments';

/**
 * Update the last segment of the path/url
 * @param path
 * @param lastSegment
 * @returns
 */
export function setLastSegment(path: string, lastSegment: string): string {
  const segs = segments(path);
  updateArray(segs, lastSegment, segs.length - 1);
  return segs.join('/');
}
