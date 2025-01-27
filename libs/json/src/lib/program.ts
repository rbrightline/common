#!/usr/bin/env ts-node

import { program } from 'commander';
import { tsTypes } from './ts-types/ts-types';
import { jsonSchema } from './json-schema/json-schema';
import { join } from 'path';

program
  .name('json compiler')
  .description(
    'CLI to compile json schemas into a single schema file and typescript types'
  )
  .version('7.3.1');

program
  .command('compile')
  .name('compile')
  .description('Compile json schemas into a single schema')
  .argument('<string>', 'main schema file')
  .argument('<string>', 'output path')
  .action((filePath: string, output: string) => {
    jsonSchema(join(filePath, '..'), filePath, output);
  });

program
  .command('tsc')
  .name('tsc')
  .description('Compile json schemas into a typescript type')
  .argument('<string>', 'main schema file')
  .argument('<string>', 'output filename')
  .action((filePath: string, output: string) => {
    tsTypes(join(filePath, '..'), filePath, output);
  });

program.parse();
