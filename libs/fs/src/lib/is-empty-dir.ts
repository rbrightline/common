import { dirs } from './dirs';

export async function isEmptyDir(root: string): Promise<boolean> {
  return (await dirs(root, true)).length == 0;
}
