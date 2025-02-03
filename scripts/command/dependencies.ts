#!/usr/bin/env ts-node
import { LIB_NAMES } from '../common/library';
import { getPackageJSON } from './package-json';

export function dependencies() {
  LIB_NAMES.forEach((e) => {
    console.table({ name: e, ...getPackageJSON(e).dependencies });
  });
}
