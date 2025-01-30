export class AccessDeniedError extends Error {
  static readonly message = 'Access Denied';
  constructor() {
    super(AccessDeniedError.message);
  }
}
