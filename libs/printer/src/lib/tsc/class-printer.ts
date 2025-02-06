import { sval } from '@rline/is';
import { names } from '@rline/names';
import { ModelSchema, NotImplementedError, PropertyOptions } from '@rline/type';
import { Printable, Printer } from '../common';

export type ClassType =
  | 'plain'
  | 'entity'
  | 'create-dto'
  | 'update-dto'
  | 'query-dto';

export type ClassPrinterOptions = {
  type: ClassType;
  options: ModelSchema;
  classDecorators?: Printer<ModelSchema>[];
  propertyDecorators?: Printer<PropertyOptions>[];
};
export class ClassPrinter implements Printable, ClassPrinterOptions {
  readonly type: ClassType;
  readonly options: ModelSchema;
  readonly classDecorators?: Printer<ModelSchema>[];
  readonly propertyDecorators?: Printer<PropertyOptions>[];

  constructor(options: ClassPrinterOptions) {
    this.options = options.options;
    this.type = options.type;
    this.classDecorators = options.classDecorators;
    this.propertyDecorators = options.propertyDecorators;
  }

  protected relations() {
    throw new NotImplementedError();
  }

  protected properties() {
    throw new NotImplementedError();
  }

  print(): string {
    const name = names(sval(this.options.name)).pascalCase;
    return `export class ${name} { ${this.properties()} ${this.relations()} }`;
  }
}
