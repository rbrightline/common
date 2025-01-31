import { JSONSchema } from '@rline/type';
import { forEachKey } from './for-each-key';

describe('forEachKey', () => {
  it('should go through for each provided key', () => {
    const obj: JSONSchema = {
      type: 'object',
      properties: {
        name: {
          $ref: './some',
        },
      },
      definitions: {
        Name: {
          $ref: './other',
        },
      },
    };

    forEachKey(obj, '$ref', (root, ref) => {
      if (!root.$comment) root.$comment = '';
      root.$comment += ref.$ref;
    });

    expect(obj.$comment).toEqual('./some./other');
  });
});
