#!/usr/bin/env ts-node

import { jsonSchema } from './json-schema';

jsonSchema('./schema', 'model.schema.json', 'output.schema.json');
