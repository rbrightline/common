import { join } from 'path';
import { cwd } from 'process';

export const ROOTDIR = join(cwd());
export const LIBRARYDIR = join(ROOTDIR, 'libs');
export const APPSDIR = join(ROOTDIR, 'apps');
export const DOCSDIR = join(ROOTDIR, 'public');
