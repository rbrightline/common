import { PickRequired } from './pick-required';

describe('PickRequired', () => {
  it('should pick required properties', () => {
    type A = { a: number; b?: number; c: number };
    const value: A = { a: 100, c: 500 };
    type WithB = PickRequired<A, 'a' | 'b'>;

    // Compiler Error
    // const withoutB: WithB = { a: 100 };
    const valueWithB: WithB = { a: 100, b: 100, c: 500 };
  });
});
