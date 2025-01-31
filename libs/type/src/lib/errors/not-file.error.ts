export class NotFileError extends Error {
  static readonly message = 'Not file';
  constructor() {
    super(NotFileError.message);
  }
}
