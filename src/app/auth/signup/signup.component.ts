import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/_helpers/confirm-password';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  active = 1;
  isFormSubmit = false;

  form: FormGroup;
  loading: boolean;
  submitted: boolean;
  

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isFormSubmit = false;
    this.create();
    

    
  }

  create(){
    this.form = this.formBuilder.group({
      email: [''],
      password: ['', Validators.required],
      terms: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    {
      validator: ConfirmPasswordValidator('password', 'confirmPassword')
    });
  }
  
  get f() { return this.form.controls; }
  onSubmit() {
    this.isFormSubmit = false;
  
   
    if (this.form.invalid) {
      return;
      
    }

  }
  onSubmit1() {
    this.submitted = true;
    console.log(this.form.value);

    if (this.form.invalid) {
      return;
      
    }

  }
}
