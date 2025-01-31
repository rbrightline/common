export class EmptyObjectError extends Error {
  static readonly message = 'Object is empty';
  constructor() {
    super(EmptyObjectError.message);
  }
}
