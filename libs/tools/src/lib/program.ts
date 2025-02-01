#!/usr/bin/env ts-node

import { program } from 'commander';
import { compodoc } from './command/compodoc';
import { foreachLibrary } from './common/library';
import { me } from './common/me';
import { init } from './init/init';

export async function boot() {
  const { name, description, version } = await me();
  program
    .name(name ?? '')
    .description(description ?? '')
    .version(version ?? '0.0.0');

  program
    .command('init')
    .name('init')
    .description('Initialize scripts')
    .action(init);

  program
    .command('doc')
    .name('doc')
    .description('Generate compodoc documentation')
    .argument('library', 'library name')
    .action(compodoc);

  program
    .command('docs')
    .name('docs')
    .description('Generate compodoc documentations')
    .action(() => foreachLibrary(compodoc));

  program.parse();
}

boot();
