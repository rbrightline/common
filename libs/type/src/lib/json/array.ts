import { ValueType } from '../common';
import { JSONCommonSchema } from './common';

export class __JSONArraySchema<
  S,
  T extends ValueType
> extends JSONCommonSchema<T> {
  type: 'array';
  items: S;

  uniqueItems?: boolean;
  maxItems?: number;
  minItems?: number;

  /**
   * An array instance is valid against "contains" if at least one of its elements is valid against the given schema.
   */
  contains?: S;
}
