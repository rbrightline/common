import { InitOptions } from '../common';
import { InvalidArrayValueError } from '../errors';
import { tarr } from '../type';
import { nearr, nil } from '../value';

/**
 * initialize array value or throw {@link InvalidArrayValueError}
 * @param value
 * @returns
 * @throws
 */
export function arr<
  O,
  V extends T extends true ? O[] : O[] | undefined,
  T extends boolean
>(value: V, options?: InitOptions<T>): T extends true ? V : V | undefined {
  if (tarr(value) && nearr<O>(value)) {
    if (options?.readonly) Object.freeze(value);
    return value;
  }

  if (options?.required || nil(value)) throw new InvalidArrayValueError(value);

  if (options?.readonly) Object.freeze(value);

  return value;
}
