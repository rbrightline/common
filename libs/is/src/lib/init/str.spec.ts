import { str } from './str';

describe('str - initialize string value', () => {
  describe('str - initialize with not options', () => {
    it.each`
      value        | result
      ${undefined} | ${undefined}
      ${null}      | ${null}
      ${''}        | ${''}
      ${'some'}    | ${'some'}
    `('str($value) should return $result', ({ value, result }) => {
      expect(str(value)).toEqual(result);
    });
  });
});
