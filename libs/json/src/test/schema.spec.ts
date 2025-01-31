import { rmdir } from '@rline/fs';
import { init, schema, SchemaManagerOptions } from '../lib';
import { safepath } from './__test-utils';
import { SCHEMA_CONFIG_TEMPLATE } from './init.spec';

describe('schema', () => {
  const options: SchemaManagerOptions = {
    root: safepath('schema'),
    output: safepath('schema-dist'),
    main: safepath('schema', 'main.schema.json'),
  };
  const root = safepath('schema');

  beforeAll(async () => {
    await init(root, SCHEMA_CONFIG_TEMPLATE);
  });

  afterAll(async () => {
    await rmdir(options.root, { recursive: true });
  });

  it('should work', async () => {
    await schema(options);
  });
});
