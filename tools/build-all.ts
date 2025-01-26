#!/usr/bin/env ts-node

import { exec } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';
import { chdir } from 'process';

const root = join(__dirname, '..');

const libs = readdirSync(join(root, 'libs'));

chdir(root);

const buildAll = libs.map(
  (e) =>
    new Promise<void>((res, rej) => {
      exec(`npx nx build ${e}`, (err, stdout, stderr) => {
        if (stdout) console.log(stdout);
        if (err) {
          console.error(err);
          rej();
        }
        if (stderr) {
          console.error(stderr);
          rej();
        }

        res();
      });
    })
);

Promise.all(buildAll);
