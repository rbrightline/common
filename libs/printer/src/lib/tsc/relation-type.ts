import { sval } from '@rline/is';
import { RelationOptions } from '@rline/type';

export function relationType(options: RelationOptions): string {
  const target = sval(options.target);
  switch (options.type) {
    case 'many-to-many':
    case 'one-to-many':
      return `${target}[]`;
    case 'many-to-one':
    case 'one-to-one':
      return `${target}`;
  }
}
