import { ObjectLiteral } from './object-literal';

export type PickOptional<T extends ObjectLiteral, P extends keyof T> = Omit<
  T,
  P
> &
  Partial<Pick<T, P>>;
