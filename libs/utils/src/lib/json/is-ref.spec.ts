import { JSONSchema } from '@rline/type';
import { isRef } from './is-ref';

describe('isRef', () => {
  it('should check the schema is a reference schema', () => {
    const stringSchema: JSONSchema = { type: 'string' };
    const numberSchema: JSONSchema = { type: 'number' };
    const refSchema: JSONSchema = { $ref: '' };

    expect(isRef(stringSchema)).toEqual(false);
    expect(isRef(numberSchema)).toEqual(false);
    expect(isRef(refSchema)).toEqual(true);
  });
});
