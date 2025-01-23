import { Tree } from '@nx/devkit';

import { LibraryGeneratorSchema } from './schema';

export async function libraryGenerator(
  tree: Tree,
  options: LibraryGeneratorSchema
) {
  console.log(options);
}

export default libraryGenerator;
