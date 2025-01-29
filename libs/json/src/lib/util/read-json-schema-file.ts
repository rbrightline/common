import { readJSONFile } from '@rline/fs';
import { JSONSchema } from '@rline/type';
/**
 * Read the json schema file, if it does not have a title, set title using names library
 * if definitions are undefined, set it empty object.
 * @param filepath
 */
export async function readJSONSchemaFile(
  filepath: string
): Promise<JSONSchema> {
  return await readJSONFile<JSONSchema>(filepath);
}
