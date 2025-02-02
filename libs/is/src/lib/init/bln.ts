import { InitOptions } from '../common';
import { InvalidBooleanValueError } from '../errors';
import { tbln } from '../type';
import { nil } from '../value';

/**
 * initialize boolean value or throw {@link InvalidBooleanValueError}
 * @param value
 * @returns
 * @throws
 */
export function bln<T extends boolean>(
  value: T extends true ? boolean : boolean | undefined,
  options?: InitOptions<T>
): T extends true ? boolean : boolean | undefined {
  if (tbln(value)) return value;
  if (options?.required == true || nil(value))
    throw new InvalidBooleanValueError(value);

  return value;
}
