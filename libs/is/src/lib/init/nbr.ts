import { InitOptions, Optional } from '../common';
import { enbr } from '../empty';
import {
  EmptyValueError,
  InvalidNumberValueError,
  RequiredValueError,
} from '../errors';
import { tnbr } from '../type';
import { def, udef } from '../val';

/**
 * initialize number value or throw {@link InvalidNumberValueError}
 * @param value
 * @returns
 * @throws
 */
export function nbr<
  R extends boolean,
  RT extends R extends true ? number : number | undefined
>(value?: Optional<number>, options?: InitOptions<number, R>): RT {
  if (def(value)) {
    if (!tnbr(value)) throw new InvalidNumberValueError(value);
    if (options?.notEmpty && enbr(value)) throw new EmptyValueError(value);
  } else {
    if (def(options?.default)) return options?.default as unknown as RT;
    if (options?.required && udef(value)) throw new RequiredValueError(value);
  }

  return value as RT;
}
