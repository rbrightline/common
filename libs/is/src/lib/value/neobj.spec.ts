import { neobj } from './neobj';

describe('neobj', () => {
  it('neobj(value) should return true if the value is not empty', () => {
    expect(neobj({})).toEqual(false);
    expect(neobj({ some: 'some' })).toEqual(true);
  });
});
