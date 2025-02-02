/**
 * is null?
 * @param value
 * @returns
 */
export function nil(value: unknown): value is null {
  return value === null;
}
