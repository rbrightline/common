import { exec } from 'child_process';
import { join } from 'path';
import { DOCSDIR, LIBRARYDIR } from '../common/constants';

/**
 * Generate documentation
 * @param library
 */
export function compodoc(library: string) {
  const docsdir = join(DOCSDIR, library);
  const tsconfig = join(LIBRARYDIR, library, 'tsconfig.json');
  exec(
    `compodoc -d ${docsdir} -p ${tsconfig} -n ${library}`,
    (err, stdout, stderr) => {
      console.error(err);
      console.log(stdout);
      console.error(stderr);
    }
  );
}


