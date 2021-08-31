import {
  Directive,
  Inject,
  Input,
  OnChanges,
  Optional,
  Self,
  SimpleChanges
} from '@angular/core';
import { MyFormControl } from "../../models/my-form-control";
import { MY_NG_VALUE_ACCESSOR, MyControlValueAccessor } from "../control_value_accessor";

@Directive({
  selector: '[appMyFormControl]'
})
export class MyFormControlDirective implements OnChanges{
  @Input('appMyFormControl') form!: MyFormControl;

  valueAccessor: MyControlValueAccessor|null = null;

  constructor(
    @Optional() @Self() @Inject(MY_NG_VALUE_ACCESSOR) private valueAccessors: MyControlValueAccessor[]
  ) {
    this.valueAccessor = valueAccessors[0];
  }

  ngOnChanges(changes: SimpleChanges) {
    const control = this.form;
    const dir = this;

    dir.valueAccessor?.writeValue(control.value);

    dir.valueAccessor?.registerOnChange((newValue: any) => {
      control.setValue(newValue);
    });

    control.registerOnChange((newValue: any) => {
      dir.valueAccessor?.writeValue(newValue);
    })

    if(this.valueAccessor?.setDisabledState) {
      this.valueAccessor?.setDisabledState(control.disabled);
    }
  }

}
