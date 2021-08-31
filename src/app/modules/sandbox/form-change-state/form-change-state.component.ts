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

  constructor() { }

  ngOnInit(): void {
  }

}
