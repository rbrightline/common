import { Optional } from '../common';
import { ValueType } from '../common/value-type';
import { tarr, tnbr, tobj, tstr } from '../type';
import { def } from '../val/def';
import { nearr } from './nearr';
import { nenbr } from './nenbr';
import { neobj } from './neobj';
import { nestr } from './nestr';

/**
 * is not empty value (not null, undefined, empty string or object)?
 * - string: not be empty string
 * - number: not NaN
 * - object: not Empty
 * - array: not Empty
 * @param value
 * @returns
 */
export function ne<T extends ValueType>(value?: Optional<T>): boolean {
  if (def(value)) {
    if (tstr(value)) return nestr(value);
    if (tnbr(value)) return nenbr(value);
    if (tobj(value)) return neobj(value);
    if (tarr(value)) return nearr(value);

    return true;
  }

  return false;
}
