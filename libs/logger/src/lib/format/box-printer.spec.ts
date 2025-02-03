import { AnsiColor } from '@rline/color';
import { dotBox, roundBox, sharpBox, wavyBox } from './box-printer';

describe('borderText', () => {
  it('should print sharp box', () =>
    sharpBox(`${AnsiColor.red}Title${AnsiColor.reset}`, 'message goes here'));
  it('should print round box', () => roundBox('Title', 'message goes here'));
  it('should print wavy box', () => wavyBox('Title', 'message goes here'));
  it('should print dot box', () => dotBox('Title', 'message goes here'));

  it('shoudl check', () => {
    console.log('〰'.repeat(5));
    console.log('a'.repeat(10));
    expect('〰'.length).toEqual(1);
  });
});
