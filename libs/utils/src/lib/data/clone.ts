/**
 * Clone object (using JSON.parse(JSON.stringify(data))))
 * @param value
 * @returns
 */
export function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
