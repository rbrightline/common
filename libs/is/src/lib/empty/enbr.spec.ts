import { enbr } from './enbr';

describe('enbr empty number', () => {
  it.each`
    value        | result
    ${undefined} | ${false}
    ${null}      | ${false}
    ${1}         | ${false}
    ${-1}        | ${false}
    ${1.1}       | ${false}
    ${0.3}       | ${false}
    ${0}         | ${true}
  `('earr($value) should return $result', ({ value, result }) => {
    expect(enbr(value)).toEqual(result);
  });
});
