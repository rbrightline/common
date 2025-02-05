import { Optional, ValueType } from '../common';
import { val } from './val';

/**
 * Required value. If the value and the default value  is not defiend, throw error
 * @param value
 * @param defaultValue
 * @returns
 */
export function rval<T extends ValueType>(
  value?: Optional<T>,
  defaultValue?: T
): T | never {
  return val(value, { required: true, default: defaultValue });
}
