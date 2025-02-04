import { nearr } from '../empty/nearr';

describe('nearr - is nearr', () => {
  it.each`
    value         | result
    ${undefined}  | ${true}
    ${null}       | ${true}
    ${[1]}        | ${true}
    ${[0]}        | ${true}
    ${[-1]}       | ${true}
    ${[1, 23, 4]} | ${true}
    ${[]}         | ${false}
  `('nearr($value) should return $result', ({ value, result }) => {
    expect(nearr(value)).toEqual(result);
  });
});
