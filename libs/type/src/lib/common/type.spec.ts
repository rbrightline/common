import { Type } from './type';

describe('Type', () => {
  it('should work', () => {
    class A {
      some: string;
    }
    class B {
      other: string;
    }
    function some(value: Type<A>) {
      return;
    }

    some(A);

    // Compiler error
    // some(B);
  });
});
