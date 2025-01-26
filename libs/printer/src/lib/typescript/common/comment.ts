/**
 * Create inline comment
 * @param comment string
 * @returns string
 */
export function inlineComment(comment: string): string {
  return `// ${comment}`;
}
/**
 * Create multiple line comment
 * @param comment string
 * @returns string
 */
export function comment(comment: string): string {
  return `
/**
 * ${comment}
 */
`;
}
