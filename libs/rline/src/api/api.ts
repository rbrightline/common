import { Tree } from '@nx/devkit';
import { ApiGeneratorSchema } from './schema';

export async function apiGenerator(tree: Tree, options: ApiGeneratorSchema) {
  console.log('Api generator');
}

export default apiGenerator;
