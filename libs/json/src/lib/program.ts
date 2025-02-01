#!/usr/bin/env ts-node

import { createPathScope } from '@rline/fs';
import { program } from 'commander';
import { join } from 'path';
import { cwd } from 'process';
import { init } from './init/init';
import { schema } from './schema/schema';
import { tsc } from './tsc';
import { schemaConfig } from './util';

program
  .name('json compiler')
  .description(
    'CLI to compile json schemas into a single schema file and typescript types'
  )
  .version('8.4.0');

program
  .command('init')
  .name('init')
  .description('Initialize the schema project')
  .action(async () => {
    await init(cwd(), join(__dirname, '../../assets'));
  });

program
  .command('schema')
  .name('schema')
  .description('Compile json schemas into a single schema')
  .action(async () => {
    const safepath = createPathScope(cwd());
    let { main, output, root } = await schemaConfig(cwd());
    await schema({
      root: safepath(root),
      main: safepath(root, main),
      output: safepath(root, output.schema),
    });
  });

program
  .command('tsc')
  .name('tsc')
  .description('Compile json schemas into a typescript type')
  .action(async () => {
    const safepath = createPathScope(cwd());

    const { output, root } = await schemaConfig(cwd());

    tsc({
      root: safepath(root),
      output: safepath(output.type),
    });
  });

program.parse();
