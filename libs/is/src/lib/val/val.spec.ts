import { val } from './val';

describe('val - init value ', () => {
  describe('number values with no options', () => {
    it.each`
      value        | result
      ${undefined} | ${undefined}
      ${null}      | ${null}
      ${NaN}       | ${NaN}
      ${1}         | ${1}
      ${-1}        | ${-1}
      ${0}         | ${0}
      ${{}}        | ${{}}
      ${[]}        | ${[]}
      ${true}      | ${true}
      ${false}     | ${false}
    `('val($value) should return $result', ({ value, result }) => {
      expect(val(value)).toEqual(result);
    });
  });
});
