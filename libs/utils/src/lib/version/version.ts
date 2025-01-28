export type UpVersion =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

export type VersionType = `${UpVersion}.${UpVersion}.${UpVersion}${
  | ''
  | '-beta'}`;

  
/**
 * Version editor
 */
export class Version {
  static major(version: VersionType, up: UpVersion = 1) {
    const [f] = version.split('.');
    const __f = parseInt(f.split('-').shift() ?? '0') + up;
    return [__f, 0, 0].join('.');
  }

  static minor(version: VersionType, up: UpVersion = 1) {
    const [f, s] = version.split('.');
    const __s = parseInt(s.split('-').shift() ?? '0') + up;
    return [f, __s, 0].join('.');
  }

  static patch(version: VersionType, up: UpVersion = 1) {
    const [f, s, t] = version.split('.');
    const __t = parseInt(t.split('-').shift() || '0') + up;
    return [f, s, __t].join('.');
  }

  static beta(version: VersionType, up: UpVersion = 1) {
    const [f, s, t] = version.split('.');
    const __t = parseInt(t.split('-').shift() ?? '0') + up;
    return [f, s, __t].join('.') + '-beta';
  }
}
