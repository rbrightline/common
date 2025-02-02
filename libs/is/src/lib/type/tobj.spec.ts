import { tobj } from './tobj';

describe('tobj', () => {
  it('tobj(value) should return truen if the value is object', () => {
    expect(tobj({})).toEqual(true);
    expect(tobj({ some: true })).toEqual(true);
    expect(tobj([{ some: true }])).toEqual(false);
    expect(tobj(1)).toEqual(false);
    expect(tobj(2)).toEqual(false);
    expect(tobj(-1)).toEqual(false);
    expect(tobj(0)).toEqual(false);
    expect(tobj(true)).toEqual(false);
    expect(tobj(false)).toEqual(false);
    expect(tobj(class A {})).toEqual(false);
  });
});
