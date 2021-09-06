import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { MyAbstractControl } from "./my-abstract-control";
import { MyValidationErrors, MyValidatorFn } from "../directives/validators";
import { composeValidators } from "../validators";

export const DISABLED = 'DISABLED';
export const VALID = 'VALID';
export const INVALID = 'INVALID';

function coerceToValidator(validator: MyValidatorFn | MyValidatorFn[] | null | undefined): MyValidatorFn | null {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}

export class MyFormControl extends MyAbstractControl {
  public readonly valueChanges!: Observable<any>;
  public readonly status!: string;
  public readonly errors!: MyValidationErrors | null;

  get disabled(): boolean {
    return this.status === DISABLED;
  }

  get invalid(): boolean {
    return this.status === INVALID;
  }

  get validator(): MyValidatorFn | null {
    return this.composedValidatorFn;
  }

  private onChange: Function[] = [];
  private onDisabledChange: Function[] = [];
  private composedValidatorFn: MyValidatorFn | null;

  constructor(
    formState: any = null,
    validators?: MyValidatorFn | MyValidatorFn[] | null
  ) {
    super();

    this.composedValidatorFn = coerceToValidator(validators);

    if(this.isBoxedValue(formState)) {
      (this as {value: any}).value = formState.value;
      this.status = formState.disabled ? DISABLED : VALID;
    } else {
      (this as {value: any}).value = formState;
    }

    this.valueChanges = new EventEmitter();
  }

  setValue(value: any, options: {
    emitEvent?: boolean
  } = {}) {
    (this as {value: any}).value = value;
    if(this.onChange.length) {
      this.onChange.forEach(changeFn => changeFn(this.value));
    }

    (this as {errors: MyValidationErrors | null}).errors = this.validator!(this);
    (this as {status: string}).status = this.errors ? INVALID : VALID;

    if(options.emitEvent !== false) {
      (this.valueChanges as EventEmitter<any>).emit(value);
    }
  }

  registerOnChange(fn: Function): void {
    this.onChange.push(fn);
  }

  isBoxedValue(formState: any): boolean {
    return typeof formState === 'object' && formState !== null &&
      Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
  }

  registerOnDisabledChange(fn: (isDisabled: boolean) => void) {
    this.onDisabledChange.push(fn);
  }

  disable() {
    (this as {status: string}).status = DISABLED;
    this.onDisabledChange.forEach(changeFn => changeFn(true));
  }

  enable() {
    (this as {status: string}).status = VALID;
    this.onDisabledChange.forEach(changeFn => changeFn(false));
  }
}
