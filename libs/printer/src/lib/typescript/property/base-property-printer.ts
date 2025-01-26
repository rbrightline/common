import { BasicPropertyOptions } from '@rline/type';
import { PrintableProperty } from '../../common';
import { comment, parseOptions, parsePropertyType } from '../common';

export class BasePropertyPrinter<T extends BasicPropertyOptions>
  implements PrintableProperty
{
  constructor(protected readonly options: T) {}

  decoratorName(): string {
    return '';
  }

  omitDecoratorOptionProperties(): (keyof T)[] | undefined {
    return ['name'];
  }

  pickDecoratorOptionProperties(): (keyof T)[] | undefined {
    return undefined;
  }

  decoratorOptions(): string {
    return parseOptions(
      this.options,
      this.omitDecoratorOptionProperties(),
      this.pickDecoratorOptionProperties()
    );
  }

  decoratorDefinition(): string {
    const name = this.decoratorName();
    const options = this.decoratorOptions();
    if (name) return `@${name}(${options})`;
    return '';
  }

  type(): string {
    return parsePropertyType(this.options);
  }

  isRequired() {
    return this.options.required ? '' : '?';
  }

  comment(): string {
    return this.options.description ? comment(this.options.description) : '';
  }

  definition(): string {
    return `${this.options.name}${this.isRequired()}:${this.type()};`;
  }

  print(): string {
    return [this.comment(), this.decoratorDefinition(), this.definition()].join(
      ' '
    );
  }
}
