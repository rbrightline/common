export class ItemNotFoundError extends Error {
  static readonly message = 'The item not found';
  constructor() {
    super(ItemNotFoundError.message);
  }
}
