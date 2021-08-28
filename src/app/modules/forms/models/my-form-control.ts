import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

export class MyFormControl {
  public readonly valueChanges!: Observable<any>;

  constructor() {
    this.valueChanges = new EventEmitter();
  }

  setValue(value: any) {
    (this.valueChanges as EventEmitter<any>).emit(value);
  }
}
