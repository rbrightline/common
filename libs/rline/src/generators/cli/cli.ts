import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import { join } from 'path';
import { CliGeneratorSchema } from './schema';
import { readFileSync, writeFileSync } from 'fs';

export async function cliGenerator(tree: Tree, options: CliGeneratorSchema) {
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

export default cliGenerator;
