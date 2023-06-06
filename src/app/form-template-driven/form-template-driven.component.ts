import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent {
  name: string;
  email: string;

  constructor(){
    this.name = "";
    this.email = "";
  }
  submitForm(form: NgForm): void{
    if (form.valid) {
      console.log(form.value);

      // Perform further actions with the form data
      this.name = form.value.name;
      this.email = form.value.email;
    }
  }
  resetForm(form: NgForm): void{
    this.name = "";
    this.email = "";
    form.reset();
  }
}
