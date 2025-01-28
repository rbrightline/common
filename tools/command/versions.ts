#!/usr/bin/env ts-node
import { LIB_NAMES } from '../common/library';
import { getPackageJSON } from './package-json';

export function versions() {
  LIB_NAMES.forEach((e) => {
    console.log(getPackageJSON(e).version);
  });
}
