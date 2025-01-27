import { readFileSync } from 'fs';
import { LIBRARYDIR } from '../common/constants';
import { join } from 'path';
import { PackageJSON} from "@rline/type"

export const PACKAGE_JSON_FILE_NAME = 'package.json';

export class PackageJsonManager { 
  constructor(protected readonly filePath:string ){}
  get():PackageJSON{ 
    return JSON
  }
}

export function getPackageJSONFilePath(library: string): string {
  return join(LIBRARYDIR, library, PACKAGE_JSON_FILE_NAME);
}

export function getPackageJSON(library: string) :PackageJSON{
  return JSON.parse(
    readFileSync(
      join(LIBRARYDIR, library, PACKAGE_JSON_FILE_NAME)
    ).toString()
  );
}

export function updatePacakgeJson(
  library: string,
  record: 
) {

}

export function updateHomepage(library: string) {}
