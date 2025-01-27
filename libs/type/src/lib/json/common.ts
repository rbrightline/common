export class JSONCommonSchema<T> {
  $filepath?: string;
  $schema?: string;
  $id?: string;
  title?: string;
  $comment?: string;
  $ref?: string;
  description?: string;
  examples?: T[];
  default?: T;
  const?: T;
  format?: string;
  readOnly?: boolean;
  contentEncoding?: string;
  contentMediaType?: string;
}
