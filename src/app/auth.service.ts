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

  headers = new HttpHeaders().set('content-type', 'multipart/form-data');
  signup(
    username: string,
    password: string,
  ) {
    let risk_parameter=0;
    const url = `${this.serverUrl}/signup`;
    return this.http
      .post(
        url,
        {
          username,
          password,
          risk_parameter,
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
  
  IsLoggedIn() {
    return !!localStorage.getItem('token');
  }
  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.error);
  }
}
