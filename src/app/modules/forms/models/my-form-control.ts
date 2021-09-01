import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

export const DISABLED = 'DISABLED';
export const VALID = 'VALID';

export class MyFormControl {
  public readonly valueChanges!: Observable<any>;
  public readonly value: any;
  public readonly status!: string;

  get disabled(): boolean {
    return this.status === DISABLED;
  }

  private onChange: Function = () => {}
  private onDisabledChange: Function = () => {};

  constructor(
    formState: any = null
  ) {
    if(this.isBoxedValue(formState)) {
      this.value = formState.value;
      this.status = formState.disabled ? DISABLED : VALID;
    } else {
      this.value = formState;
    }

    this.valueChanges = new EventEmitter();
  }

  setValue(value: any, options: {
    emitEvent?: boolean
  } = {}) {
    this.onChange(value);

    if(options.emitEvent !== false) {
      (this.valueChanges as EventEmitter<any>).emit(value);
    }
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  isBoxedValue(formState: any): boolean {
    return typeof formState === 'object' && formState !== null &&
      Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
  }

  registerOnDisabledChange(fn: (isDisabled: boolean) => void) {
    this.onDisabledChange = fn;
  }

  disable() {
    (this as {status: string}).status = DISABLED;
    this.onDisabledChange(true);
  }

  enable() {
    (this as {status: string}).status = VALID;
    this.onDisabledChange(false);
  }
}
