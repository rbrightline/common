import { SchemaManager, SchemaManagerOptions } from '../util';

/**
 * JSON [schema](http://json-schema.org/draft-07/schema#) compiler
 */
export async function schema(options: SchemaManagerOptions) {
  await new SchemaManager({ ...options }).compile();
}
