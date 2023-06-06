import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormTemplateDrivenRoutingModule } from './form-template-driven-routing.module';
import { FormTemplateDrivenComponent } from './form-template-driven.component';


@NgModule({
  declarations: [
    FormTemplateDrivenComponent
  ],
  imports: [
    CommonModule,
    FormTemplateDrivenRoutingModule,
    FormsModule,
  ]
})
export class FormTemplateDrivenModule { }
