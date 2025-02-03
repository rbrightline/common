import { writeJSONFile } from '@rline/fs';
import { SchemaConfig } from '@rline/type';
import { SchemaManager } from '../json-compiler';

/**
 * Compile schema files into a single schema file resolving $refs and definitions.
 * @important the schema function requires `schema.config.json` which can be initialized using `json init` command
 *
 * @param options options {@link SchemaConfig}
 *
 *
 * @return
 * ````bash
 *    json schema
 * ````
 */
export async function schema(options: SchemaConfig) {
  const compiled = await new SchemaManager(options).compile();
  await writeJSONFile(options.output.schema, compiled);

  return compiled;
}
