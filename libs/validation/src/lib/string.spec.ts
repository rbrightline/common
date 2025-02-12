import { def, tarr } from '@rline/is';
import { PropertyOptions as O } from '@rline/type';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { PropertyValidation } from './validation';

describe('String Validation', () => {
  it.each`
    value               | options                                                                      | errors
    ${{}}               | ${{ type: 'string' } as O}                                                   | ${undefined}
    ${{ prop: 'some' }} | ${{ type: 'string' } as O}                                                   | ${undefined}
    ${{ prop: 1 }}      | ${{ type: 'string' } as O}                                                   | ${['isString']}
    ${{ prop: true }}   | ${{ type: 'string' } as O}                                                   | ${['isString']}
    ${{ prop: {} }}     | ${{ type: 'string' } as O}                                                   | ${['isString']}
    ${{ prop: '' }}     | ${{ type: 'string', minLength: 1 } as O}                                     | ${['minLength']}
    ${{ prop: '' }}     | ${{ type: 'string', minLength: 1, maxLength: 3 } as O}                       | ${['minLength']}
    ${{ prop: 'abcd' }} | ${{ type: 'string', minLength: 1, maxLength: 3 } as O}                       | ${['maxLength']}
    ${{ prop: 'abc' }}  | ${{ type: 'string', minLength: 1, maxLength: 3, notContains: ['xyz'] } as O} | ${undefined}
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
