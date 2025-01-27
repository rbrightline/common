import { unique, uniqueBy } from './unique';

describe('unique', () => {
  it('should unique', () => {
    const list = ['some', 'some', 'some'];
    const expected = ['some'];

    expect(unique(list)).toEqual(expected);
  });

  it('should unique by', () => {
    const list = [
      { id: 1, name: 'some' },
      { id: 1, name: 'other' },
      { id: 1, name: 'another' },
    ];

    const expected = [{ id: 1, name: 'some' }];

    expect(uniqueBy(list, 'id')).toEqual(expected);
  });
});
