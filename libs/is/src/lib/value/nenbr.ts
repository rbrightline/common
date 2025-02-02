import { enbr } from './enbr';

/**
 * is not 0?
 * @param value
 * @returns
 */
export function nenbr(value: number): value is number {
  return !enbr(value);
}
