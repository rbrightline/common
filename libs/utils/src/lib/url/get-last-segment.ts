import { last } from '../array';
import { segments } from './segments';

export function getLastSegment(path: string): string {
  const segs = segments(path);
  return last(segs);
}
