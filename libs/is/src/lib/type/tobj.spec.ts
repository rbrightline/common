import { tobj } from './tobj';

describe('tobj - is tobj', () => {
  it.each`
    value        | result
    ${undefined} | ${true}
    ${null}      | ${true}
    ${{}}        | ${true}
    ${[]}        | ${false}
    ${1}         | ${false}
    ${-1}        | ${false}
    ${0}         | ${false}
    ${true}      | ${false}
    ${false}     | ${false}
    ${NaN}       | ${false}
  `('tobj($value) should return $result', ({ value, result }) => {
    expect(tobj(value)).toEqual(result);
  });
});
