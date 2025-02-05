import { createPathScope } from '@rline/fs';
import { program } from 'commander';
import { join } from 'path';
import { cwd } from 'process';
import { init } from './init';
import { schemaConfig } from './json-compiler';
import { schema } from './schema';
import { tsc } from './tsc';

/**
 * Safe path
 */
const p = createPathScope(cwd());

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
    await init(cwd(), join(__dirname, '../../assets/schema'));
  });

program
  .command('schema')
  .name('schema')
  .description('Compile json schemas into a single schema')
  .action(async () => {
    let { main, output, root } = await schemaConfig(cwd());
    await schema({
      root: p(root),
      main: p(root, main),
      output: {
        schema: p(root, output.schema),
        type: '',
      },
    });
  });

program
  .command('tsc')
  .name('tsc')
  .description('Compile json schemas into a typescript type')
  .action(async () => {
    const safepath = createPathScope(cwd());
    let { output, root } = await schemaConfig(cwd());

    await tsc({
      root: safepath(root),
      main: safepath(root, output.schema),
      output: {
        type: safepath(root, output.type),
        schema: '',
      },
    });
  });

program.parse();
