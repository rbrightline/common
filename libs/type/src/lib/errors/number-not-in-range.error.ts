/**
 * @type Compiler error
 */
export class NumberNotInRangeError extends Error {
  static readonly message = 'The number value is not in the required range';

  constructor() {
    super(NumberNotInRangeError.message);
  }
}
