import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormChangesValuesComponent } from "./modules/sandbox/form-changes-values/form-changes-values.component";
import { FormChangeStateComponent } from "./modules/sandbox/form-change-state/form-change-state.component";
import { FormValidateComponent } from "./modules/sandbox/form-validate/form-validate.component";

const routes: Routes = [{
  path: 'change-values',
  component: FormChangesValuesComponent
}, {
  path: 'change-state',
  component: FormChangeStateComponent
}, {
  path: 'validate',
  component: FormValidateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
