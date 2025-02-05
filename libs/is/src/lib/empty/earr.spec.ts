import { earr } from './earr';

describe('earr - is empty array', () => {
  it.each`
    value          | result
    ${[]}          | ${true}
    ${[undefined]} | ${true}
    ${[null]}      | ${true}
    ${[{}]}        | ${true}
    ${undefined}   | ${false}
    ${null}        | ${false}
    ${[1]}         | ${false}
    ${[-1]}        | ${false}
    ${[true]}      | ${false}
    ${[false]}     | ${false}
  `('earr($value) should return $result', ({ value, result }) => {
    expect(earr(value)).toEqual(result);
  });
});
