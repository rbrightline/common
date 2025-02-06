import { sval } from '@rline/is';
import { names } from '@rline/names';
import { ModelSchema, PropertyOptions, RelationOptions } from '@rline/type';
import { Printable } from '../common';
import { propertyType, relationType } from './utils';

/**
 * Typescript type printer
 */
export class TypePrinter implements Printable {
  /**
   *
   * @param schema options {@link ModelSchema}
   */
  constructor(protected readonly schema: ModelSchema) {
    sval(schema.name);
  }

  /**
   * Print generic types
   * @returns
   */
  protected generics(): string {
    const __generics = this.schema.relations
      ?.map((e) => `${e.target}`)
      .join(',');
    return __generics ? `<${__generics}>` : '';
  }
  /**
   * Print the property
   * @param options property options
   */
  protected property(options: PropertyOptions): string | never {
    const name = sval(options.name);
    const required = options.required == true ? '' : '?';
    return `${name}${required}: ${propertyType(options)}`;
  }

  /**
   * Print properties
   */
  protected properties(): string | never {
    return (
      this.schema.properties?.map((e) => this.property(e)).join('\n') ?? ''
    );
  }

  /**
   * Print relation
   * @param options
   * @returns
   */
  protected relation(options: RelationOptions): string | never {
    const name = sval(options.name);
    const required = options.onDelete == 'CASCADE' ? '' : '?';
    return `${name}${required}:${relationType(options)};`;
  }

  /**
   * Print relations
   * @returns
   */
  protected relations(): string {
    return this.schema.relations?.map((e) => this.relation(e)).join('\n') ?? '';
  }

  protected definition() {
    const name = names(sval(this.schema.name)).pascalCase;
    return `export type ${name}`;
  }
  /**
   * Print type
   * @returns
   */
  print(): string {
    return `${this.definition()}${this.generics()} = { ${this.properties()} ${this.relations()} }`;
  }
}
