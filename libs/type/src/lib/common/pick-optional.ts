export type PickOptional<T extends object, P extends keyof T> = Omit<T, P> &
  Partial<Pick<T, P>>;
