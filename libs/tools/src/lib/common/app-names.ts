import { existsSync, readdirSync, statSync } from 'fs';
import { APPSDIR } from './constants';
import { join } from 'path';

export const APP_NAMES = readdirSync(APPSDIR).filter((e) => {
  const isDirectory = statSync(join(APPSDIR, e)).isDirectory();
  const hasProjectJSON = existsSync(join(APPSDIR, e, 'project.json'));
  return isDirectory && hasProjectJSON;
});
