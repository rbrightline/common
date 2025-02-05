import { ne } from './ne';

describe('ne - is not empty value', () => {
  it.each`
    value        | result
    ${undefined} | ${true}
    ${null}      | ${true}
    ${[]}        | ${false}
    ${{}}        | ${false}
    ${''}        | ${false}
    ${0}         | ${false}
  `('ne($value) should return $result', ({ value, result }) => {
    expect(ne(value)).toEqual(result);
  });
});
