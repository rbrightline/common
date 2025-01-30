import { files } from './files';

export async function hasFile(root: string) {
  return (await files(root)).length > 0;
}
