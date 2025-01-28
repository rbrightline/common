import { NumberNotInRangeError } from '../errors';

export function validateRange(
  value: number,
  start: number,
  end: number
): void | never {
  if (!isBetween(value, start, end)) {
    throw new NumberNotInRangeError();
  }
}
