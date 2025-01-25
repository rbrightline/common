/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { join } from 'path';
import { JSONSchema } from './type';
import { readSchemaFile } from './utils';
import { readdirSync, statSync, writeFileSync } from 'fs';

export function compileJSONSchema(
  rootDir: string,
  mainFileName: string,
  bundleName: string
) {
  const mainFilePath = join(rootDir, mainFileName);
  const map = new Map<string, JSONSchema>();

  function getMainSchema() {
    return map.get(join(mainFilePath))!;
  }

  function createSchemaMap(absoluteDirectory: string) {
    const dirs = readdirSync(absoluteDirectory);
    for (const dir of dirs) {
      const filePath = join(absoluteDirectory, dir);

      const stat = statSync(filePath);

      if (stat.isFile() && filePath.endsWith('.schema.json')) {
        const schema = readSchemaFile(filePath);
        if (!schema.title) throw new Error(`${filePath} does not have title!`);
        map.set(filePath, schema);
      } else if (stat.isDirectory()) {
        createSchemaMap(filePath);
      }
    }
  }

  function makeReferenceAbsolute() {
    const mapEntries = map.entries();

    function forEach(absoluteFilePath: string, schema: JSONSchema) {
      const eachEntrires = Object.entries(schema);
      for (const [key, value] of eachEntrires) {
        if (
          key == '$ref' &&
          typeof value == 'string' &&
          !value.startsWith('#/') &&
          value
        ) {
          const referencePath = join(absoluteFilePath, '..', value);

          if (!statSync(referencePath).isFile())
            throw new Error(`${value} is not valid!`);

          schema.$ref = referencePath;
        } else if (typeof value == 'object') {
          forEach(absoluteFilePath, value as JSONSchema);
        }
      }
    }

    for (const [absoluteFilePath, schemaObject] of mapEntries) {
      forEach(absoluteFilePath, schemaObject);
    }
  }

  function makeReferencesDefinition() {
    const mapEntries = map.entries();

    function forEach(absoluteFilePath: string, schema: JSONSchema) {
      const eachEntrires = Object.entries(schema);
      for (const [key, value] of eachEntrires) {
        if (
          key == '$ref' &&
          typeof value == 'string' &&
          !value.startsWith('#/') &&
          value
        ) {
          const subSchema = map.get(schema.$ref as string);
          schema.$ref = `#/definitions/${subSchema?.title}`;

          if (!subSchema?.title) throw new Error('schema must have title');
          const mainSchema = getMainSchema();
          if (!mainSchema.definitions) mainSchema.definitions = {};

          getMainSchema().definitions![subSchema.title] = subSchema;
        } else if (typeof value == 'object') {
          forEach(absoluteFilePath, value as JSONSchema);
        }
      }
    }

    for (const [absoluteFilePath, schemaObject] of mapEntries) {
      forEach(absoluteFilePath, schemaObject);
    }
  }

  createSchemaMap(rootDir);

  makeReferenceAbsolute();

  makeReferencesDefinition();

  writeFileSync(bundleName, JSON.stringify(getMainSchema()));
}
