import { MyAbstractControl } from "../models/my-abstract-control";

export type MyValidationErrors = {
  [key: string]: any
};

export interface MyValidatorFn {
  (control: MyAbstractControl): MyValidationErrors | null;
}
