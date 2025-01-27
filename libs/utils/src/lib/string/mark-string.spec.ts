import {
  getMarkedContent,
  markContent,
  replaceMarkedContentWith,
} from './mark-string';

describe('mark-string', () => {
  it('should mark string', () => {
    {
      const contents = [
        `some other then that ${markContent(
          'some'
        )}  it it really to goes here`,
        `${markContent(
          'some'
        )} some other then that   it it really to goes here`,
        `some other then that   it it really to goes here${markContent(
          'some'
        )}`,
      ];
      for (const content of contents) {
        expect(getMarkedContent(content)).toEqual(['some']);
      }
    }

    {
      const content = `- ${markContent('first')} ${markContent(
        'second'
      )} ${markContent('third')} content`;

      const expected = '- 1 2 3 content';
      expect(replaceMarkedContentWith(content, [1, 2, 3])).toEqual(expected);
    }
  });
});
