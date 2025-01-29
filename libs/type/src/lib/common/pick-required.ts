import { ObjectLiteral } from './object-literal';

export type PickRequired<T extends ObjectLiteral, P extends keyof T> = T &
  Required<Pick<T, P>>;
