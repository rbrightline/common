import { BasicModelOptions, BasicPropertyOptions } from '@rline/type';
import { BaseClassPrinter } from './base-class-printer';
import { TypePropertyPrinter } from '../property';

export class TypeClassPrinter<
  P extends BasicPropertyOptions = BasicPropertyOptions,
  T extends BasicModelOptions<P> = BasicModelOptions<P>
> extends BaseClassPrinter<P, T> {
  constructor(options: T & { type: 'type' }) {
    super(options);
    if (this.options.type !== 'type') {
      throw new Error(`Type must be type`);
    }
  }

  override printProperty(options: P): string {
    return new TypePropertyPrinter(options).print();
  }
}
