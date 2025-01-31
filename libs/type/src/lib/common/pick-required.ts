export type PickRequired<T extends object, P extends Partial<keyof T>> = T &
  Required<Pick<T, P>>;
