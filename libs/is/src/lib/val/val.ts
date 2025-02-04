import { InitOptions } from '../common';
import { EmptyValueError, RequiredValueError } from '../errors';
import { def, ne } from './value';

/**
 * Initialize value. If `options.required == true` and the value is not defined or empty, then throw {@link EmptyValueError}
 *
 * @param value value
 * @param options options {@link InitOptions}
 * @returns value
 * @throws if the value does not meet the criteria
 */
export function val<T, R extends boolean, RO extends boolean>(
  value?: R extends true ? T : T | undefined,
  options?: InitOptions<T, R, RO>
): R extends true
  ? RO extends true
    ? Readonly<T>
    : T
  : RO extends true
  ? Readonly<T | undefined>
  : T | undefined {
  if (ne(value)) return value;

  if (options?.notEmpty == true) throw new EmptyValueError();

  if (options?.required == true) {
    if (def<T>(options?.default)) return options?.default as T;
    throw new RequiredValueError(value);
  }

  return value as T;
}
