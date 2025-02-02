/**
 * is undefiend?
 * @return boolean
 */
export function udef(value: unknown): value is undefined {
  return value === undefined;
}
