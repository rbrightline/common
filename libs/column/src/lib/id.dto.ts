import { Dto, Property } from '@rline/property';

@Dto()
export class IDDto {
  @Property({ type: 'integer' }) id: number;
}
