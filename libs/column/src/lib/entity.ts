import { def, ne } from '@rline/is';
import { Dto } from '@rline/property';
import { Entity as TEntity, Unique } from 'typeorm';

export function Entity(uniques?: string[]): ClassDecorator {
  return (t) => {
    TEntity()(t);
    Dto()(t);
    if (def(uniques) && ne(uniques)) {
      Unique(uniques)(t);
    }
  };
}
