/**
 * Value initialization options that provides `requried`, `readonly`, and `default` options.
 *
 * - requried: if set true, when the value is not defined, throw error
 * - readonly: if set ture, value cannot be changed
 * - default: if set, when the value is not defined or empty, then default value is used. if default value is not defiend, throw error
 */
export type InitOptions<
  T,
  RequiredOption extends boolean,
  RO extends boolean = false
> = {
  /**
   * Required value
   */
  required?: RequiredOption;

  /**
   * Not empty value
   */
  notEmpty?: boolean;

  /**
   * Readonly value
   */
  readonly?: RO;

  /**
   * Default value
   */
  default?: T;
};
