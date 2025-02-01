import { existsSync, readdirSync, statSync } from 'fs';
import { LIBRARYDIR } from './constants';
import { join } from 'path';

export const LIB_NAMES = readdirSync(LIBRARYDIR).filter((e) => {
  const isDirectory = statSync(join(LIBRARYDIR, e)).isDirectory();
  const hasPackageJSON = existsSync(join(LIBRARYDIR, e, 'package.json'));
  const hasTsConfig = existsSync(join(LIBRARYDIR, e, 'tsconfig.json'));
  return isDirectory && hasPackageJSON && hasTsConfig;
});
