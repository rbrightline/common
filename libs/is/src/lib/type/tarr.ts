/**
 * is type of array?
 * @param value
 * @returns
 */
export function tarr<T extends Array<unknown>>(
  value?: T | unknown
): value is T {
  return Array.isArray(value);
}
