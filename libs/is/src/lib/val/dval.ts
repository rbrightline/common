import { EmptyValueError } from '../errors';
import { def } from './value';
/**
 s* Initialize value if not undefined, null, or empty, or asign the default value. If default value is not defined, then throw error
 * @param value
 * @param defaultValue
 * @returns
 */
export function dval<T>(value: T | undefined | null, defaultValue: T) {
  if (def(value)) return value;

  if (def(defaultValue)) return defaultValue;

  throw new EmptyValueError(value);
}
