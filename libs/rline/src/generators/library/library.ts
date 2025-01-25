import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';

import { LibraryGeneratorSchema } from './schema';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';

export async function libraryGenerator(
  tree: Tree,
  options: LibraryGeneratorSchema
) {
  const TARGET_DIR = 'libs';

  generateFiles(tree, join(__dirname, 'files'), TARGET_DIR, {
    ...names(options.name),
  });

  const tsconfig = JSON.parse(readFileSync('tsconfig.json').toString());

  tsconfig['references'] = [
    ...(tsconfig['references'] ?? []),
    { path: `./libs/${names(options.name).fileName}` },
  ];

  const tsconfigUpdated = JSON.stringify(tsconfig);

  writeFileSync('tsconfig.json', tsconfigUpdated);

  await formatFiles(tree);
}

export default libraryGenerator;
