import { parsePropertyType } from './parse-property-type';

describe('parseProeprtyType', () => {
  it('should parse property type', () => {
    expect(parsePropertyType({ type: 'string' } as any)).toEqual('string');
    expect(parsePropertyType({ type: 'number' } as any)).toEqual('number');
    expect(parsePropertyType({ type: 'integer' } as any)).toEqual('number');
    expect(parsePropertyType({ type: 'boolean' } as any)).toEqual('boolean');
    expect(
      parsePropertyType({ type: 'object', target: 'Some' } as any)
    ).toEqual('Some');
    expect(
      parsePropertyType({ type: 'array', items: { type: 'string' } } as any)
    ).toEqual('string[]');
    expect(
      parsePropertyType({ type: 'array', items: { type: 'number' } } as any)
    ).toEqual('number[]');
    expect(
      parsePropertyType({ type: 'array', items: { type: 'boolean' } } as any)
    ).toEqual('boolean[]');
    expect(
      parsePropertyType({ type: 'array', items: { type: 'integer' } } as any)
    ).toEqual('number[]');
    expect(
      parsePropertyType({
        type: 'array',
        items: { type: 'object', target: 'Some' },
      } as any)
    ).toEqual('Some[]');
  });
});
