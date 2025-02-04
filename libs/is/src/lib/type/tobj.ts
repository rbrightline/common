import { Optional } from '../common';
import { udef } from '../val';

/**
 * Object type guard that return `true` if the value is typeof `object`, not-null, and array.
 * @param value
 * @returns
 */
export function tobj<T extends object>(
  value: T | unknown
): value is Optional<T> {
  return (
    udef(value) ||
    (typeof value === 'object' &&
      !Array.isArray(value) &&
      typeof value !== 'number')
  );
}
