import { InitOptions } from '../common';
import { InvalidBooleanValueError, RequiredValueError } from '../errors';
import { tbln } from '../type';
import { def } from '../value';

/**
 * initialize boolean value or throw {@link InvalidBooleanValueError}
 * @param value
 * @returns
 * @throws
 */
export function bln<
  R extends boolean,
  RT extends R extends true ? boolean : boolean | undefined | never
>(
  value?: R extends true ? boolean : boolean | undefined,
  options?: InitOptions<boolean, R>
): RT {
  if (!tbln(value)) throw new InvalidBooleanValueError();
  if (!def(value) && options?.required == true)
    throw new RequiredValueError(value);

  return value as RT;
}
