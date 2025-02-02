import { tarr, tnbr, tobj, tstr } from '../type';
import { enbr } from './enbr';
import { eobj } from './eobj';
import { estr } from './estr';
import { nil } from './nil';
import { udef } from './udef';

/**
 * This array type does not have any item
 */
export type EmptyArray = [];

/**
 * is empty array?
 * @param value
 * @returns
 */
export function earr<T>(value: T[] | EmptyArray): value is T[] {
  if (value.length == 0) return true;

  return value.every((e) => {
    if (tstr(e)) return estr(e);
    if (tnbr(e)) return enbr(e);
    if (tobj(e)) return eobj(e);
    if (tarr(e)) return earr(e);

    return udef(e) || nil(e);
  });
}
