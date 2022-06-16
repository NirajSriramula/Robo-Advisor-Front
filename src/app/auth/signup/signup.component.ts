import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  error = false;
  errorMessage = '';
  loading = false;
  showPass = false;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
    preferedType: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService, private router: Router) {}

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get preferedType() {
    return this.form.get('preferedType');
  }

  get location() {
    return this.form.get('location');
  }
  changePreferedItem(e: any) {
    this.preferedType?.setValue(e.target.value, {
      onlyself: true,
    });
  }
  onSubmit() {
    this.loading = true;
    if (this.password?.value != this.confirmPassword?.value) {
      this.error = true;
      this.errorMessage = 'Password and Confirm Password Should be same';
      this.loading = false;
      return;
    }
    if (this.form.valid) {
      this.error = false;
      this.authService
        .signup(
          this.name?.value,
          this.email?.value,
          this.password?.value,
          this.preferedType?.value,
          this.location?.value
        )
        .subscribe(
          (response: any) => {
            console.log(response);
            this.loading = false;
            this.router.navigate(['/auth/signin']);
          },
          (error) => {
            this.error = true;
            this.errorMessage = error.status.message;
            this.loading = false;
          }
        );
      console.log();
    } else {
      this.error = true;
      this.errorMessage = 'Please fill the form correctly';
      console.log(this.form);
    }
    this.loading = false;
  }

  onEyeClick() {
    this.showPass = !this.showPass;
    console.log(this.showPass);
  }
  showCpass = false;
  onCEyeClick() {
    this.showCpass = !this.showCpass;
  }
  closeErrMsg() {
    this.error = false;
    this.errorMessage = '';
  }
  ngOnInit(): void {}
}
