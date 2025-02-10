import { names } from '@rline/names';
import { BaseTscClassPrinter } from '../base';

export class QueryDtoClassPrinter extends BaseTscClassPrinter {
  protected override className(): string {
    return names(this.options.name).queryDtoName;
  }
}
