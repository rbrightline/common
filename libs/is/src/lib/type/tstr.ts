import { Optional } from '../common';
import { udef } from '../val';

/**
 * String type guard that return `true` if the value is typeof `string`
 * @param value
 * @returns
 */
export function tstr(value: unknown): value is Optional<string> {
  return typeof value == 'string' || udef(value);
}
