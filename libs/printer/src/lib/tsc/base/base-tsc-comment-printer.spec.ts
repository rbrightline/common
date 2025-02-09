import { BaseTscCommentPrinter } from './base-tsc-comment.printer';
describe('BaseTscCommentPrinter', () => {
  it('should print the comment', async () => {
    expect(new BaseTscCommentPrinter('comment').print()).toEqual(
      ['/**', ' *', ' * comment', ' */'].join('\n')
    );
  });
});
