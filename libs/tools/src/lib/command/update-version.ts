import { readPackageJSONFile } from '@rline/utils';
import { join } from 'path';
import { lib } from '../common/library';

export type VersionUpdateType = 'major' | 'minor' | 'patch' | 'beta';

export async function updateVersion(library: string, type: VersionUpdateType) {
  const p = await readPackageJSONFile(join(lib(library), 'package.json'));
  p.version = 'updated-version';
}
