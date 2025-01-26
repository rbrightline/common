import { Names, names } from './names';

describe('names', () => {
  it('should return correct cases for a single word', () => {
    const result = names('example');
    expect(result).toEqual({
      camelCase: 'example',
      constCase: 'EXAMPLE',
      kebabCase: 'example',
      pascalCase: 'Example',
      snakeCase: 'example',
      titleCase: 'Example',
      controllerName: 'ExampleController',
      serviceName: 'ExampleService',
      moduleName: 'ExampleModule',
      sentenceCase: 'Example',
      dotCase: 'example',
    } as Names);
  });

  it('should return correct cases for multiple words', () => {
    const result = names('example name');
    expect(result).toEqual({
      camelCase: 'exampleName',
      constCase: 'EXAMPLE_NAME',
      kebabCase: 'example-name',
      pascalCase: 'ExampleName',
      snakeCase: 'example_name',
      titleCase: 'Example Name',
      controllerName: 'ExampleNameController',
      serviceName: 'ExampleNameService',
      moduleName: 'ExampleNameModule',
      sentenceCase: 'Example name',
      dotCase: 'example.name',
    } as Names);
  });

  it('should handle empty string', () => {
    expect(() => names('')).toThrow();
  });

  it('should handle strings with multiple spaces', () => {
    const result = names('example   name');
    expect(result).toEqual({
      camelCase: 'exampleName',
      constCase: 'EXAMPLE_NAME',
      kebabCase: 'example-name',
      pascalCase: 'ExampleName',
      snakeCase: 'example_name',
      titleCase: 'Example Name',
      controllerName: 'ExampleNameController',
      serviceName: 'ExampleNameService',
      moduleName: 'ExampleNameModule',
      sentenceCase: 'Example name',
      dotCase: 'example.name',
    } as Names);
  });
});
