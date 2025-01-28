import {
  PatchVersion,
  VersionNumber,
  Version as VersionType,
} from '@rline/type';

/**
 * Version editor
 */
export class Version {
  static major(version: VersionType, up: VersionNumber = 1) {
    const [f] = version.split('.');
    const __f = parseInt(f.split('-').shift() ?? '0') + up;
    return [__f, 0, 0].join('.');
  }

  static minor(version: VersionType, up: VersionNumber = 1) {
    const [f, s] = version.split('.');
    const __s = parseInt(s.split('-').shift() ?? '0') + up;
    return [f, __s, 0].join('.');
  }

  static patch(version: VersionType, up: PatchVersion = 1) {
    const [f, s, t] = version.split('.');
    const __t = parseInt(t.split('-').shift() || '0') + '' + up;
    return [f, s, __t].join('.');
  }

  static beta(version: VersionType, up: PatchVersion = '1-beta') {
    const [f, s, t] = version.split('.');
    const __t = parseInt(t.split('-').shift() ?? '0') + '' + up;
    return [f, s, __t].join('.') + '-beta';
  }
}
