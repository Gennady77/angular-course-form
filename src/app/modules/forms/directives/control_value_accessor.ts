import { InjectionToken } from "@angular/core";

export interface MyControlValueAccessor {
  registerOnChange(fn: any): void;
}

export const MY_NG_VALUE_ACCESSOR = new InjectionToken<ReadonlyArray<MyControlValueAccessor>>('NgValueAccessor');
