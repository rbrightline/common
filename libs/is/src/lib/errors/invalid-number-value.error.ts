export class InvalidNumberValueError extends Error {
  constructor(value?: number) {
    super(`Invalid number value : ${value ?? 'value not provided'}`);
  }
}
