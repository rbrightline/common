export class InvalidArrayValueError extends Error {
  constructor(value?: Array<unknown>) {
    super(`Invalid array value : ${value ?? 'value not provided'}`);
  }
}
