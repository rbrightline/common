export type InitOptions<
  RequiredOption extends boolean,
  RO extends boolean = false
> = {
  /**
   * Required value
   */
  required?: RequiredOption;

  /**
   * Readonly value
   */
  readonly?: RO;
};
