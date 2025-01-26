import { BasicPropertyOptions } from '@rline/type';
import { BasePropertyPrinter } from './base-property-printer';

export class DtoPropertyPrinter<
  T extends BasicPropertyOptions
> extends BasePropertyPrinter<T> {
  constructor(options: T) {
    super(options);
  }
  override omitDecoratorOptionProperties(): (keyof T)[] {
    return ['name', 'unique'];
  }
  override decoratorName(): string {
    return 'Property';
  }
}
