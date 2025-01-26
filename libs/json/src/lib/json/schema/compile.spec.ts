import { join } from 'path';
import { compileJSONSchema } from '../compile-json-schema';
describe('compile it', () => {
  it('should compile', () => {
    compileJSONSchema(
      join(__dirname),
      'model.schema.json',
      'index.schema.json'
    );
  });
});
