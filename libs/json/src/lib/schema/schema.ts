import { readJSONFile } from '@rline/fs';

export async function schema() {
  const result = await readJSONFile('./main.schema.json');
  console.log(result);
}
