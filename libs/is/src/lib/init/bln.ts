import { InitOptions } from '../common';
import { InvalidBooleanValueError, RequiredValueError } from '../errors';
import { tbln } from '../type';
import { def, udef } from '../val';

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
  if (def(value)) {
    if (!tbln(value)) throw new InvalidBooleanValueError(value);
  } else {
    if (def(options?.default)) return options?.default as unknown as RT;
    if (options?.required && udef(value)) throw new RequiredValueError(value);
  }

  return value as RT;
}
