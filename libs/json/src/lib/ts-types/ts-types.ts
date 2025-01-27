import { join } from 'path';
import { readSchema } from '../utils';
import { JSONSchema } from '../type';
import { writeFileSync } from 'fs';

/**
 * Create types from a schema file.
 * Before running this, you should compile the schema file first
 * This function considers that there is no path references but definitions in the schema
 * @param root relative root path
 * @param filePath relative filePath
 */
export function tsTypes(root: string, filePath: string, output: string) {
  const result: string[] = [];
  const mainFilePath = join(root, filePath);
  const rootSchema = readSchema(mainFilePath);
  const definitions = Object.entries(rootSchema.definitions ?? {});

  function createType(schema: JSONSchema): string {
    if (!schema) {
      return '';
    }
    if (schema.type == 'string') {
      return 'string';
    } else if (schema.type == 'boolean') {
      return 'boolean';
    } else if (schema.type == 'integer' || schema.type == 'number') {
      return 'number';
    } else if (schema.type == 'array') {
      return `${createType(schema.items as JSONSchema)}[]`;
    } else if (schema.properties) {
      const propertyEntires = Object.entries(schema.properties);
      const properties = propertyEntires
        .map(([key, value]) => `${key}: ${createType(value as JSONSchema)};`)
        .join(' ');

      if (schema.title) {
        return `export type ${schema.title} = { ${properties} }`;
      }

      return `{ ${properties} }`;
    } else if (schema.enum) {
      return `export type ${schema.title} = ${schema.enum
        .map((e) => `'${e}'`)
        .join('|')};`;
    } else if (schema.allOf) {
      const types = schema.allOf
        .map((e) => createType(e as JSONSchema))
        .join('&');
      if (schema.title) {
        return `export type ${schema.title} = ${types}`;
      }
      return types;
    } else if (schema.oneOf) {
      const types = schema.oneOf
        .map((e) => createType(e as JSONSchema))
        .join('|');
      if (schema.title) {
        return `export type ${schema.title} = ${types}`;
      }
      return types;
    } else if (schema.$ref) {
      const title = schema.$ref.split('/').pop();
      if (!title) throw new Error('title is required!');
      return title;
    } else if (schema.const) {
      const constant = schema.const;
      if (typeof constant == 'string') {
        return `'${constant}'`;
      }
      return constant + '';
    }

    return 'unknown';
  }

  for (const [title, value] of definitions) {
    if (!value) {
      console.log(title, value);
    }
    result.push(createType({ title, ...value } as JSONSchema));
  }

  result.push(createType(rootSchema));

  const printable = result.join('\n');

  writeFileSync(output, printable);
}
