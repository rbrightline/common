/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Class constructor type
 */
export interface Type<T, Args extends [] = any> {
  new (...args: Args): T;
}
