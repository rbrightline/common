import { Digit, IntRange } from '../num';

export type VersionExtension =
  | ''
  | '-alpha' // Early development stage
  | '-beta' // Testing stage, more stable than alpha
  | '-rc' // Release candidate
  | '-stable' // Production-ready release
  | '-GA' // General Availability
  | '-patch' // Bug fix release
  | '-hotfix' // Critical fix release
  | '-LTS' // Long-Term Support
  | '-dev' // Development build
  | '-nightly' // Nightly build
  | '-snapshot' // Snapshot build
  | '-preview' // Preview of upcoming features
  | '-experimental' // Experimental features
  | '-custom'; // Custom build

export type Version = `${IntRange<0, 50>}.${Digit}.${Digit}${VersionExtension}`;
