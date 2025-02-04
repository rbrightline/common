/**
 * is 0 or NaN?
 * @param value
 * @returns
 */
export function enbr(value?: unknown): value is 0 {
  return value === 0;
}
