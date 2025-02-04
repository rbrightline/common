import { tstr } from './tstr';

describe('tstr - is tstr', () => {
  it.each`
    value               | result
    ${undefined}        | ${true}
    ${null}             | ${true}
    ${''}               | ${true}
    ${'some'}           | ${true}
    ${1}                | ${false}
    ${0}                | ${false}
    ${-1}               | ${false}
    ${0.5}              | ${false}
    ${true}             | ${false}
    ${false}            | ${false}
    ${{}}               | ${false}
    ${{ some: 'some' }} | ${false}
    ${[]}               | ${false}
    ${['some']}         | ${false}
  `('tstr($value) should return $result', ({ value, result }) => {
    expect(tstr(value)).toEqual(result);
  });
});
