import { Component, OnInit } from '@angular/core';
import { MyFormControl } from "../../forms/models/my-form-control";
import { MyAbstractControl } from "../../forms/models/my-abstract-control";
import { MyValidationErrors } from "../../forms/directives/validators";

export const REQUIRED_MESSAGE = 'Field is required';
export const DIGIT_MESSAGE = 'Field should be digital';

function nameValidator(control: MyAbstractControl): MyValidationErrors | null {
  const valid = /^[a-zA-Z]*$/.test(control.value);
  return !valid ? {name: {value: control.value}} : null;
}

function digitValidator(control: MyAbstractControl): MyValidationErrors | null {
  const valid = /^[0-9]*$/.test(control.value);
  return !valid ? {digit: {value: control.value, message: DIGIT_MESSAGE}} : null;
}

function requiredValidator(control: MyAbstractControl): MyValidationErrors | null {
  const valid = control.value !== '' && control.value !== null && control.value !== undefined;
  return !valid ? {required: {value: control.value, message: REQUIRED_MESSAGE}} : null;
}

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.scss']
})
export class FormValidateComponent implements OnInit {
  name = new MyFormControl('', nameValidator);
  card = new MyFormControl('', [digitValidator, requiredValidator]);

  constructor() { }

  ngOnInit(): void {
  }

}
