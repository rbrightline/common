import { Type } from '../common';
import { RelationOptions } from './model.schema';

export type RelationColumnOptions = Omit<RelationOptions, 'target'> & {
  target: () => Type<any>;
};
