import { timeIcon } from './time-icon';

describe('timeIcon', () => {
  it('should generate time icon', () => {
    const t = timeIcon();
    expect(t.next().value).toEqual('🕛');
    expect(t.next().value).toEqual('🕐');
    expect(t.next().value).toEqual('🕑');
    expect(t.next().value).toEqual('🕒');
    expect(t.next().value).toEqual('🕓');
    expect(t.next().value).toEqual('🕔');
    expect(t.next().value).toEqual('🕕');
    expect(t.next().value).toEqual('🕖');
    expect(t.next().value).toEqual('🕗');
    expect(t.next().value).toEqual('🕘');
    expect(t.next().value).toEqual('🕙');
    expect(t.next().value).toEqual('🕚');
    expect(t.next().value).toEqual('🕛');
  });
});
