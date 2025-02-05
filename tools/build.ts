#!/usr/bin/env ts-node

import { exec } from 'child_process';
import { join } from 'path';
import { chdir } from 'process';
import { LIB_NAMES } from './common/library';

chdir(join(__dirname, '..'));

LIB_NAMES.forEach((e) => {
  exec(`npx nx build ${e}`, (err, out, sout) => {
    console.log(err);
    console.log(out);
    console.log(sout);
  });
});
