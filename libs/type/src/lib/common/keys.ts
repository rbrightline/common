import { ObjectLiteral } from './object-literal';

export type Keys<T extends ObjectLiteral> = (keyof T)[];
export type Key<T extends ObjectLiteral> = keyof T;
