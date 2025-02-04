import { earr } from './earr';

describe('earr - is empty array', () => {
  it.each`
    value          | result
    ${undefined}   | ${false}
    ${null}        | ${false}
    ${[]}          | ${true}
    ${[null]}      | ${true}
    ${[undefined]} | ${true}
    ${[1]}         | ${false}
    ${[-1]}        | ${false}
    ${[true]}      | ${false}
    ${[false]}     | ${false}
    ${[{}]}        | ${false}
  `('earr($value) should return $result', ({ value, result }) => {
    expect(earr(value)).toEqual(result);
  });
});
