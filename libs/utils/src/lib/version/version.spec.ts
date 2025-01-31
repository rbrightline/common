import { major, minor, patch, special } from './version';

describe('Version Editor', () => {
  it('should update versions', () => {
    const v = '1.0.0';
    expect(patch(v)).toEqual('1.0.1');
    expect(minor(v)).toEqual('1.1.0');
    expect(major(v)).toEqual('2.0.0');
    expect(special(v, '-GA')).toEqual('1.0.0-GA');
    expect(special(v, '-rc')).toEqual('1.0.0-rc');
  });
});
