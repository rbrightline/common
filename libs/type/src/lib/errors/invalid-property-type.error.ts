export class InvalidPropertyTypeError extends Error {
  static readonly message =
    'Invalid property type error (string,number,boolean,object,date,array';
  constructor() {
    super(InvalidPropertyTypeError.message);
  }
}
