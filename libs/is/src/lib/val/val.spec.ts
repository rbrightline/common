import { val } from './val';

describe('val', () => {
  it('should return the value for defined values', () => {
    const v = val({ name: 'some' });

    expect(val('some')).toEqual('some');
    expect(val(1)).toEqual(1);
    expect(val(9)).toEqual(9);
    expect(val(-1)).toEqual(-1);
    expect(val({ some: 'some' })).toEqual({ some: 'some' });
    expect(val([{ some: 'some' }])).toEqual([{ some: 'some' }]);
  });

  it('should throw error for required but empty values', () => {
    expect(() => val(0, { required: true })).toThrow();
    expect(() => val(NaN, { required: true })).toThrow();
    expect(() => val('', { required: true })).toThrow();
    expect(() => val('   ', { required: true })).toThrow();
    expect(() => val({}, { required: true })).toThrow();
    expect(() => val([], { required: true })).toThrow();
  });

  it('should create readonly values', () => {
    const v = val(['some'], { readonly: true });
  });
});
