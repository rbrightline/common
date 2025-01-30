import { join } from 'path';
import { SchemaManager } from './schema-manager';

describe('SchemaManager', () => {
  it('should compile schema', async () => {
    const manager = new SchemaManager({
      rootPath: join(__dirname, './test/schema'),
      mainFilePath: join(__dirname, './test/schema/model.schema.json'),
      output: join(__dirname, './test/dist'),
    });

    await manager.compile();
  });
});
