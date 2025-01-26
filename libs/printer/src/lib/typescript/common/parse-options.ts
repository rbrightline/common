import { BasicPropertyOptions } from '@rline/type';
import { clone } from './clone';

export function parseOptions<T extends BasicPropertyOptions>(
  options: T,
  omit?: (keyof T)[],
  pick?: (keyof T)[]
): string {
  options = clone(options);
  if (omit) {
    omit.forEach((e) => {
      delete options[e];
    });
  }

  if (pick) {
    Object.entries(options).forEach(([key, value]) => {
      if (!pick.includes(key as keyof T)) {
        delete options[key as keyof T];
      }
    });
  }

  if (options.type == 'object') {
    if (options.target) {
      options.target = `###()=>${options.target}###`;
    }
  }

  if (options.type == 'array') {
    if (options.items.type == 'object') {
      options.items.target = `###()=>${options.items.target}###`;
    }
  }

  const preResult = JSON.stringify(options);
  const result = preResult.replace(/"###|###"/g, '');

  return result;
}
