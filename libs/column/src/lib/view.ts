import { Dto } from '@rline/property';
import { ViewEntity } from 'typeorm';
import { ViewEntityOptions } from 'typeorm/decorator/options/ViewEntityOptions.js';

export function View(options: ViewEntityOptions): ClassDecorator {
  return (t) => {
    Dto()(t);
    ViewEntity(options)(t);
  };
}
