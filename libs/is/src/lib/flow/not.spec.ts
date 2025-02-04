import { not } from './not';
describe('not - is not', () => {
  it.each`
    value        | result
    ${NaN}       | ${true}
    ${undefined} | ${true}
    ${null}      | ${true}
    ${true}      | ${false}
    ${false}     | ${true}
    ${{}}        | ${false}
    ${1}         | ${false}
    ${-1}        | ${false}
    ${2}         | ${false}
    ${5}         | ${false}
  `('not($value) should return $result', ({ value, result }) => {
    expect(not(value)).toEqual(result);
  });
});
