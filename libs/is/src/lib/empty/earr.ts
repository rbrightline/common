import { Optional, ValueType } from '../common';
import { def, udef } from '../val';
import { ne } from './ne';

/**
 * This array type does not have any item
 */
export type EmptyArray = [];

/**
 * is empty array?
 * @param value
 * @returns
 */
export function earr(value?: Optional<ValueType>): boolean {
  if (def(value)) {
    if ((value as [])?.length == 0) return true;

    return (value as [])?.every((e) => udef(e) || !ne(e));
  }

  return false;
}
