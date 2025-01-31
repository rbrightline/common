import { createPathScope } from '@rline/fs';
import { join } from 'path';

/**
 * Root: ./schema
 */
export const safepath = createPathScope(join(__dirname, './data'));
