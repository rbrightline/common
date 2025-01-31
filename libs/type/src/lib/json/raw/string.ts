import { StringPattern } from '../../pattern';

/**
 * String schema
 */
export type StringSchemaRaw = {
  type?: 'string';

  /**
   * Allowed maximum length
   */
  maxLength?: number;

  /**
   * Required minimum length
   */
  minLength?: number;

  /**
   * Pattern
   */
  pattern?: StringPattern;

  /**
   * Allowed string values
   */
  enum?: string[];
};
