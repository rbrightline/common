import { PickRequired } from './pick-required';

describe('PickRequired', () => {
  it('should pick required properties', () => {
    type A = { a: number; b?: number };
    const value: A = { a: 100 };
    type WithB = PickRequired<A, 'b'>;

    // Compiler Error
    // const withoutB: WithB = { a: 100 };
    const valueWithB: WithB = { a: 100, b: 100 };
  });
});
