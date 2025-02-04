export class EmptyValueError extends Error {
  constructor(value?: unknown) {
    super(`${value} is empty`);
  }
}
