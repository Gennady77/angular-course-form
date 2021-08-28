import { Component, OnInit } from '@angular/core';
import { MyFormControl } from "../../forms/models/my-form-control";

@Component({
  selector: 'app-form-changes-values',
  templateUrl: './form-changes-values.component.html',
  styleUrls: ['./form-changes-values.component.scss']
})
export class FormChangesValuesComponent implements OnInit {
  name = new MyFormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
