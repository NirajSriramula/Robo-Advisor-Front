import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  error = false;
  showPass = false;
  errorMessage = '';
  loading = false;
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService, private router: Router) {
    console.log(this.password);
  }
  ngOnInit(): void {}
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  onSubmit() {
    console.log('sign in clicked');
    this.loading = true;
    if (this.form.valid) {
      //signin call to be made
      this.router.navigate(['/admin/dashboard']);
      
      console.log('beforecall');
      console.log('aftercall');
    } else {
      this.error = true;
      this.errorMessage = 'Please fill the form correctly';
    }
  }

  onEyeClick() {
    this.showPass = !this.showPass;
    console.log(this.showPass);
  }

  closeErrMsg() {
    this.error = false;
    this.errorMessage = '';
  }
}
