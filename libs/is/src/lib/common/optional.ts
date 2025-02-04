export type Optional<
  T extends string | number | boolean | object | Array<any> | undefined | null
> = T | null | undefined;
