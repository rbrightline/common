export class MissingPropertyError extends Error {
  static readonly message = 'Missing property';
  constructor() {
    super(MissingPropertyError.message);
  }
}
