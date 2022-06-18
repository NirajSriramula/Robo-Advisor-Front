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
  isCorrect = true;
  loading = false;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService, private router: Router) {
    console.log(this.password);
    console.log(this.name);
  }
  ngOnInit(): void {}
  get name() {
    return this.form.get('name');
  }
  get password() {
    return this.form.get('password');
  }
  onSubmit() {
    console.log('sign in clicked');
    this.loading = true;
    if (this.form.valid) {
      //signin call to be made
      //this.router.navigate(['/admin/dashboard']);
      console.log('beforecall');
      this.authService.signin(this.name?.value,this.password?.value).subscribe((response:any)=>{
        if(response.success==true){
          console.log(response.sessionId);
        localStorage.setItem("sessionID",response.sessionId);
        localStorage.setItem("name",this.name?.value);
        console.log('aftercall');
        this.authService.get_risk(response.sessionId).subscribe((response1:any)=>{
          if(response1.risk_parameter>1){
            this.router.navigate(['/admin/questionnaire']);
          }
          else{
            this.router.navigate(['/admin/dashboard']);
          }
        })
        }
        else{
          this.isCorrect = false;
          this.loading = false;
          console.log(response.success)
        }
      })
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
