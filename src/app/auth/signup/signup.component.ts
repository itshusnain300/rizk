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


  isFormSubmit = false;
  form: FormGroup;
  error: any = null;
  isLoader:boolean=false



  isConsultant: boolean = true;
  isCompnany: boolean = false;
  activeTab = 0;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.isFormSubmit = false;
    this.create();
    this.form.controls.role.valueChanges
      .subscribe(v => {

        this.f.name.setValue(null);
        if (v === 'Company') {
          this.activeTab = 1
        }
        else if (v === 'Consultant') {
          this.activeTab = 0;
        }
        else {
          this.activeTab = 2;
        }
        this.toggleValidators(v);
      });
  }

  create() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      corporateNumber: [''],
      personName: [''],
      department: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      role: ['Consultant', Validators.required]
    }, {
      validator: ConfirmPasswordValidator('password', 'confirmPassword')
    });
  }

  // Toggles Validator's for Compnay and Consultant
  toggleValidators(value) {
    if (value === 'Consultant') {
      this.form.get('corporateNumber').setValidators([]);
      this.form.get('corporateNumber').updateValueAndValidity();

      this.form.get('personName').setValidators([]);
      this.form.get('personName').updateValueAndValidity();

      this.form.get('department').setValidators([]);
      this.form.get('department').updateValueAndValidity();
    }
    if (value === 'Company') {
      this.form.get('corporateNumber').setValidators([Validators.required]);
      this.form.get('corporateNumber').updateValueAndValidity();

      this.form.get('personName').setValidators([Validators.required]);
      this.form.get('personName').updateValueAndValidity();

      this.form.get('department').setValidators([]);
      this.form.get('department').updateValueAndValidity();
    }
    if (value === 'University') {
      this.form.get('corporateNumber').setValidators([]);
      this.form.get('corporateNumber').updateValueAndValidity();

      this.form.get('personName').setValidators([Validators.required]);
      this.form.get('personName').updateValueAndValidity();

      this.form.get('department').setValidators([Validators.required]);
      this.form.get('department').updateValueAndValidity();
    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.isFormSubmit = true;

    this.isLoader=true
    if (this.form.invalid) {
      return;
    }
    // console.log(this.form.value);
    
    
  }

}
