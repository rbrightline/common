import { InitOptions, Optional, ValueType } from '../common';
import { ne } from '../empty';
import { EmptyValueError, RequiredValueError } from '../errors';
import { def } from './def';

/**
 * Initialize value. If `options.required == true` and the value is not defined or empty, then throw {@link EmptyValueError}
 *
 * @param value value
 * @param options options {@link InitOptions}
 * @returns value
 * @throws if the value does not meet the criteria
 */
export function val<
  T extends ValueType,
  R extends boolean,
  RO extends boolean,
  RT extends R extends true ? T : Optional<T>
>(value?: Optional<T>, options?: InitOptions<T, R, RO>): RT {
  if (def(value)) {
    if (options?.notEmpty && !ne(value)) throw new EmptyValueError(value);
    if (options?.readonly) {
      Object.freeze(value);
    }
  } else {
    if (def(options?.default)) return options.default as unknown as RT;
    if (options?.required == true) throw new RequiredValueError(value);
  }

  return value as RT;
}
