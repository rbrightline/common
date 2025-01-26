import { DtoClassPrinter } from './dto-class.printer';

describe('DtoClassPrinter', () => {
  it('should print dto classes', () => {
    const result = new DtoClassPrinter({
      type: 'dto',
      name: 'Some',
      properties: [{ name: 'prop', type: 'string' }],
      relations: [{ name: 'rel', type: 'many-to-many', target: 'Some' }],
    }).print();
    expect(result.trim()).toEqual(
      `import { IDDto } from '@rline/dto'; @Dto() export class Some { @Property({"type":"string"}) prop?:string;  @Property({"type":"array","items":{"type":"object","target":()=>IDDto}}) rel?:IDDto[];}`
    );
  });
});
