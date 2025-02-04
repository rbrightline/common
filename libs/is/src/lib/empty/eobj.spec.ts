import { eobj } from './eobj';

describe('eobj', () => {
  it('eobjs(value) should return true if the value is 0 or NaN', () => {
    expect(eobj({})).toEqual(true);
    expect(eobj({ some: null })).toEqual(false);
  });
});
