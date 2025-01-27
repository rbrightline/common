import { readdirSync, readFileSync, statSync } from 'fs';
import { JSONSchema } from '../type';
import { join } from 'path';

export function readSchema(filePath: string): JSONSchema {
  return JSON.parse(readFileSync(filePath).toString());
}

export function isNotDefinitionPath(path: any): path is string {
  if (typeof path == 'string') return !path.startsWith('#/');
  return false;
}

/**
 * Read all json files under the directory, and map it with absolute path and schema content
 * @param directory
 * @returns
 */
export function mapSchemaFiles(directory: string) {
  const dirs = readdirSync(directory);
  const map = new Map<string, JSONSchema>();
  for (const d of dirs) {
    const filePath = join(directory, d);
    const stat = statSync(filePath);
    if (stat.isFile() && d.endsWith('.json')) {
      map.set(filePath, readSchema(filePath));
    } else if (stat.isDirectory()) {
      mapSchemaFiles(filePath).forEach((value, key) => {
        map.set(key, value);
      });
    }
  }

  return map;
}

/**
 * Convet all relative references into absolute ones
 * @param absoluteFilePath
 * @param schema
 */
export function resolveReferences(
  absoluteFilePath: string,
  schema: JSONSchema
) {
  const entries = Object.entries(schema);

  if (entries.length > 0)
    for (const [key, sub] of entries) {
      if (key == '$ref') {
        if (isNotDefinitionPath(sub)) {
          schema.$ref = join(absoluteFilePath, '..', sub);

          console.log(schema.$ref, '<<<<<<<<<<<<<');
        }
      } else {
        if (typeof sub == 'object') {
          resolveReferences(absoluteFilePath, sub as JSONSchema);
        }
      }
    }
}

export function convertReferencesToDefinitions(
  map: Map<string, JSONSchema>,
  mainFilePath: string,
  schema: JSONSchema,
  subSchema: JSONSchema
) {
  const entries = Object.entries(subSchema);
  for (const [key, sub] of entries) {
    if (key == '$ref') {
      if (isNotDefinitionPath(sub)) {
        const defSchema = map.get(sub);
        if (!defSchema) throw new Error(sub + ' does not exist!');
        const defSchemaTitle = defSchema.title;
        if (!defSchemaTitle)
          throw new Error(sub + ' schema does not have title');
        if (!schema.definitions) schema.definitions = {};
        subSchema.$ref = `#/definitions/${defSchemaTitle}`;
        const mainSchema = map.get(mainFilePath);
        if (!mainSchema) throw new Error(`main schema could not get`);
        if (!mainSchema?.definitions) mainSchema.definitions = {};
        mainSchema.definitions[defSchemaTitle] = clone(defSchema);
      }
    } else if (typeof sub == 'object') {
      convertReferencesToDefinitions(
        map,
        mainFilePath,
        schema,
        sub as JSONSchema
      );
    }
  }
}

export function clone(schema: JSONSchema) {
  return JSON.parse(JSON.stringify(schema));
}

export function moveAllDefinitionsToMainSchema(
  mainSchema: JSONSchema,
  map: Map<string, JSONSchema>
) {
  if (mainSchema.definitions == undefined) mainSchema.definitions = {};

  map.forEach((value, key) => {
    if (value.definitions) {
      if (!mainSchema.definitions) mainSchema.definitions = {};
      Object.assign(mainSchema.definitions, value.definitions);
    }
  });
}
