export class InvalidStringValueError extends Error {
  constructor(value?: string) {
    super(`Invalid string value : ${value ?? 'value not provided'}`);
  }
}
