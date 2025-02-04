import { InitOptions } from '../common';
import { EmptyValueError, InvalidObjectValueError } from '../errors';
import { tobj } from '../type';
import { def, neobj, nil } from '../value';

/**
 * initialize object value or throw {@link InvalidObjectValueError}
 * @param value
 * @returns
 * @throws
 */
export function obj<T extends object, R extends boolean, RO extends boolean>(
  value: R extends true ? T : T | undefined,
  options?: InitOptions<T, R, RO>
): R extends true
  ? RO extends true
    ? Readonly<T>
    : T
  : RO extends true
  ? Readonly<T | undefined>
  : T | undefined {
  if (tobj(value) && neobj(value)) {
    if (options?.readonly) Object.freeze(value);
    return value;
  }

  if (options?.notEmpty == true) throw new EmptyValueError();

  if (options?.required || nil(value)) {
    if (def(options?.default)) return options.default as T;
    throw new InvalidObjectValueError(value);
  }

  if (options?.readonly) Object.freeze(value);

  return value;
}
