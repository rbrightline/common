import { nbr } from './nbr';

describe('nbr - initialize number', () => {
  describe('nbr - initialize number with no options', () => {
    it.each`
      value        | result
      ${undefined} | ${undefined}
      ${null}      | ${null}
      ${1}         | ${1}
      ${0}         | ${0}
      ${-1}        | ${-1}
      ${NaN}       | ${NaN}
    `('nbr($value) should return $result', ({ value, result }) => {
      expect(nbr(value)).toEqual(result);
    });
  });

  describe('nbr - initialize with type check', () => {
    it.each`
      value
      ${''}
      ${true}
      ${false}
      ${{}}
      ${[]}
    `('nbr($value) should return $result', ({ value }) => {
      expect(() => nbr(value, { required: true })).toThrow();
    });
  });

  describe('nbr - initialize number with required option', () => {
    it.each`
      value
      ${undefined}
      ${null}
      ${NaN}
    `('nbr($value) should return $result', ({ value }) => {
      expect(() => nbr(value, { required: true })).toThrow();
    });
  });

  //
});
