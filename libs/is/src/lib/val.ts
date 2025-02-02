import { InitOptions } from './common';
import { EmptyValueError } from './errors';
import { ne } from './value';

/**
 * Initialize value
 * @param value value
 * @param options options {@link InitOptions}
 * @returns value
 * @throws if the value does not meet the criteria
 */
export function val<T, R extends boolean, RO extends boolean>(
  value: R extends true ? T : T | undefined,
  options?: InitOptions<R, RO>
): R extends true
  ? RO extends true
    ? Readonly<T>
    : T
  : RO extends true
  ? Readonly<T | undefined>
  : T | undefined {
  if (ne(value)) return value;
  if (options?.required == true) throw new EmptyValueError(value);

  return value;
}
