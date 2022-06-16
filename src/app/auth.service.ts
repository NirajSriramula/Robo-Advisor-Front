import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  serverUrl = environment.baseUrl;
  static role = '';
  constructor(private http: HttpClient, private router: Router) {}

  headers = new HttpHeaders().set('content-type', 'application/json');
  signup(
    name: string,
    email: string,
    password: string,
    preferredType: string,
    location: string
  ) {
    const url = `${this.serverUrl}/user/signup`;
    const role = 'ROLE_USER';
    if (preferredType.includes(':')) {
      preferredType = preferredType.substring(3);
    }
    return this.http
      .post(
        url,
        {
          name,
          email,
          password,
          preferredType,
          location,
          role,
        },
        {
          headers: this.headers,
        }
      )
      .pipe(catchError(this.handleError));
  }
  signin(username: string, password: string) {
    const url = this.serverUrl + '/login?username=' + username + '&password=' + password;
    return this.http
      .get(
        url
      )
      .pipe(catchError(this.handleError));
  }
  resetPassword(resetToken: string, password: string, confirmpassword: string) {
    const url = `${this.serverUrl}/user/resetPassword?q=` + resetToken;
    console.log(url);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(
      url,
      { password: password, passwordConfirm: confirmpassword },
      { headers: this.headers }
    );
  }
  forgotPassword(email: string) {
    const url = `${this.serverUrl}/user/forgotPassword `;
    console.log(url);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, { email }, { headers: this.headers });
  }
  isAdmin() {
    let jwt = localStorage.getItem('token');
    let id = localStorage.getItem('campaignId');
    let url = `${this.serverUrl}/ad/adDetail/` + id;
    console.log(url);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + jwt,
    });
    this.http.get(`${this.serverUrl}/ad/`, { headers }).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/admin/stats']);
        return true;
      },
      (error) => {
        this.router.navigate(['/']);
      }
    );
  }
  IsLoggedIn() {
    return !!localStorage.getItem('token');
  }
  getUserDetails() {
    const url = `${this.serverUrl}/user/getDetails`;
    let token: string = localStorage.getItem('token') || '';

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    console.log(this.headers);
    return this.http
      .get(url, { headers: headers })
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.error);
  }
  Logout = () => {
    console.log('inside logout');
  };
  ForgotPassword(email: string) {
    const url = `${this.serverUrl}/user/forgotPassword`;
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(url, { email }).pipe(catchError(this.handleError));
  }

  PasswordReset(resetToken: string, password: string, passwordConfirm: string) {
    const url = `${this.serverUrl}/user/forgotPassword/${resetToken}`;
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http
      .post(url, { password, passwordConfirm })
      .pipe(catchError(this.handleError));
  }
}
