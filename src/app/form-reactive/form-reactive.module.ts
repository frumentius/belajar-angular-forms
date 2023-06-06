import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormReactiveRoutingModule } from './form-reactive-routing.module';
import { FormReactiveComponent } from './form-reactive.component';


@NgModule({
  declarations: [
    FormReactiveComponent
  ],
  imports: [
    CommonModule,
    FormReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormReactiveModule { }
