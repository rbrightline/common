import { tbln, tnbr } from '../type';
import { def } from '../value';

/**
 * reverse boolean value
 * @param value
 * @returns
 */
export function not<T>(value: T): boolean {
  if (def(value)) {
    if (tbln(value)) return !value;

    if (tnbr(value)) {
      if (isNaN(value)) {
        return true;
      }
      return false;
    }

    return false;
  }
  return true;
}
