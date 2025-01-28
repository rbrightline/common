import { Version } from './version';

describe('Version Editor', () => {
  it('should update versions', () => {
    const current = '1.0.0';
    expect(Version.patch(current)).toEqual('1.0.1');

    expect(Version.patch(current, 2)).toEqual('1.0.2');

    expect(Version.minor(current)).toEqual('1.1.0');

    expect(Version.minor(current, 2)).toEqual('1.2.0');

    expect(Version.major(current)).toEqual('2.0.0');

    expect(Version.major(current, 2)).toEqual('3.0.0');

    expect(Version.beta(current)).toEqual('1.0.1-beta');
  });
});
