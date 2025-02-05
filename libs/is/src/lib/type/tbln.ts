import { Optional } from '../common';
import { udef } from '../val';

/**
 * Boolean type guard that return `true` if the value is typeof `boolean` or undefined
 * @param value
 * @returns
 */
export function tbln(value: unknown): value is Optional<boolean> {
  return udef(value) || typeof value === 'boolean';
}
