export class NotImplementedError extends Error {
  static readonly message = 'Not implemented';
  constructor() {
    super(NotImplementedError.message);
  }
}
