import { JSONCommonSchema } from './common';

export type JSONBooleanSchema = JSONCommonSchema<boolean> & {
  /**
   * schema type
   */
  type: 'boolean';
};
