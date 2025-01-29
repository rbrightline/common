import { JSONCommonSchema } from './common';

export type JSONNumberSchema = JSONCommonSchema<number> & {
  /**
   * schema type
   */
  type: 'number' | 'integer';

  /**
   * list of allowed number values
   */
  enum?: number[];

  /**
   * maximum allowed number value
   */
  maximum?: number;

  /**
   * minimum required number value
   */
  minimum?: number;

  /**
   * maximum allowed number value
   */
  exclusiveMaximum?: number;

  /**
   * minimum required number value
   */
  exclusiveMinimum?: number;

  /**
   * A number that should cleanly divide the current value (i.e. have no remainder).
   */
  multipleOf?: number;
};
