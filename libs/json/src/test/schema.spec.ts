import { schema, SchemaManagerOptions } from '../lib';
import { safepath } from './__test-utils';

describe('Schema', () => {
  const options: SchemaManagerOptions = {
    root: safepath('schema'),
    output: safepath('schema-dist'),
    main: safepath('schema', 'model.schema.json'),
  };

  it('should compile schema', async () => {
    await schema(options);
  });
});
