export class KeyNotFoundError extends Error {
  static readonly message = 'Key does not exist in the map';
  constructor() {
    super(KeyNotFoundError.message);
  }
}
