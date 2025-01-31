import { rmdir } from '@rline/fs';
import { init, schema, SchemaManagerOptions } from '../lib';
import { safepath } from './__test-utils';
import { CONFIG_FILE_PATH } from './init.spec';

describe('schema', () => {
  const options: SchemaManagerOptions = {
    rootPath: safepath('schema'),
    output: safepath('schema-dist'),
    mainFilePath: safepath('schema', 'main.schema.json'),
  };
  const root = safepath('schema');

  beforeAll(async () => {
    await init(root, CONFIG_FILE_PATH);
  });

  afterAll(async () => {
    await rmdir(root, { recursive: true });
  });
  it('should work', async () => {
    await schema(options);
  });
});
