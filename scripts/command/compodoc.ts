import { exec } from 'child_process';
import { join } from 'path';
import { DOCSDIR, LIBRARYDIR, ROOTDIR } from '../common/constants';
import { chdir } from 'process';

/**
 * Generate documentation
 * @param libraryName
 */
export function compodoc(libraryName: string) {
  chdir(ROOTDIR);
  const docsdir = join(DOCSDIR, libraryName);
  const tsconfig = join(LIBRARYDIR, libraryName, 'tsconfig.json');
  exec(
    `compodoc -d ${docsdir} -p ${tsconfig} -n ${libraryName}`,
    (err, stdout, stderr) => {
      console.error(err);
      console.log(stdout);
      console.error(stderr);
    }
  );
}
