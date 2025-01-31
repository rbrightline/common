import { join } from 'path';
import { createPathScope } from '../lib';
/**
 * Under tmp file scope
 */
export const safepath = createPathScope(join(__dirname, 'data'));
