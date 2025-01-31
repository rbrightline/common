import { JSONSchema } from '@rline/type';
import { isRef } from './is-ref';

describe('isRef', () => {
  it('should check the schema is a reference schema', () => {
    const stringSchema: JSONSchema = { type: 'string' };
    const numberSchema: JSONSchema = { type: 'number' };
    const invalidRef: JSONSchema = { $ref: '' };
    const validREf: JSONSchema = { $ref: './some' };

    expect(isRef(stringSchema)).toEqual(false);
    expect(isRef(numberSchema)).toEqual(false);
    expect(isRef(invalidRef)).toEqual(false);
    expect(isRef(validREf)).toEqual(true);
  });
});
