import { apps } from '../common/apps';
import { APPSDIR, LIBRARYDIR, ROOTDIR } from '../common/constants';
import { libs } from '../common/library';

export function init() {
  console.table({
    ROOTDIR,
    LIBRARYDIR,
    LIB_NAMES: libs(),
    APPSDIR,
    APP_NAMES: apps(),
  });
  //
}
