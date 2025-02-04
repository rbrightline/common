import { def } from './def';

describe('def - is value defined', () => {
  it.each`
    value          | result
    ${undefined}   | ${false}
    ${null}        | ${false}
    ${NaN}         | ${false}
    ${-1}          | ${true}
    ${0}           | ${true}
    ${1}           | ${true}
    ${0.2}         | ${true}
    ${{}}          | ${true}
    ${[]}          | ${true}
    ${[null]}      | ${true}
    ${[undefined]} | ${true}
  `('def($value) should return $result', ({ value, result }) => {
    expect(def(value)).toEqual(result);
  });
});
