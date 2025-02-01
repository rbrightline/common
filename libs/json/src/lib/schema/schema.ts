import { SchemaManager, SchemaManagerOptions } from '../util';

/**
 * Compile schema files into a single schema file resolving $refs and definitions.
 * @important the schema function requires `schema.config.json` which can be initialized using `json init` command
 *
 * @param options options {@link SchemaManagerOptions}
 *
 *
 * @return
 * ````bash
 *    json schema
 * ````
 */
export async function schema(options: SchemaManagerOptions) {
  await new SchemaManager({ ...options }).compile();
}
