import { InitOptions } from '../common';
import { InvalidNumberValueError } from '../errors';
import { tnbr } from '../type';
import { nenbr, nil } from '../value';

/**
 * initialize number value or throw {@link InvalidNumberValueError}
 * @param value
 * @returns
 * @throws
 */
export function nbr<
  T extends boolean,
  A extends boolean,
  V extends number,
  V0 extends V | 0
>(
  value: T extends true
    ? A extends true
      ? V0
      : V
    : (A extends true ? V0 : V) | undefined,
  options?: InitOptions<T>
): T extends true ? number : number | undefined {
  if (tnbr(value) && nenbr(value)) return value;

  if (options?.required || nil(value)) throw new InvalidNumberValueError(value);

  return value;
}
