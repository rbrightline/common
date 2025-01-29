import { Version, VersionExtension } from '@rline/type';

/**
 * Change version by major
 * @param version
 * @returns
 */
export function major(version: Version) {
  const [f] = version.split('.');
  const __f = parseInt(f.split('-').shift() ?? '0') + 1;
  return [__f, 0, 0].join('.');
}

/**
 * Change version by minor
 * @param version
 * @returns
 */
export function minor(version: Version) {
  const [f, s] = version.split('.');
  const __s = parseInt(s.split('-').shift() ?? '0') + 1;
  return [f, __s, 0].join('.');
}

/**
 * Change version by patch
 * @param version
 * @returns
 */
export function patch(version: Version) {
  const [f, s, t] = version.split('.');
  const __t = parseInt(t.split('-').shift() || '0') + '' + 1;
  return [f, s, __t].join('.');
}

/**
 * Change version by beta
 * @param version
 * @returns
 */
export function special(version: Version, type: VersionExtension) {
  const [f, s, t] = version.split('.');
  const __t = t + type;
  return [f, s, __t].join('.');
}
