import { InitOptions, Optional } from '../common';
import { estr } from '../empty';
import {
  EmptyValueError,
  InvalidStringValueError,
  RequiredValueError,
} from '../errors';
import { tstr } from '../type';
import { def } from '../val';

/**
 * initialize string value or throw {@link RequiredValueError}
 * @param value
 * @returns
 */
export function str<
  T extends Optional<string>,
  R extends boolean,
  RT = R extends true ? string : T
>(value?: T, options?: InitOptions<string, R>): RT {
  if (def(value)) {
    if (!tstr(value)) throw new InvalidStringValueError(value);
    if (options?.notEmpty && estr(value)) throw new EmptyValueError(value);
  } else {
    if (def(options?.default)) return options?.default as RT;
    if (options?.required == true) throw new RequiredValueError(value);
  }

  return value as RT;
}
