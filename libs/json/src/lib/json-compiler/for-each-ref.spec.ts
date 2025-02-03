import { JSONSchema } from '@rline/type';
import { forEachRef } from './for-each-ref';
import { ReadyJSONSchema } from './ready-schema';
describe('forEachRef', () => {
  it('should go through for each $ref', () => {
    const schema: JSONSchema = {
      type: 'object',
      properties: {
        name: {
          $ref: 'ref1',
        },
      },
      definitions: {
        def: {
          $ref: 'ref2',
        },
      },
    };
    let result = '';
    forEachRef(schema as ReadyJSONSchema, (s, r) => {
      result += r.$ref;
      r.$ref = r.$ref + 'updated';
    });

    expect(result).toEqual('ref1ref2');
    expect(
      (schema.properties?.name.$ref as string).endsWith('updated')
    ).toBeTruthy();

    expect(
      (schema.definitions?.def.$ref as string).endsWith('updated')
    ).toBeTruthy();
  });
});
