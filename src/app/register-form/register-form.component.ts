import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  headerTitle: string = "Registration Form";

  constructor(private fb: FormBuilder, private userService: UserService) { }
  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: [''],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
    gender: [''],
    age: [0, [this.ageValidator]],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
    phone: ['', [Validators.pattern(/^[789]\d{9}$/)]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zipCode: ['', [Validators.pattern(/^\d{5,6}$/)]]
    })
  }, { Validators: [this.confirmPasswordMatchValidator] });

  

  ngOnInit(): void {
  }

  ageValidator(control: AbstractControl) {
    if (control.value >= 18)
      return null;
    else
      return { invalidAge: true };
  }

  confirmPasswordMatchValidator(control: AbstractControl) {
    const passwordValue = control.get('password')?.value;
    const confirmPasswordValue = control.get('confirmPassword')?.value;

    if (!passwordValue || !confirmPasswordValue)
      return null;
    if (passwordValue === confirmPasswordValue)
      return null;
    else
      return { passwordMismatch: true };
  }

  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get gender() { return this.registerForm.get('gender'); }
  get age() { return this.registerForm.get('age'); }
  get email() { return this.registerForm.get('email'); }
  get phone() { return this.registerForm.get('phone'); }
  get address() { return this.registerForm.get('address'); }
  get street() { return this.address?.get('street'); }
  get city() { return this.address?.get('city'); }
  get state() { return this.address?.get('state'); }
  get zipCode() { return this.address?.get('zipCode'); }

  onSubmit() {
    let user: User = this.registerForm.value as User;
    // console.log(user);

    this.userService.addUser(user).subscribe({
      next: data => {
        alert('You are successfully registered !!')
      },
      error: err => {
        alert('Failed to register user !! Please Try Again Later')
      }
    });
  }
}