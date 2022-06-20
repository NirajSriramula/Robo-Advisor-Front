import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, AuthComponent, HomepageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule,
    CoreModule,
  ],
  exports: [SigninComponent, ReactiveFormsModule, SignupComponent],
})
export class AuthModule {}
