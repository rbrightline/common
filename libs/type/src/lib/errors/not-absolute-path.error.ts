export class NotAbsolutePathError extends Error {
  static readonly message = 'Not absolute path';
  constructor() {
    super(NotAbsolutePathError.message);
  }
}
