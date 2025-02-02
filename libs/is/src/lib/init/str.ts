import { InitOptions } from '../common';
import { InvalidStringValueError } from '../errors';
import { tstr } from '../type';
import { nestr, nil } from '../value';

/**
 * initialize string value or throw {@link InvalidStringValueError}
 * @param value
 * @returns
 */
export function str<T extends boolean>(
  value: T extends true ? string : string | undefined,
  options?: InitOptions<T>
): T extends true ? string : string | undefined {
  if (tstr(value) && nestr(value)) return value;

  if (options?.required || nil(value)) throw new InvalidStringValueError(value);

  return value;
}
