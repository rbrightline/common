import { arr } from './arr';

describe('arr - array init', () => {
  describe('arr - with no options', () => {
    it.each`
      value          | result
      ${[]}          | ${[]}
      ${[undefined]} | ${[undefined]}
      ${[null]}      | ${[null]}
      ${undefined}   | ${undefined}
      ${['some']}    | ${['some']}
    `('arr($value) should return $result', ({ value, result }) => {
      expect(arr(value)).toEqual(result);
    });
  });

  describe('arr - with required values', () => {
    it.each`
      value          | result
      ${[]}          | ${[]}
      ${[undefined]} | ${[undefined]}
      ${[null]}      | ${[null]}
      ${['some']}    | ${['some']}
    `(
      'arr($value, { required: true } ) should return $result',
      ({ value, result }) => {
        expect(arr(value, { required: true })).toEqual(result);
      }
    );
  });

  describe('arr - with required values throw', () => {
    it.each`
      value
      ${undefined}
      ${null}
      ${''}
      ${1}
      ${true}
      ${false}
    `(
      'arr($value, { required:true } ) should throw RequriedValueError',
      ({ value }) => {
        expect(() => arr(value, { required: true })).toThrow();
      }
    );
  });
});
