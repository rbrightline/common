/**
 * is 0 or NaN?
 * @param value
 * @returns
 */
export function enbr<T extends number>(value: T | 0): value is T {
  return value == 0 || isNaN(value);
}
