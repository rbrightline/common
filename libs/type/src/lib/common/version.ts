import { IntRange } from '../num';

export type VersionNumber = IntRange<0, 20>;
export type PatchVersion =
  | IntRange<0, 20>
  | `${IntRange<0, 20>}${'' | '-beta' | '-initial' | '-test'}`;

export type Version = `${VersionNumber}.${VersionNumber}.${PatchVersion}`;
