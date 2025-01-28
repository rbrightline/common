import { Change } from '@rline/type';
import { diff } from './diff';

describe('Diff', () => {
  it('should return difs', () => {
    const result = diff('12345', '12x4567', '');
    console.log(result);
    expect(result).toEqual([
      { previous: '3', current: 'x' },
      { previous: undefined, current: '6' },
      { previous: undefined, current: '7' },
    ] as Change<string>[]);
  });
});
