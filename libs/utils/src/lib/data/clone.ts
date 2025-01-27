/**
 * Deep clone object
 * @param value
 * @returns
 */
export function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
