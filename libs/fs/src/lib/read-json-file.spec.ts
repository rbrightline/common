import { JSONSchema } from '@rline/type';
import { join } from 'path';
import { readJSONFile } from './read-json-file';

describe('readJSONFile', () => {
  it('should read json file', async () => {
    const result = await readJSONFile<JSONSchema>(
      join(__dirname, './test/test.json')
    );

    expect(result).toBeTruthy();
    expect(result).toBeTypeOf('object');
    expect(result.const).toEqual(100);
  });
});
