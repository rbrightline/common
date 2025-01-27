#!/usr/bin/env ts-node

import { program } from 'commander';
import { join } from 'path';
import { schema } from './schema/schema';
import { type } from './type/type';

program
  .name('json compiler')
  .description(
    'CLI to compile json schemas into a single schema file and typescript types'
  )
  .version('7.3.1');

program
  .command('schema')
  .name('schema')
  .description('Compile json schemas into a single schema')
  .argument('<string>', 'main schema file')
  .argument('<string>', 'output path')
  .action((root: string, filePath: string, output: string) => {
    schema();
  });

program
  .command('tsc')
  .name('tsc')
  .description('Compile json schemas into a typescript type')
  .argument('<string>', 'main schema file')
  .argument('<string>', 'output filename')
  .action((root: string, filePath: string, output: string) => {
    type();
  });

program.parse();
