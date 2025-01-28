#!/usr/bin/env node

const { join, resolve } = require('path');
const { cwd } = require('process');

console.log(cwd());
console.log(join(__dirname));
console.log(resolve(__dirname));
