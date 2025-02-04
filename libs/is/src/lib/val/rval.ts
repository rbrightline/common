import { val } from './val';

/**
 * Required value. If the value and the default value  is not defiend, throw error
 * @param value
 * @param defaultValue
 * @returns
 */
export function rval<T>(
  value?: T | null | undefined,
  defaultValue?: T
): T | never {
  return val(value as T, { required: true, default: defaultValue });
}
