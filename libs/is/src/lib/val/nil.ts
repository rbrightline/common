/**
 * Is value null?
 * If `value === null` return `true`, else `false`
 * @param value
 * @returns
 */
export function nil(value: unknown): value is null {
  return value === null;
}
