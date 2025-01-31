/**
 *
 * Check the path starts with '#/' or not
 * @param referencePath
 * @returns
 */
export function isDefinitionPath(referencePath: string): boolean {
  return referencePath.startsWith('#/');
}
