import { estr } from './estr';

describe('estr - is empty string', () => {
  it.each`
    value                         | result
    ${undefined}                  | ${false}
    ${null}                       | ${false}
    ${'some'}                     | ${false}
    ${''}                         | ${true}
    ${'  '}                       | ${true}
    ${'                        '} | ${true}
  `('estr($value) should return $result', ({ value, result }) => {
    expect(estr(value)).toEqual(result);
  });
});
