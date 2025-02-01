import { NotImplementedError } from '@rline/type';
export type TscOptions = {
  /**
   * Root dirctory
   */
  root: string;

  /**
   * output directory
   */
  output: string;
};

/**
 * Compile JSON schemas into typescript types
 * @param options
 */
export function tsc(options: TscOptions) {
  throw new NotImplementedError();
}
