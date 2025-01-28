import { Change } from '@rline/type';

export function diff(
  previous: string,
  current: string,
  delimeter = ''
): Change<string>[] {
  const result: Change<string>[] = [];
  const pvs = previous.split(delimeter);
  const ccs = current.split(delimeter);

  const length = ccs.length;
  for (let i = 0; i < length; i++) {
    if (pvs[i] != ccs[i]) {
      result.push({
        previous: pvs[i],
        current: ccs[i],
      });
    }
  }

  return result;
}
