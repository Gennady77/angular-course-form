import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

export class MyFormControl {
  public readonly valueChanges!: Observable<any>;
  public readonly value: any;

  private onChange: Function = () => {}

  constructor(
    formState: any = null
  ) {
    this.value = formState;
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
}
