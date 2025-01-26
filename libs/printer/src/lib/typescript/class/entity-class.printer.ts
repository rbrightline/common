import {
  BasicClassOptions,
  BasicModelOptions,
  BasicPropertyOptions,
} from '@rline/type';
import { BaseClassPrinter } from './base-class-printer';
import { EntityPropertyPrinter } from '../property';

export class EntityClassPrinter<
  P extends BasicPropertyOptions = BasicPropertyOptions,
  T extends BasicModelOptions<P> = BasicModelOptions<P>
> extends BaseClassPrinter<P, T> {
  constructor(options: T & { type: 'entity' }) {
    super(options);
    if (this.options.type !== 'entity') {
      throw new Error(`Type must be entity`);
    }
  }

  override printProperty(options: P): string {
    return new EntityPropertyPrinter(options).print();
  }

  uniques() {
    const result = (this.options as BasicClassOptions<P>).uniques
      ?.map((e) => `"${e}"`)
      .join(',');

    if (result) {
      return `[${result}]`;
    }
    return '';
  }

  uniquePropertyDecorator() {
    if (this.uniques()) {
      return `@Unique(${this.uniques()})`;
    }
    return '';
  }

  override decoratorDefinition(): string {
    return ['@Entity()', this.uniquePropertyDecorator()]
      .filter((e) => e)
      .join(' ');
  }
}
