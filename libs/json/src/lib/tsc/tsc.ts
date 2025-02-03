import { readJSONFile, writeFile } from '@rline/fs';
import { JSONSchema, SchemaConfig } from '@rline/type';
import { TypeManager } from '../json-to-type-compiler';

/**
 * Compile JSON schemas into typescript types
 * @param options
 */
export async function tsc(options: SchemaConfig) {
  const schema = await readJSONFile<JSONSchema>(options.main);
  const result = new TypeManager(schema).compile();

  await writeFile(options.output.type, result);
}
