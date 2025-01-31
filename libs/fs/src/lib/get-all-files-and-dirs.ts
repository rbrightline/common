import * as fs from 'fs/promises';
import * as path from 'path';
import { sortPaths } from './sort-paths';

/**
 * Recursively get all files and directories in a given directory and return it
 * @param root Relative or absolute direpath
 * @returns
 */
export async function getAllFilesAndDirs(root: string): Promise<string[]> {
  let results: string[] = [];

  try {
    const items = await fs.readdir(root, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.resolve(root, item.name);
      results.push(fullPath);

      if (item.isDirectory()) {
        const subResults = await getAllFilesAndDirs(fullPath);
        results = results.concat(subResults);
      }
    }
  } catch (error) {
    throw error;
  }

  return sortPaths(results);
}
