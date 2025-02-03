import { JSONSchema, PickRequired } from '@rline/type';

/**
 * The schema type that ready to use by the SchemaManager
 */
export type ReadyJSONSchema = PickRequired<
  JSONSchema,
  'type' | 'title' | '$filepath' | '$dirpath' | 'definitions'
>;
