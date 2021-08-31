import { InjectionToken } from "@angular/core";

export interface MyControlValueAccessor {
  registerOnChange(fn: any): void;
  writeValue(obj: any): void;
  setDisabledState?(isDisabled: boolean): void;
}

export const MY_NG_VALUE_ACCESSOR = new InjectionToken<ReadonlyArray<MyControlValueAccessor>>('NgValueAccessor');
