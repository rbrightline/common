import { InitOptions } from '../common';
import { EmptyValueError, InvalidNumberValueError } from '../errors';
import { tnbr } from '../type';
import { def, nenbr, nil } from '../value';

/**
 * initialize number value or throw {@link InvalidNumberValueError}
 * @param value
 * @returns
 * @throws
 */
export function nbr<
  T extends number,
  R extends boolean,
  A extends boolean,
  T0 extends T | 0
>(
  value: R extends true
    ? A extends true
      ? T0
      : T
    : (A extends true ? T0 : T) | undefined,
  options?: InitOptions<number, R>
): R extends true ? number : number | undefined {
  if (tnbr(value) && nenbr(value)) return value;

  if (options?.notEmpty == true) throw new EmptyValueError();

  if (options?.required || nil(value)) {
    if (def(options?.default)) return options.default as T;
    throw new InvalidNumberValueError(value);
  }

  return value;
}
