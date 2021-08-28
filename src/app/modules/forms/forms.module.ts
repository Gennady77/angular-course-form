import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormControlDirective } from './directives/reactive_directives/my-form-control.directive';



@NgModule({
  declarations: [
    MyFormControlDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyFormControlDirective
  ]
})
export class FormsModule { }
