import { tarr } from './tarr';
describe('tarr - is type of array', () => {
  it.each`
    value          | result
    ${undefined}   | ${true}
    ${null}        | ${true}
    ${[]}          | ${true}
    ${[null]}      | ${true}
    ${[undefined]} | ${true}
    ${1}           | ${false}
    ${-1}          | ${false}
    ${0}           | ${false}
    ${''}          | ${false}
    ${true}        | ${false}
    ${false}       | ${false}
    ${{}}          | ${false}
  `('tarr($value) should return $result', ({ value, result }) => {
    expect(tarr(value)).toEqual(result);
  });
});
