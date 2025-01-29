import { readJSONFile } from '@rline/fs';
import { JSONSchema } from '@rline/type';
import { toSchemaMap } from './to-schema-map';

describe('toMap', () => {
  it('should map schema files', async () => {
    const map = await toSchemaMap('../../test');

    expect(map).toBeTruthy();
    expect(map.size).greaterThan(0);

    const items: Promise<JSONSchema>[] = [];
    for (const key of map.keys()) {
      items.push(readJSONFile(key));
    }

    expect(await Promise.all(items)).toBeTruthy();
  });
});
