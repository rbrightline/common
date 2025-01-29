import { ValueType } from '../common';

export type JSONCommonSchema<T extends ValueType = ValueType> = {
  /**
   * The absolute schema file path
   */
  $filepath?: string;

  /**
   * The absolute scheme dir path
   */
  $dirpath?: string;
  /**
   * Schema path
   */
  $schema?: string;

  /**
   * Unique schema id
   */
  $id?: string;

  /**
   * Schema title, if the schema is referenced, the title should be set.
   */
  title?: string;

  /**
   * Any comment
   */
  $comment?: string;

  /**
   * Reference to another schema
   */
  $ref?: string;

  /**
   * Schema description
   */
  description?: string;

  /**
   * Examples for the schema
   */
  examples?: T[];

  /**
   * Default value for the schemea
   */
  default?: T;

  /**
   * Constant value for the schema
   */
  const?: T;

  /**
   * Value format
   */
  format?: string;

  /**
   * read only schema
   */
  readOnly?: boolean;

  /**
   * Content encoding
   */
  contentEncoding?: string;

  /**
   * Content media type
   */
  contentMediaType?: string;
};
