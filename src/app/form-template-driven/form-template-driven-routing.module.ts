import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTemplateDrivenComponent } from './form-template-driven.component';

const routes: Routes = [{ path: '', component: FormTemplateDrivenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormTemplateDrivenRoutingModule { }
