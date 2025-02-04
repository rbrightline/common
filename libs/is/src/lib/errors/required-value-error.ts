export class RequiredValueError extends Error {
  constructor(value?: unknown) {
    super(`${value} must be defined`);
  }
}
