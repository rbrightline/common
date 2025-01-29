import { readJSONFile } from '@rline/fs';
import { JSONSchema } from '@rline/type';
import { mapSchemaFiles } from './map-schema-files';

describe('Map schema files', () => {
  it('should map schema files', async () => {
    const map = await mapSchemaFiles('../../test');

    expect(map).toBeTruthy();
    expect(map.size).greaterThan(0);

    const items: Promise<JSONSchema>[] = [];
    for (const key of map.keys()) {
      items.push(readJSONFile(key));
    }

    expect(await Promise.all(items)).toBeTruthy();
  });
});
