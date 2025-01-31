import { ReferencePattern } from 'src/lib/pattern';
import { JSONSchemaType } from './type';

export type CommonSchema<ValueType> = {
  type?: JSONSchemaType;
  /**
   * Reference to another schema
   */
  $ref?: ReferencePattern;
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
   * Schema description
   */
  description?: string;

  /**
   * Examples for the schema
   */
  examples?: ValueType[];

  /**
   * Default value for the schemea
   */
  default?: ValueType;

  /**
   * Constant value for the schema
   */
  const?: ValueType;

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
