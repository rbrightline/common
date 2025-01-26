import { BasicPropertyOptions } from '@rline/type';
import { BasePropertyPrinter } from './base-property-printer';

export class ClassPropertyPrinter<
  T extends BasicPropertyOptions
> extends BasePropertyPrinter<T> {
  constructor(options: T) {
    super(options);
  }
}
