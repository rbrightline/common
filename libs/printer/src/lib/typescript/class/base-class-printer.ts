import { BasicModelOptions, BasicPropertyOptions } from '@rline/type';
import { PrintableClass } from '../../common';
import { ClassPropertyPrinter } from '../property';
import {
  importsFromProperties,
  importsFromRelations,
  relationToProperty,
  unique,
} from '../common';

export class BaseClassPrinter<
  P extends BasicPropertyOptions = BasicPropertyOptions,
  T extends BasicModelOptions<P> = BasicModelOptions<P>
> implements PrintableClass<P>
{
  constructor(protected readonly options: T) {}
  imports(): string {
    switch (this.options.type) {
      case 'dto':
      case 'entity':
      case 'class': {
        return unique([
          importsFromProperties(this.options.type, this.options.properties),
          importsFromRelations(this.options.type, this.options.relations),
        ]).join('\n');
      }
    }
    return '';
  }

  printProperty(options: P): string {
    return new ClassPropertyPrinter(options).print();
  }

  name() {
    return this.options.name;
  }

  decoratorName(): string {
    return '';
  }

  decoratorOptions(): string {
    return '';
  }

  decoratorDefinition(): string {
    if (this.decoratorName()) {
      return `@${this.decoratorName()}(${this.decoratorOptions()})`;
    }
    return '';
  }

  type(): string {
    switch (this.options.type) {
      case 'class':
      case 'type':
      case 'interface':
      case 'enum':
        return this.options.type;
      case 'entity':
      case 'dto':
        return 'class';

      case 'constant':
        return 'const';
    }
  }

  generics(): string {
    if (this.options.type == 'type' || this.options.type == 'interface') {
      const forProperties =
        this.options.properties
          ?.map((e) => {
            if (e.type == 'object') {
              return e.target;
            }
            return '';
          })
          .filter((e) => e) ?? [];

      const forRelations =
        this.options.relations
          ?.map((e) => {
            return e.target;
          })
          .filter((e) => e) ?? [];
      return `<${[...forProperties, ...forRelations].join(', ')}>`;
    }
    return '';
  }

  extendings(): string {
    switch (this.options.type) {
      case 'class':
      case 'interface':
      case 'dto':
      case 'entity': {
        const result = this.options.extendings?.join(', ');
        if (result) {
          return `extends ${result}`;
        }
        return '';
      }
      case 'type': {
        if (this.options.extendings) {
          const result = this.options.extendings.join('|');
          if (result) {
            return `| ${result}`;
          }
        }
        return '';
      }
    }

    return '';
  }

  implementings(): string {
    switch (this.options.type) {
      case 'class':
      case 'dto':
      case 'entity': {
        const result = this.options.extendings?.join(', ');
        if (result) {
          return `implements ${result}`;
        }
        return '';
      }
      case 'interface': {
        const result = this.options.extendings?.join(', ');
        if (result) {
          return `extends ${result}`;
        }
        return '';
      }
      case 'type':
        if (this.options.extendings) {
          const result = this.options.extendings.join('|');
          if (result) {
            return `| ${result}`;
          }
        }
        return '';
    }

    return '';
  }

  properties(): string {
    switch (this.options.type) {
      case 'class': {
        const result: string[] = [];

        if (this.options.properties) {
          const properties = this.options.properties.map((e) => {
            return this.printProperty(e);
          });

          result.push(...properties);
        }

        if (this.options.relations) {
          const relations = this.options.relations.map((e) => {
            return this.printProperty(relationToProperty(e));
          });
          result.push(...relations);
        }

        return `{${result.join(' ')}}`;
      }

      case 'dto': {
        const result: string[] = [];

        if (this.options.properties) {
          const properties = this.options.properties.map((e) => {
            return this.printProperty(e);
          });

          result.push(...properties);
        }

        if (this.options.relations) {
          const relations = this.options.relations.map((e) => {
            return this.printProperty(relationToProperty(e));
          });
          result.push(...relations);
        }

        return `{${result.join(' ')}}`;
      }
      case 'entity': {
        const result: string[] = [];

        if (this.options.properties) {
          const properties = this.options.properties.map((e) => {
            return this.printProperty(e);
          });

          result.push(...properties);
        }

        if (this.options.relations) {
          const relations = this.options.relations.map((e) => {
            return this.printProperty(relationToProperty(e));
          });
          result.push(...relations);
        }

        return `{${result.join(' ')}}`;
      }
      case 'type':
      case 'interface': {
        const result: string[] = [];

        if (this.options.properties) {
          const properties = this.options.properties.map((e) => {
            return this.printProperty(e);
          });

          result.push(...properties);
        }

        if (this.options.relations) {
          const relations = this.options.relations.map((e) => {
            return this.printProperty(relationToProperty(e));
          });
          result.push(...relations);
        }

        if (this.options.type == 'type') {
          const r = result.join(' ');
          if (r) {
            return `= {${r}}`;
          }
          return '= {}';
        } else {
          const r = result.join(' ');
          if (r) {
            return `{${r}}`;
          }
          return '{}';
        }
      }
      case 'enum': {
        const result = this.options.enum
          .map((e) => {
            return `${e} = '${e}'`;
          })
          .join(',');

        if (result) {
          return `{${result}}`;
        }
        return '{}';
      }
      case 'constant':
        return `= ${this.options.constant};`;
    }
  }

  print(): string {
    return [
      this.imports(),
      this.decoratorDefinition(),
      'export',
      this.type(),
      this.options.name,
      this.extendings(),
      this.implementings(),
      this.properties(),
    ]
      .filter((e) => e)
      .join(' ');
  }
}
