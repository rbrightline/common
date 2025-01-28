import { existsSync, readdirSync, statSync } from 'fs';
import { LIBRARYDIR } from './constants';
import { join } from 'path';

export const libs = () =>
  readdirSync(LIBRARYDIR).filter((e) => {
    const isDirectory = statSync(join(LIBRARYDIR, e)).isDirectory();
    const hasPackageJSON = existsSync(join(LIBRARYDIR, e, 'package.json'));
    const hasTsConfig = existsSync(join(LIBRARYDIR, e, 'tsconfig.json'));
    return isDirectory && hasPackageJSON && hasTsConfig;
  });

export function foreachLibrary(callback: (library: string) => void) {
  libs().forEach(callback);
}

