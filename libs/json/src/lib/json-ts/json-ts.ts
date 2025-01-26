import q from 'inquirer';
import { toTsTypes } from './to-ts-types';

q.prompt([
  { name: 'rootDir', message: 'root directory', type: 'input', default: './' },
  {
    name: 'fileName',
    message: 'main file name',
    type: 'input',
    default: 'main.schema.json',
  },
  {
    name: 'outDir',
    message: 'output directory',
    type: 'input',
    default: 'dist',
  },
]).then(({ rootDir, fileName, outDir }) => {
  toTsTypes(rootDir, fileName, outDir);
});
