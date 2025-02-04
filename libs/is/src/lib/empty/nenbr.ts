import { def } from '../val/def';
import { enbr } from './enbr';

/**
 * is not 0?
 * @param value
 * @returns
 */
export function nenbr(value: number): value is number {
  if (def(value)) return !enbr(value);

  return false;
}
