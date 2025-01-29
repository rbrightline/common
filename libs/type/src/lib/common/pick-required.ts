export type PickRequired<T extends object, P extends keyof T> = T &
  Required<Pick<T, P>>;
