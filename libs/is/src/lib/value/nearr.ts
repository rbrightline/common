import { earr } from './earr';
/**
 * is not empty array?
 * @param value
 * @returns
 */
export function nearr<T>(value: T[]): boolean {
  return !earr(value);
}
