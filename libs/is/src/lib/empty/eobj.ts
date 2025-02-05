import { Optional } from '../common';
import { def } from '../val';

/**
 * is empty object?
 * @param value
 * @returns
 */
export function eobj(value?: Optional<object>): boolean {
  if (def(value)) return Object.keys(value).length === 0;
  return false;
}
