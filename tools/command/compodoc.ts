import { exec } from 'child_process';
import { join } from 'path';
import { DOCSDIR, ROOTDIR } from '../common/constants';
import { chdir } from 'process';

/**
 * Generate documentation
 * @param libraryName
 */
export function compodoc(libraryName: string) {
  chdir(ROOTDIR);
  const docsdir = join(DOCSDIR, libraryName);
  const tsconfig = join(ROOTDIR, libraryName, 'tsconfig.json');
  exec(`compodoc -d ${docsdir} -p ${tsconfig} -n ${libraryName}`);
}
