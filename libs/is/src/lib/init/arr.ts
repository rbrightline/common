import { InitOptions } from '../common';
import {
  EmptyValueError,
  InvalidArrayValueError,
  RequiredValueError,
} from '../errors';
import { tarr } from '../type';
import { def, earr } from '../value';

/**
 * Assign array value or throw {@link InvalidArrayValueError}
 * @param value
 * @returns
 * @throws
 */
export function arr<
  TI,
  T extends R extends true ? TI[] : TI[] | undefined,
  R extends boolean,
  RT extends R extends true ? T : T | undefined
>(value?: T, options?: InitOptions<T, R>): RT {
  if (!tarr(value)) throw new InvalidArrayValueError();

  if (!def(value) && options?.required == true)
    throw new RequiredValueError(value);

  if (earr(value) && options?.notEmpty == true)
    throw new EmptyValueError(value);

  if (def(value)) return value;

  return undefined as RT;
}
