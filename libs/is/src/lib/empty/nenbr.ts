import { Optional } from '../common';
import { enbr } from './enbr';

/**
 * is not 0?
 * @param value
 * @returns
 */
export function nenbr(value?: Optional<number>): value is number {
  return !enbr(value);
}
