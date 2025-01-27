import { JSONSchema } from '@rline/type';
import { clone, unique } from '../typescript/common';

export function printSchema(schema: JSONSchema): string {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', schema);
  const types: string[] = [];
  // If scheme is a primitive

  // if schema is a reference pointing a type

  if (schema.$ref) {
    return schema.$ref.split('/').pop() ?? '';
  }

  if (schema.definitions) {
    const defs = Object.entries(schema.definitions);
    for (const [key, value] of defs) {
      value.title = key;
      types.push(printSchema(value as JSONSchema));
    }
  }

  if (schema.type) {
    switch (schema.type) {
      case 'string':
      case 'boolean':
      case 'number':
        return schema.type;
      case 'integer':
        return 'number';
      case 'array': {
        return printSchema(schema.items as JSONSchema) + '[]';
      }
    }
  }

  // if scheme is an enum class
  if (schema.enum) {
    return `export type ${schema.title} = ${schema.enum
      .map((e) => `'${e}'`)
      .join('|')}`;
  }

  if (schema.properties) {
    const properties = Object.entries(schema.properties);

    const propertiesString = properties
      .map(([key, value]) => {
        if (value) {
          const valueType = printSchema(clone(value as JSONSchema));
          return `${key}: ${valueType}; //${JSON.stringify(value)}\n`;
        }
        return '';
      })
      .filter((e) => e)
      .join(' ');

    const result = `export type ${schema.title} = { ${propertiesString} }`;

    types.push(result);
  }

  return unique(types).join('\n');
}
