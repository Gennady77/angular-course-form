import { MyValidationErrors, MyValidatorFn } from "./directives/validators";
import { MyAbstractControl } from "./models/my-abstract-control";

export function composeValidators(validators: Array<MyValidatorFn>): MyValidatorFn | null {
  return (control: MyAbstractControl) => {
    return validators.reduce((acc: MyValidationErrors | null, validator) => {
      const err = validator(control);
      if(err) {
        let _acc = acc === null ? {} : acc;

        _acc = {..._acc, ...err};

        return _acc;
      }

      return acc;
    }, null);
  };
}
