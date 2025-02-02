export class InvalidBooleanValueError extends Error {
  constructor(value?: boolean) {
    super(`Invalid boolean value : ${value ?? 'value not provided'}`);
  }
}
