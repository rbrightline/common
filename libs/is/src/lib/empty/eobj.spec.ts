import { eobj } from './eobj';

describe('eobj - is empty object', () => {
  it.each`
    value        | result
    ${{}}        | ${true}
    ${undefined} | ${false}
    ${null}      | ${false}
    ${NaN}       | ${false}
  `('eobj($value) should return $result', ({ value, result }) => {
    expect(eobj(value)).toEqual(result);
  });
});
