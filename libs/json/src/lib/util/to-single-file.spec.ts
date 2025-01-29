import { join } from 'path';
import { toSingleFile } from './to-single-file';

describe('compileSchema', () => {
  it('should compile schema', async () => {
    const root = join(__dirname, 'test');
    const mainFileName = 'model.schema.json';

    await toSingleFile(root, mainFileName);
  });
});
