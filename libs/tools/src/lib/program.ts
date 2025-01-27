#!/usr/bin/env ts-node

import { program } from 'commander';
import { init } from './init/init';
import { compodoc } from './command/compodoc';

program
  .name('Project Dev Tools')
  .description('CLI tool to manage project tasks')
  .version('7.0.0');

program
  .command('init')
  .name('init')
  .description('Initialize scripts')
  .action(() => {
    init();
  });

program
  .command('doc')
  .name('doc')
  .description('Generate compodoc documentation')
  .argument('library', 'library name')
  .action((libraryName) => {
    compodoc(libraryName);
  });

program.parse();
