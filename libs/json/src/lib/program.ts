#!/usr/bin/env ts-node

import { program } from 'commander';
import { schema } from './schema/schema';
import { type } from './type/type';
import { init } from './init/init';

program
  .name('json compiler')
  .description(
    'CLI to compile json schemas into a single schema file and typescript types'
  )
  .version('7.3.1');

program
  .command('init')
  .name('init')
  .description('Initialize the schema project')
  .action(init);

program
  .command('build')
  .name('build')
  .description('Compile json schemas into a single schema')
  .action(schema);

program
  .command('tsc')
  .name('tsc')
  .description('Compile json schemas into a typescript type')
  .action(type);

program.parse();
