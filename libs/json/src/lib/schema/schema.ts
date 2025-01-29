import { writeJSONFile } from '@rline/fs';
import { join } from 'path';
import { getConfig, toSingleFile } from '../util';

/**
 * JSON [schema](http://json-schema.org/draft-07/schema#) compiler
 */
export async function schema() {
  const config = await getConfig();
  const schemaOutputPath = join(config.root, config.output.schema);

  const schema = await toSingleFile(config.root, config.main);

  await writeJSONFile(schemaOutputPath, schema);
}
