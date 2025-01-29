import { ValueType } from '../common';
import { JSONCommonSchema } from './common';

/**
 * Array scheme
 */
export type __JSONArraySchema<
  S = any,
  T extends ValueType = ValueType
> = JSONCommonSchema<T[]> & {
  /**
   * schema type
   */
  type: 'array';

  /**
   * schema definition for the items
   */
  items: S;

  /**
   * Should items be unieque
   */
  uniqueItems?: boolean;

  /**
   * maximum allowed items
   */
  maxItems?: number;

  /**
   * minimumm required items
   */
  minItems?: number;

  /**
   * An array instance is valid against "contains" if at least one of its elements is valid against the given schema.
   */
  contains?: S;
};
