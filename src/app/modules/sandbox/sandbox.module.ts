import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormChangesValuesComponent } from './form-changes-values/form-changes-values.component';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from "../forms/forms.module";
import { FormChangeStateComponent } from './form-change-state/form-change-state.component';
import { FormValidateComponent } from './form-validate/form-validate.component';



@NgModule({
  declarations: [
    FormChangesValuesComponent,
    FormChangeStateComponent,
    FormValidateComponent
  ],
  exports: [
    FormChangesValuesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule
  ]
})
export class SandboxModule { }
