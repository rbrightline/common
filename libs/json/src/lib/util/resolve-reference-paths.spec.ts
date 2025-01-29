import { writeJSONFile } from '@rline/fs';
import { join } from 'path';
import { mapSchemaFiles } from './map-schema-files';
import { resolveReferencePaths } from './resolve-reference-paths';

describe('resolveReferencePaths', () => {
  it('shuold resolve reference paths', async () => {
    const root = join(__dirname, './test/schema');
    const dist = join(__dirname, './test/dist');

    const map = await mapSchemaFiles(root);

    resolveReferencePaths(map);

    for (const [key, value] of map.entries()) {
      await writeJSONFile(key.replace(root, dist), value);
    }
  });
});
