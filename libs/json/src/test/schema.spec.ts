import { rmdir } from '@rline/fs';
import { init, schema, SchemaManagerOptions } from '../lib';
import { safepath } from './__test-utils';
import { SCHEMA_CONFIG_TEMPLATE } from './init.spec';

describe('Schema', () => {
  const options: SchemaManagerOptions = {
    root: safepath('schema'),
    output: safepath('schema-dist'),
    main: safepath('schema', 'model.schema.json'),
  };

  beforeAll(async () => {
    await init(options.root, SCHEMA_CONFIG_TEMPLATE);
  });

  afterAll(async () => {
    await rmdir(options.root, { recursive: true });
    await rmdir(options.output, { recursive: true });
  });

  it('should compile schema', async () => {
    await schema(options);
  });
});
