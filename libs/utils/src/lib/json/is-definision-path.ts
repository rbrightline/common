export function isDefinitionPath(referencePath: string): boolean {
  return referencePath.startsWith('#/');
}
