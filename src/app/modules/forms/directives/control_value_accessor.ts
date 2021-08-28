import { InjectionToken } from "@angular/core";

export interface MyControlValueAccessor {
  registerOnChange(fn: any): void;
  writeValue(obj: any): void;
}

export const MY_NG_VALUE_ACCESSOR = new InjectionToken<ReadonlyArray<MyControlValueAccessor>>('NgValueAccessor');
