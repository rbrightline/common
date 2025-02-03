import { JSONSchema } from '@rline/type';
import { entries } from '@rline/utils';

export class TypeManager {
  protected types: string[] = [];
  constructor(protected schema: JSONSchema) {}

  protected typeName(title: string) {
    return `_${title}`;
  }

  /**
   * Schema type is one of
   *
   * - $ref
   * - oneOf
   * - allOf
   * - type: string,number,...
   * - enum
   * - properties
   * @param schema
   * @returns
   */
  protected getType(schema: JSONSchema): string {
    if (schema.$ref) {
      return this.typeName(schema.$ref.split('/').pop());
    } else if (schema.oneOf) {
      return schema.oneOf.map((e) => this.getType(e)).join('|');
    } else if (schema.allOf) {
      return schema.allOf.map((e) => this.getType(e)).join('&');
    }

    const __getEnumType = (enums: (string | number)[]) =>
      enums.map((e) => (typeof e === 'string' ? `'${e}'` : e)).join('|');

    if (schema.const != undefined) {
      if (typeof schema.const == 'string') {
        return `'${schema.const}'`;
      }
      return `${schema.const}`;
    }
    if (schema.type)
      switch (schema.type) {
        case 'number':
        case 'string': {
          if (schema.enum) return __getEnumType(schema.enum);
          return schema.type;
        }
        case 'integer': {
          if (schema.enum) return __getEnumType(schema.enum);
          return 'number';
        }
        case 'boolean':
          return schema.type;

        case 'array': {
          if (schema.items) return `(${this.getType(schema.items)})[]`;
          return 'any';
        }
        case 'object': {
          if (schema.properties) {
            const props: string[] = [];

            const pairs = entries(schema.properties);

            for (const [key, value] of pairs) {
              props.push(
                `${key.toString()}${schema.required ? '' : '?'}:${this.getType(
                  value
                )}`
              );
            }

            return `{ ${props.join('\n')} }`;
          }

          return 'any';
        }
      }

    return 'unknown';
  }

  preCompile() {
    const { definitions } = this.schema;
    if (!definitions) return;

    const defs = entries<JSONSchema>(definitions);
    for (const [key, value] of defs) {
      this.types.push(
        `export type ${this.typeName(key)} = ${this.getType(value)}`
      );
    }

    this.types.push(
      `export type ${this.typeName(
        this.schema.title ?? 'Unkown'
      )} = ${this.getType(this.schema)}`
    );
  }

  compile(): string {
    this.preCompile();
    return this.types.join('\n');
  }
}
