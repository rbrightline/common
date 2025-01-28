import { first } from './first';

describe('array first', () => {
  it('should return first item in an array', () => {
    expect(first([1, 2, 3, 4])).toEqual(1);
  });
  it('should return first item in an array', () => {
    expect(first([{ some: 'some' }, { other: 'other' }])).toEqual({
      some: 'some',
    });
  });
});
