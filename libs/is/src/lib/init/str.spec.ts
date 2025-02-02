import { str } from './str';

describe('string intitializer', () => {
  it('should initialize optional strings', () => {
    let value = str('other');
    expect(value).toEqual('other');
    value = 'some';
    value = undefined;

    value = str(undefined);
    expect(value).toEqual(undefined);

    // compiler error
    // value = null;
  });

  it('should create required string', async () => {
    let value = str('value', { required: true });
    expect(value).toEqual('value');

    value = 'som otehr';
    value = 'some';
    value = '';

    // compiler error
    // value = undefined
  });
});
