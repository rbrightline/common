export function suffixFileName(name: string, suffix: string): string {
  const parts = name.split('');
  const lastIndex = name.lastIndexOf('.');

  if (lastIndex < 0) {
    return name + suffix;
  }

  return parts
    .map((e, index) => {
      if (index == lastIndex) {
        return `${suffix}${e}`;
      }
      return e;
    })
    .join('');
}
