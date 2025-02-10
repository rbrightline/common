import { tnbr } from './tnbr';

describe('tnbr - is type of number', () => {
  it.each`
    value        | result
    ${undefined} | ${true}
    ${null}      | ${true}
    ${1}         | ${true}
    ${-1}        | ${true}
    ${0}         | ${true}
    ${100}       | ${true}
    ${100.99}    | ${true}
    ${NaN}       | ${false}
    ${''}        | ${false}
    ${true}      | ${false}
    ${false}     | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
  `('tnbr($value) should return $result', ({ value, result }) => {
    expect(tnbr(value)).toEqual(result);
  });

  it('tnbr(NaN) should return false', () => {
    expect(tnbr(NaN)).toEqual(false);
  });
});
