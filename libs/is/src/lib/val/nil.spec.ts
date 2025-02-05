import { nil } from './nil';

describe('nil - is null value', () => {
  it('nil(undefined) should return false', () => {
    expect(nil(undefined)).toEqual(false);
  });

  it.each`
    value   | result
    ${null} | ${true}
    ${1}    | ${false}
    ${-1}   | ${false}
    ${0}    | ${false}
    ${{}}   | ${false}
    ${[]}   | ${false}
  `('nil($value) should return $result', ({ value, result }) => {
    expect(nil(value)).toEqual(result);
  });
});
