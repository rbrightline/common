import { ValueType, $M } from '@rline/type';

/**
 * Wrap a content with a marker such as `<__marker__>content<__marker>` this allows to quickly find the content in the text
 * @param text
 * @returns
 */
export function markContent<T extends ValueType>(text: T) {
  return `${$M}${text}${$M}`;
}

/**
 * Find all marked content and return them
 * @param content
 * @returns
 */
export function getMarkedContent(content: string, raw = false): string[] {
  return (content.match(new RegExp(`${$M}(.*?)${$M}`, 'g')) as string[]).map(
    (e) => {
      if (raw) {
        return e;
      }
      return (e as string).replace(new RegExp($M, 'g'), '');
    }
  );
}

export function replaceMarkedContentWith(
  content: string,
  replacements: any[]
): string {
  const marks = getMarkedContent(content, true);

  replacements.forEach((e, index) => {
    if (marks[index]) {
      content = content.replace(marks[index], e);
    }
  });

  return content;
}
