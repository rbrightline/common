import { bln } from './bln';

describe('bln - init boolean value', () => {
  describe('bln - init with no options', () => {
    it.each`
      value        | result
      ${undefined} | ${undefined}
      ${null}      | ${null}
    `('bln($value) should return $result', ({ value, result }) => {
      expect(bln(value)).toEqual(result);
    });
  });
});
