describe('hasKeys', () => {
  it('should check the object has keys or not', () => {
    type Value = {
      a?: number;
      b?: number;
      c?: number;
    };
    const value: Value = {
      a: 100,
      b: 200,
      c: 300,
    };
  });
});
