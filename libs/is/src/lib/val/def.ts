import { Optional, ValueType } from '../common';
import { udef } from './udef';

/**
 * If the value is defiend, then return true, else false.
 * Defined value means the value that has all features of the given type so not null, undefiend, or NaN
 * @param value
 * @returns
 */
export function def<T extends ValueType>(value?: Optional<T>): value is T {
  return !udef(value);
}
