import { Printable } from '../../common';

export class BaseTscCommentPrinter implements Printable {
  constructor(protected readonly comment: string) {}
  print(): string {
    const comments = this.comment
      .split('\n')
      .map((e) => ` * ${e}`)
      .join('\n');
    return ['/**', ' *', comments, ' */'].join('\n');
  }
}
