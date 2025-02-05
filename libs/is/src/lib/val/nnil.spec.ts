import { nnil } from './nnil';

describe('nnill - is nnill', () => {
  it.each`
    value        | result
    ${undefined} | ${true}
    ${1}         | ${true}
    ${-1}        | ${true}
    ${0}         | ${true}
    ${{}}        | ${true}
    ${[]}        | ${true}
    ${NaN}       | ${true}
    ${null}      | ${false}
  `('nnill($value) should return $result', ({ value, result }) => {
    expect(nnil(value)).toEqual(result);
  });
});
