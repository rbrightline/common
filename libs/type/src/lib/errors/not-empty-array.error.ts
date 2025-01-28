/**
 * @type compiler error
 */
export class NotEmptyArrayError extends Error {
  static readonly message = 'Array is empty';
  constructor() {
    super(NotEmptyArrayError.message);
  }
}
