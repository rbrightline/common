#!/usr/bin/env ts-node
import { program } from 'commander';
import { compodoc } from './command/compodoc';
import { LIB_NAMES } from './common/library';

program
  .command('one')
  .name('one')
  .description(`Generate documentation for one of the libraries ${LIB_NAMES}`)
  .argument('libraryName', 'library name')
  .action((libraryName) => {
    compodoc(libraryName);
  });

program
  .command('all')
  .name('all')
  .description(`Generate documentation for all libraries ${LIB_NAMES}`)
  .action(() => {
    LIB_NAMES.forEach((e) => {
      compodoc(e);
    });
  });

program.parse();
