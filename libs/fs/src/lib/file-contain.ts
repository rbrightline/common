import { readFileByLine } from './read-file-by-line';

export async function fileContain(
  filename: string,
  content: string
): Promise<boolean> {
  const reader = readFileByLine(filename);

  while (reader) {
    const next = await reader.next();
    if (next.value) {
      if (next.value.includes(content)) {
        return true;
      }
    }
    if (next.done) {
      return false;
    }
  }

  return false;
}
