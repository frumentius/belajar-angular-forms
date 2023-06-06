import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  // the '!' sign is to tell typescript that this value will definetly be assigned before use, so it doesn't generate error. Or you can remove the '!' sign and use the value intiation commented in constructor.
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // this.myForm = new FormGroup({});
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // Perform further actions with the form data
    }
  }
  resetForm() {
    this.myForm.reset();
    this.myForm.markAsPristine();
    this.myForm.markAsUntouched();
  }
}
