export class InvalidSchemaError extends Error {
  static readonly message = 'Invalid schema';
  constructor() {
    super(InvalidSchemaError.message);
  }
}
