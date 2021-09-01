import { MyControlValueAccessor } from "./control_value_accessor";

export abstract class MyNgControl {
  valueAccessor: MyControlValueAccessor|null = null;
}
