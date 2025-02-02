import { nil } from './nil';
import { udef } from './udef';

/**
 * is defined ( not undefined an not null?
 * @param value
 * @returns
 */
export function def<T>(value: T | undefined | null): value is T {
  return !udef(value) && !nil(value);
}
