export class EmptyValueError extends Error {
  constructor(value?: Array<unknown>) {
    super(`Empty value: ${value ?? 'value not provided'}`);
  }
}
