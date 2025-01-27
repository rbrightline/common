import { workspaceRoot } from '@nx/devkit';
import { join } from 'path';

export const ROOTDIR = join(workspaceRoot);
export const LIBRARYDIR = join(ROOTDIR, 'libs');
export const APPSDIR = join(ROOTDIR, 'apps');
export const DOCSDIR = join(ROOTDIR, 'public');
