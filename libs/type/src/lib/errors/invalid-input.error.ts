export class InvalidInputError extends Error {
  static readonly message = 'Invalid input';
  constructor() {
    super(InvalidInputError.message);
  }
}
