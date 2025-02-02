export class InvalidObjectValueError<T extends object> extends Error {
  constructor(value?: T) {
    super(
      `Invalid object value :${
        (value ? JSON.stringify(value) : value) ?? 'value not provided'
      }`
    );
  }
}
