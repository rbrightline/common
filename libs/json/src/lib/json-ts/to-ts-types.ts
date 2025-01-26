import { JSONSchema } from '../type';
import { getPropertyType } from '../utils';

/**
 * - [ ] convert json schema into typescript files
 * @param rootDir
 * @param fileName
 * @param outDir
 */
export function toTsTypes(rootDir: string, fileName: string, outDir: string) {
  const properties = new Set<string>();
  const improts = new Set<string>();

  function toType(schema: JSONSchema) {
    // enum type
    if (schema.enum) {
      return `export enum ${schema.title} { 
      ${schema.enum.map((e) => `${e}='${e}'`).join('\n')}
      } `;
    }

    if (schema.properties) {
      const entries = Object.entries(schema.properties);
      for (const [key, value] of entries) {
        const propertyDef = `${key}:${getPropertyType(value as JSONSchema)};`;
        properties.add(propertyDef);
      }
    }
  }
}
