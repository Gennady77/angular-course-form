import { MyFormControl } from "../models/my-form-control";
import { MyNgControl } from "./ng-control";

export function setUpDisabledChangeHandler(control: MyFormControl, dir: MyNgControl) {
  if(dir.valueAccessor?.setDisabledState) {
    const onDisabledChange = (isDisabled: boolean) => {
      dir.valueAccessor?.setDisabledState!(isDisabled);
    }

    control.registerOnDisabledChange(onDisabledChange);
  }
}
