import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/_helpers/confirm-password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  active = 1;
  
  form: FormGroup;
  loading: boolean;
  submitted: boolean;
  

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
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
    this.submitted = true;
    console.log(this.form.value);

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

