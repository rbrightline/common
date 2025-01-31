/**
 * @type compiler error
 */
export class EmptyArrayError extends Error {
  static readonly message = 'Array is empty';
  constructor() {
    super(EmptyArrayError.message);
  }
}
