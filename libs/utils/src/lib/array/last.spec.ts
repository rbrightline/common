import { last } from './last';

describe('array last', () => {
  it('should return last item in an array', () => {
    expect(last([1, 2, 3, 4])).toEqual(4);
  });
  it('should return last item in an array', () => {
    expect(last([{ some: 'some' }, { other: 'other' }])).toEqual({
      other: 'other',
    });
  });
});
