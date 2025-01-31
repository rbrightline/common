import { JSONSchema } from './json-schema';

describe('JSONSchema', () => {
  describe('StringSchema', () => {
    it('should compile string schema', () => {
      const value: JSONSchema = {
        title: 'Some',
        type: 'string',
        default: 'str',
        minLength: 0,
        maxLength: 100,
      };
    });
  });
  describe('NumberSchema', () => {
    it('should compile number schema', () => {
      const value: JSONSchema = {
        title: 'Some',
        type: 'number',
        default: 100,
        minimum: 0,
        maximum: 100,
      };
    });
  });
  describe('BooleanSchema', () => {
    it('should compile number schema', () => {
      const value: JSONSchema = {
        title: 'Some',
        type: 'boolean',
      };
    });
  });

  describe('ObjectSchema', () => {
    it('should compile number schema', () => {
      const value: JSONSchema = {
        title: 'Some',
        type: 'object',
        default: {},
        properties: {
          name: {
            $ref: './',
          },
          some: {
            type: 'string',
          },
          arr: {
            type: 'array',
            items: {
              $ref: 'ref',
            },
          },
        },
      };
    });
  });

  describe('Array', () => {
    it('should compile number schema', () => {
      const value: JSONSchema = {
        type: 'array',
        items: {
          type: 'string',
        },
        default: ['some'],
      };
    });
  });
  describe('Ref', () => {
    it('should compile number schema', () => {
      const value: JSONSchema = {
        type: 'string',
        $ref: '',
      };
    });
  });
});
