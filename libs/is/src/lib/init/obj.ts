import { InitOptions } from '../common';
import { eobj } from '../empty';
import {
  EmptyValueError,
  InvalidObjectValueError,
  RequiredValueError,
} from '../errors';
import { tobj } from '../type';
import { def, udef } from '../val';

/**
 * initialize object value or throw {@link InvalidObjectValueError}
 * @param value
 * @returns
 * @throws
 */
export function obj<
  T extends object,
  R extends boolean,
  RO extends boolean,
  RT extends R extends true
    ? RO extends true
      ? Readonly<T>
      : T
    : RO extends true
    ? Readonly<T | undefined>
    : T | undefined
>(
  value: R extends true ? T : T | undefined,
  options?: InitOptions<T, R, RO>
): RT {
  if (def(value)) {
    if (!tobj(value)) throw new InvalidObjectValueError(value);
    if (options?.notEmpty && eobj(value)) throw new EmptyValueError(value);
    if (options?.readonly) Object.freeze(value);
  } else {
    if (def(options?.default)) {
      if (options?.readonly) Object.freeze(options.default);
      return options.default as unknown as RT;
    }
    if (options?.required && udef(value)) throw new RequiredValueError(value);
  }

  return value as RT;
}
