import { tbln } from './tbln';

describe('tbln - is type of boolean', () => {
  it.each`
    value        | result
    ${undefined} | ${true}
    ${null}      | ${true}
    ${true}      | ${true}
    ${false}     | ${true}
    ${1}         | ${false}
    ${-1}        | ${false}
    ${0}         | ${false}
    ${'some'}    | ${false}
    ${''}        | ${false}
    ${{}}        | ${false}
    ${[]}        | ${false}
    ${['some']}  | ${false}
  `('tbln($value) should return $result', ({ value, result }) => {
    expect(tbln(value)).toEqual(result);
  });
});
