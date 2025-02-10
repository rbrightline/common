import { ModelSchema, PickRequired } from '@rline/type';
import { BaseTscClassPrinter } from '../base';

export class EntityClassPrinter extends BaseTscClassPrinter<
  PickRequired<ModelSchema, 'name'>
> {
  constructor(options: PickRequired<ModelSchema, 'name'>) {
    super(options);
  }

  protected override extendings(): string {
    if (this.options.extendings) return `extends ${this.options.extendings}`;
    return 'BaseEntity';
  }
}
