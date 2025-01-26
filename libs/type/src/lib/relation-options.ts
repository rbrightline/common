export type RelationType =
  | 'many-to-many'
  | 'many-to-one'
  | 'one-to-one'
  | 'one-to-many';

export type OnDelete =
  | 'RESTRICT'
  | 'CASCADE'
  | 'SET NULL'
  | 'DEFAULT'
  | 'NO ACTION';

export type OnUpdate =
  | 'RESTRICT'
  | 'CASCADE'
  | 'SET NULL'
  | 'DEFAULT'
  | 'NO ACTION';

export type RelationOptions = {
  name: string;
  type: RelationType;
  target: string;
  targetProperty?: string;
  eager?: boolean;
  join?: boolean;
  cascade?: boolean;
  onDelete?: OnDelete;
  onUpdate?: OnUpdate;
};
