import { def, tarr } from '@rline/is';
import { PropertyOptions as O } from '@rline/type';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { PropertyValidation } from './validation';

describe('String Validation', () => {
  it.each`
    value               | options                                            | errors
    ${{}}               | ${{ type: 'number' } as O}                         | ${undefined}
    ${{ prop: 1 }}      | ${{ type: 'number' } as O}                         | ${undefined}
    ${{ prop: 'some' }} | ${{ type: 'number' } as O}                         | ${['isNumber']}
    ${{ prop: true }}   | ${{ type: 'number' } as O}                         | ${['isNumber']}
    ${{ prop: {} }}     | ${{ type: 'number' } as O}                         | ${['isNumber']}
    ${{ prop: 0 }}      | ${{ type: 'number', minimum: 1, maximum: 3 } as O} | ${['min']}
    ${{ prop: 4 }}      | ${{ type: 'number', minimum: 1, maximum: 3 } as O} | ${['max']}
  `(
    'should validate $value with $options and throw $errors',
    ({ value, options, errors }) => {
      class A {
        @PropertyValidation(options)
        prop: unknown;
      }

      const instance = plainToInstance(A, value);

      const foundErrors = validateSync(instance)
        .map((e) => [
          ...Object.keys(e.constraints || {}),
          ...[
            ...(
              e.children?.map((c) => Object.keys(c.constraints || {})) || []
            ).flat(),
          ],
        ])
        .flat();

      if (tarr(errors) && def(errors) && errors.length > 0) {
        expect(foundErrors.length).toEqual(errors.length);
      } else {
        expect(foundErrors.length).toEqual(0);
      }
    }
  );
});
