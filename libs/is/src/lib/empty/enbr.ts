import { Optional } from '../common';

/**
 * is 0 or NaN?
 * @param value
 * @returns
 */
export function enbr(value?: Optional<number>): value is 0 {
  return value === 0;
}
