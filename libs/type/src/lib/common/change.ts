import { ValueType } from './property-type';

export type Change<T extends ValueType> = {
  previous: T;
  current: T;
};
