import { clone } from './clone';

describe('clone', () => {
  it('should clone', () => {
    const data = { first: { second: { third: 1 } } };
    const newData = clone(data);
    newData.first.second.third = 100;
    expect(data.first.second.third).toEqual(1);
  });
});
