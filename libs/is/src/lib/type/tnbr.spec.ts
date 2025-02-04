import { tnbr } from './tnbr';

describe('tnbr - is type of number', () => {
  it.each`
    value        | result
    ${undefined} | ${true}
    ${null}      | ${true}
    ${NaN}       | ${true}
    ${''}        | ${false}
    ${true}      | ${false}
    ${false}     | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
  `('tnbr($value) should return $result', ({ value, result }) => {
    expect(tnbr(value)).toEqual(result);
  });
});
