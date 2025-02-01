import { readJSONFile } from '@rline/fs';
import { join } from 'path';
import { lib } from '../common/library';
export type VersionUpdateType = 'major' | 'minor' | 'patch' | 'beta';

export async function updateVersion(library: string, type: VersionUpdateType) {
  const p = await readJSONFile(join(lib(library), 'package.json'));
  p.version = 'updated-version';
}
