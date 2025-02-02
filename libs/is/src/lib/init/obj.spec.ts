import { obj } from './obj';

describe('obj initializer', () => {
  it('should initialize optional object', () => {
    let value = obj({});
    expect(value).toEqual({});

    value = undefined;
    value = { some: 'some' };

    // Compiler error
    // value = null;
  });

  it('should initialize required object', () => {
    class Some {
      name?: string = 'name';
    }
    let value = obj(new Some(), { required: true, readonly: true });

    value = obj(new Some(), { required: true });

    expect(value.name).toEqual('name');
    // Compiler error
    // value.name = 'some';

    // Compiler error
    // value = {}
  });
});
