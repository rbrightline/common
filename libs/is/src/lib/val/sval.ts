import { Optional, ValueType } from '../common';
import { ne } from '../empty';
import { EmptyValueError } from '../errors';
import { rval } from './rval';

/**
 * Required and Not empty value. If the value is not defined or empty string, object, or array, thow {@link EmptyValueError}
 * @param value T | undefined | null
 * @param defautlValue T
 * @throws if value is not defined or empty, trhow EmptyValueError or RequiredValueError
 * @returns
 */
export function sval<T extends ValueType>(
  value?: Optional<T>,
  defautlValue?: T
): T | never {
  if (ne(value)) return rval(value, defautlValue);

  throw new EmptyValueError(value);
}
