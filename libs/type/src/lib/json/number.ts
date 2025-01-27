import { JSONCommonSchema } from './common';

export class JSONNumberSchema extends JSONCommonSchema<number> {
  type: 'number' | 'integer';
  enum?: number[];
  maximum?: number;
  minimum?: number;
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;

  /**
   * A number that should cleanly divide the current value (i.e. have no remainder).
   */
  multipleOf?: number;
}
