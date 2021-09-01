import { Component, OnInit } from '@angular/core';
import { MyFormControl } from "../../forms/models/my-form-control";

export const INIT_STATE_VALUE = 'init state value';
export const INIT_STATE_VALUE_DISABLED = 'disabled field';

@Component({
  selector: 'app-form-change-state',
  templateUrl: './form-change-state.component.html',
  styleUrls: ['./form-change-state.component.scss']
})
export class FormChangeStateComponent implements OnInit {
  name = new MyFormControl(INIT_STATE_VALUE);

  nameDisabled = new MyFormControl({
    value: INIT_STATE_VALUE_DISABLED,
    disabled: true
  });

  nameForChange = new MyFormControl('');

  countOfRegisters = new MyFormControl('');

  countOfDisables = 0;

  constructor() {
    const onDisabled = (isDisabled: boolean) => {
      isDisabled && this.countOfDisables++;
    }

    this.countOfRegisters.registerOnDisabledChange(onDisabled);
    this.countOfRegisters.registerOnDisabledChange(onDisabled);
  }

  ngOnInit(): void {
  }

  onDisableClick() {
    this.nameForChange.disable();
  }

  onEnableClick() {
    this.nameForChange.enable();
  }

  onCountClick() {
    this.countOfRegisters.disable();
  }
}
