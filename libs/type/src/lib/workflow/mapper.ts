export type Mapper<T> = (value: T) => T;
export type AsyncMapper<T> = (value: T) => Promise<T>;
