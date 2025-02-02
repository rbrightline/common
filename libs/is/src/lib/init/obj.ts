import { InitOptions } from '../common';
import { InvalidObjectValueError } from '../errors';
import { tobj } from '../type';
import { neobj, nil } from '../value';

/**
 * initialize object value or throw {@link InvalidObjectValueError}
 * @param value
 * @returns
 * @throws
 */
export function obj<T extends boolean, O extends object, RO extends boolean>(
  value: T extends true ? O : O | undefined,
  options?: InitOptions<T, RO>
): T extends true
  ? RO extends true
    ? Readonly<O>
    : O
  : RO extends true
  ? Readonly<O | undefined>
  : O | undefined {
  if (tobj(value) && neobj(value)) {
    if (options?.readonly) Object.freeze(value);
    return value;
  }

  if (options?.required || nil(value)) throw new InvalidObjectValueError(value);

  if (options?.readonly) Object.freeze(value);

  return value;
}
