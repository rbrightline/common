import { Optional } from '../common';
import { nil, udef } from '../val';

/**
 * Number type guard that return `true` if the value is typeof `number`
 * @param value
 * @returns
 */
export function tnbr(value: unknown): value is Optional<number> {
  if (typeof value == 'number' && isNaN(value)) {
    return false;
  }

  return udef(value) || nil(value) || typeof value === 'number';
}
