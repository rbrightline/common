import { InitOptions } from '../common';
import { earr } from '../empty';
import {
  EmptyValueError,
  InvalidArrayValueError,
  RequiredValueError,
} from '../errors';
import { tarr } from '../type';
import { def, udef } from '../val';

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
  if (def(value)) {
    if (!tarr(value)) throw new InvalidArrayValueError(value);
    if (options?.notEmpty && earr(value)) throw new EmptyValueError(value);
    if (options?.readonly) Object.freeze(value);
  } else {
    if (def(options?.default)) {
      if (options.readonly) Object.freeze(options.default);
      return options?.default as unknown as RT;
    }
    if (options?.required && udef(value)) throw new RequiredValueError(value);
  }

  return value as RT;
}
