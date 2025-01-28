export type Predicate<T> = (value: T, index: number) => boolean;
export type AsyncPredicate<T> = (value: T, index: number) => Promise<boolean>;
