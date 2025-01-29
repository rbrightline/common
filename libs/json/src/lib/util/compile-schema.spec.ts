import { compileSchema } from './compile-schema';

describe('compileSchema', () => {
  it('should compile schema', async () => {
    const root = '../../test/schema';
    const mainFileName = 'model.schema.json';

    await compileSchema(root, mainFileName);
  });
});
