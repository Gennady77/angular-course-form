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
import { MyNgControl } from "../ng-control";
import { setUpDisabledChangeHandler } from "../shared";

@Directive({
  selector: '[appMyFormControl]'
})
export class MyFormControlDirective extends MyNgControl implements OnChanges{
  @Input('appMyFormControl') form!: MyFormControl;

  constructor(
    @Optional() @Self() @Inject(MY_NG_VALUE_ACCESSOR) private valueAccessors: MyControlValueAccessor[]
  ) {
    super();
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

    setUpDisabledChangeHandler(control, dir);

    if(this.valueAccessor?.setDisabledState) {
      this.valueAccessor?.setDisabledState(control.disabled);
    }
  }

}
