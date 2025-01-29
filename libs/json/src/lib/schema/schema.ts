import { readJSONFile, writeJSONFile } from '@rline/fs';
import { JSONSchema } from '@rline/type';
import { join } from 'path';
import { compileSchema, getConfig } from '../util';

/**
 * JSON [schema](http://json-schema.org/draft-07/schema#) compiler
 */
export async function schema() {
  const config = await getConfig();
  const mainSchemaFilePath = join(config.root, config.main);
  const schemaOutputPath = join(config.root, config.output.schema);

  const mainSchema = await readJSONFile<JSONSchema>(mainSchemaFilePath);

  const result = await compileSchema(mainSchema);

  await writeJSONFile(schemaOutputPath, result);
}
