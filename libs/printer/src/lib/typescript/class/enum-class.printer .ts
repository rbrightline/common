import { BasicModelOptions, BasicPropertyOptions } from '@rline/type';
import { BaseClassPrinter } from './base-class-printer';

export class EnumClassPrinter<
  P extends BasicPropertyOptions = BasicPropertyOptions,
  T extends BasicModelOptions<P> = BasicModelOptions<P>
> extends BaseClassPrinter<P, T> {
  constructor(options: T & { type: 'enum' }) {
    super(options);
    if (this.options.type !== 'enum') {
      throw new Error(`Type must be enum`);
    }
  }
}
