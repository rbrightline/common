import { Optional } from '../common';
import { nil, udef } from '../val';

/**
 * Arry type guard that return `true` if the value is typeof `array` or undefined
 * @param value
 * @returns
 */
export function tarr<T extends Array<any>>(
  value: T | unknown
): value is Optional<T> {
  return udef(value) || nil(value) || Array.isArray(value);
}
