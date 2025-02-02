export type Obj = {
  [key: string | symbol | number]: unknown;
};

/**
 * is typeof object?
 * typeof value ==='object' && value !==null && !Array.isArray(value)
 * @param value
 * @returns
 */
export function tobj(value: unknown): value is Obj {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
