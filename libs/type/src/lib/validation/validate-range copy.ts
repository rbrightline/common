import { NumberNotInRangeError } from '../errors';
import { isBetween } from './is-between';

export function validateRange(
  value: number,
  start: number,
  end: number
): void | never {
  if (!isBetween(value, start, end)) {
    throw new NumberNotInRangeError();
  }
}
