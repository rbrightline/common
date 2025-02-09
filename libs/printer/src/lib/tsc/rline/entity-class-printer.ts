import { ModelSchema, PickRequired } from '@rline/type';
import { BaseTscClassPrinter } from '../base';

export class EntityClassPrinter extends BaseTscClassPrinter {
  constructor(options: PickRequired<ModelSchema, 'name'>) {
    super(options);
  }
}
