import { udef } from './udef';

describe('def - is defined', () => {
  it.each`
    value          | result
    ${undefined}   | ${true}
    ${NaN}         | ${true}
    ${null}        | ${true}
    ${-1}          | ${false}
    ${0}           | ${false}
    ${1}           | ${false}
    ${0.2}         | ${false}
    ${{}}          | ${false}
    ${[]}          | ${false}
    ${[null]}      | ${false}
    ${[undefined]} | ${false}
  `('def($value) should return $result', ({ value, result }) => {
    expect(udef(value)).toEqual(result);
  });
});
