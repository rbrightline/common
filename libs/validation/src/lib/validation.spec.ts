import { PropertyValidation } from './validation';

/**
 * - [ ] add more test here
 */
describe('Validation', () => {
  it.each`
    value        | options | errors
    ${undefined} | ${{}}   | ${undefined}
    ${undefined} | ${{}}   | ${undefined}
    ${undefined} | ${{}}   | ${undefined}
    ${undefined} | ${{}}   | ${undefined}
  `(
    'should validate $value with $options and throw $errors',
    ({ value, options, errors }) => {
      class A {
        @PropertyValidation({ type: 'string' })
        property: unknown;
      }
    }
  );
});
