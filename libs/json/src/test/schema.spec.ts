import { SchemaConfig } from '@rline/type';
import { schema, tsc } from '../lib';
import { safepath } from './__test-utils';

describe('Schema', () => {
  const options: SchemaConfig = {
    root: safepath('schema'),
    main: safepath('schema', 'model.schema.json'),
    output: {
      schema: safepath('schema-dist/model.json'),
      type: '',
    },
  };

  it('should compile schema', async () => {
    await schema(options);
  });

  it('should compile types', async () => {
    await schema(options);
    await tsc({
      root: safepath('schema-dist'),
      main: safepath('schema-dist', 'model.json'),
      output: {
        type: safepath('schema-dist', 'model.ts'),
        schema: options.output.schema,
      },
    });
  });
});
