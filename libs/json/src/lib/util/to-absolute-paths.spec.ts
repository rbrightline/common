import { writeJSONFile } from '@rline/fs';
import { join } from 'path';
import { toAbsolutePaths } from './to-absolute-paths';
import { toSchemaMap } from './to-schema-map';

describe('toAbsolutePaths', () => {
  it('should convert relative $ref values into absolute paths', async () => {
    const root = join(__dirname, './test/schema');
    const dist = join(__dirname, './test/dist');

    const map = await toSchemaMap(root);

    toAbsolutePaths(map);

    for (const [key, value] of map.entries()) {
      await writeJSONFile(key.replace(root, dist), value);
    }
  });
});
