import { Version } from './version';

export type PackageJSON = {
  name: string;
  version: string;
  description: string;
  author: {
    email: string;
    name: string;
    url: string;
  };
  homepage: string;
  repository: {
    url: string;
    type: string;
  };
  publishConfig: {
    access: string;
    tag: string;
  };
  keywords: string[];
  optionalDependencies: Record<string, Version>;
  peerDependencies: Record<string, Version>;
  dependencies: Record<string, Version>;
  files: string[];
  module: string;
};
