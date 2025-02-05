import { Optional, ValueType } from '../common';
import { def } from './def';

/**
 s* Initialize value if not undefined, null, or empty, or asign the default value. If default value is not defined, then throw error
 * @param value
 * @param defaultValue
 * @returns
 */
export function dval<T extends ValueType>(
  value?: Optional<T>,
  defaultValue?: T
) {
  if (def(value)) return value;

  if (def(defaultValue)) return defaultValue;

  return value;
}
