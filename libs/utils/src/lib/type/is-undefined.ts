/**
 * Check the value is undefined or not
 * @param value
 * @returns
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

/**
 * Check the value is defined or not
 * @param value
 * @returns
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  if (typeof value == 'number') return !isNaN(value);
  return value !== undefined && value !== null;
}
