export type PackageJSON = {
  name?: string;
  version?: string;
  description?: string;
  author?: {
    email?: string;
    name?: string;
    url?: string;
  };
  homepage?: string;
  repository?: {
    url?: string;
    type?: string;
  };
  publishConfig?: {
    access?: string;
    tag?: string;
  };
  keywords?: string[];
  dependencies?: Record<string, string>;
  files?: string[];
  module?: string;
};
