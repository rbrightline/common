import { PickOptional } from './pick-optional';

describe('PickOptional', () => {
  it('should create pick-optional type', () => {
    type Some = {
      a: string;
      b: string;
      c: string;
    };

    type OptionalA = PickOptional<Some, 'a'>;
    type OptionalB = PickOptional<Some, 'b'>;
    type OptionalAB = PickOptional<Some, 'a' | 'b'>;

    const a: OptionalA = {
      b: 'b',
      c: '',
    };
    // Does not compile
    // const a: OptionalA = { b: '', };
    const b: OptionalB = {
      a: '',
      c: '',
    };
    // Does not compile
    // const b: OptionalB = { a: '' };

    // Does not compile
    // const ab: OptionalAB = { a: '', b: '' };
    const ab: OptionalAB = { c: '' };

    console.log(a, b, ab);
  });
});
