import { BasicPropertyOptions, ModelType } from '@rline/type';
import {
  isAnyObjectProperty,
  isArrayObjectProperty,
  isObjectProperty,
} from './is-object-property';
import { unique } from './unqiue';

export function importsFromProperties(
  type: ModelType,
  properties?: BasicPropertyOptions[]
): string {
  if (type == 'class') {
    const result = properties?.filter(isAnyObjectProperty)?.map((e) => {
      if (isObjectProperty(e)) {
        return `import { ${e.target} } from '@rline/dto';`;
      } else if (isArrayObjectProperty(e)) {
        return `import { ${e.items.target} } from '@rline/dto';`;
      }
      return undefined;
    });

    return [...new Set(result)].join('\n');
  } else if (type == 'dto') {
    const result = properties
      ?.filter(isAnyObjectProperty)
      .map((e) => {
        if (isObjectProperty(e)) {
          return `import { ${e.target} } from '@rline/dto';`;
        } else if (isArrayObjectProperty(e)) {
          return `import { ${e.items.target} } from '@rline/dto';`;
        }
        return '';
      })
      .filter((e) => e);

    if (result) return unique(result).join('\n');
  } else if (type == 'entity') {
    const result = properties?.filter(isAnyObjectProperty).map((e) => {
      if (isObjectProperty(e)) {
        return `import { ${e.target} } from '@rline/dto';`;
      } else if (isArrayObjectProperty(e)) {
        return `import { ${e.items.target} } from '@rline/dto';`;
      }
      return '';
    });

    if (result) {
      return unique(result).join('\n');
    }
  }

  return '';
}
