import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';



@NgModule({
  declarations: [
    InputTextComponent
  ],
  exports: [
    InputTextComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
