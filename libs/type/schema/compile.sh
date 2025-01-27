#!/usr/bin/env bash
json compile ./src/model.schema.json model.schema.json
json compile ./src/server.schema.json server.schema.json
json compile ./src/security.schema.json security.schema.json
json compile ./src/database.schema.json database.schema.json

json tsc ./model.schema.json ../src/lib/model.ts
json tsc ./server.schema.json ../src/lib/server.ts
json tsc ./security.schema.json ../src/lib/security.ts
json tsc ./database.schema.json ../src/lib/database.ts
