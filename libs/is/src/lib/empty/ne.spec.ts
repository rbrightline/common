import { ne } from './ne';

describe('ne - is not empty value', () => {
  it.each`
    value        | result
    ${undefined} | ${false}
    ${null}      | ${false}
    ${[]}        | ${false}
    ${{}}        | ${false}
    ${''}        | ${false}
    ${' '}       | ${false}
    ${0}         | ${false}
    ${1}         | ${true}
    ${-1}        | ${true}
    ${'so'}      | ${true}
    ${'so'}      | ${true}
    ${['so']}    | ${true}
    ${[1]}       | ${true}
  `('ne($value) should return $result', ({ value, result }) => {
    expect(ne(value)).toEqual(result);
  });
});
