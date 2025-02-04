import { sval } from './sval';
describe('sval', () => {
  it('should init sval', () => {
    expect(sval(1)).toEqual(1);
    expect(sval('some')).toEqual('some');
    expect(sval({ some: 'some' })).toEqual({ some: 'some' });
    expect(sval([{ some: 'some' }])).toEqual([{ some: 'some' }]);
    expect(sval(true)).toEqual(true);
    expect(sval(false)).toEqual(false);

    expect(() => sval({})).toThrow();
    expect(() => sval('')).toThrow();
    expect(() => sval(0)).toThrow();
    expect(() => sval([])).toThrow();
  });
});
