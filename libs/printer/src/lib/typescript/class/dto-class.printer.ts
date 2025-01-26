import { BasicModelOptions, BasicPropertyOptions } from '@rline/type';
import { BaseClassPrinter } from './base-class-printer';
import { DtoPropertyPrinter } from '../property';

export class DtoClassPrinter<
  P extends BasicPropertyOptions = BasicPropertyOptions,
  T extends BasicModelOptions<P> = BasicModelOptions<P>
> extends BaseClassPrinter<P, T> {
  constructor(options: T & { type: 'dto' }) {
    super(options);
    if (this.options.type !== 'dto') {
      throw new Error(`Type must be dto`);
    }
  }

  override printProperty(options: P): string {
    return new DtoPropertyPrinter(options).print();
  }

  override decoratorDefinition(): string {
    return '@Dto()';
  }
}
