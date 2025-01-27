import { readFileSync } from 'fs';
import { LIBRARYDIR } from '../common/constants';
import { join } from 'path';
export function getPackageJSON(libraryName: string) {
  return JSON.parse(
    readFileSync(join(LIBRARYDIR, libraryName, 'package.json')).toString()
  );
}

export function updatePacakgeJson(
  libraryName: string,
  record: Record<string, string>
) {}
export function updateHomepage(libraryName: string) {}
