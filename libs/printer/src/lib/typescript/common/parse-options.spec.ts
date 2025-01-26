import { parseOptions } from './parse-options';

describe('parseOptions', () => {
  it('should parse options', () => {
    const result = parseOptions(
      {
        name: 'some',
        type: 'object',
        target: 'Some',
      },
      ['name']
    );

    expect(result).toEqual('{"type":"object","target":()=>Some}');
  });
});
