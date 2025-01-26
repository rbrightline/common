import { BasicPropertyOptions } from '@rline/type';
import { BasePropertyPrinter } from './base-property-printer';

export class ViewPropertyPrinter<
  T extends BasicPropertyOptions
> extends BasePropertyPrinter<T> {
  constructor(options: T) {
    super(options);
  }

  override pickDecoratorOptionProperties(): (keyof T)[] {
    return ['type'];
  }
  override decoratorName(): string {
    return 'ViewColumn';
  }
}
