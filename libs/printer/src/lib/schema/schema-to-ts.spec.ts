import { readFileSync, writeFileSync } from 'fs';

import { join } from 'path';
import { JSONSchema } from '@rline/type';
import { printSchema } from './print-schema';

describe('schemaToTs', () => {
  it('should schema to ts', () => {
    const result = printSchema(
      JSON.parse(
        readFileSync(join(__dirname, 'model.schema.json')).toString()
      ) as JSONSchema
    );

    writeFileSync(join(__dirname, 'model.ts'), result);
  });
});
