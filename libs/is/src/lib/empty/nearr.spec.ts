import { nearr } from './nearr';

describe('nearr', () => {
  describe('nearr (false cases)', () => {
    it.each`
      value        | result
      ${undefined} | ${false}
      ${null}      | ${false}
    `('nearr($value) should return $result', ({ value, result }) => {
      expect(nearr(value)).toEqual(result);
    });
  });
});
