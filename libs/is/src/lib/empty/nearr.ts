import { Optional } from '../common';
import { def } from '../val';
import { earr } from './earr';
/**
 * is not empty array?
 * @param value
 * @returns
 */
export function nearr<T extends Array<any>>(value?: Optional<T>): boolean {
  if (def(value)) return !earr(value);
  return false;
}
