import { InitOptions } from '../common';
import { EmptyValueError, InvalidStringValueError } from '../errors';
import { tstr } from '../type';
import { def, nestr, nil } from '../value';

/**
 * initialize string value or throw {@link InvalidStringValueError}
 * @param value
 * @returns
 */
export function str<
  R extends boolean,
  T extends R extends true ? string : string | undefined
>(
  value?: R extends true ? string : string | undefined,
  options?: InitOptions<string, R>
): T {
  if (tstr(value) && nestr(value)) return value as T;

  if (options?.notEmpty == true) throw new EmptyValueError();

  if (options?.required || nil(value)) {
    if (def(options?.default)) return options.default as T;

    throw new InvalidStringValueError(value);
  }

  return value as T;
}
