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
    username: string,
    password: string,
  ) {
    let risk_parameter=1.5;
    const url = this.serverUrl + '/signup?username=' + username + '&password=' + password;
    return this.http
      .get(url)
      .pipe(catchError(this.handleError));
  }
  get_risk(sessionId:string){
    let url = this.serverUrl + '/get_risk_parameter?sessionId=' + sessionId;
    return this.http.get(url);
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
    return !!localStorage.getItem('sessionId');
  }
  logout(){
    let url = this.serverUrl + '/logout?sessionId=' + localStorage.getItem("sessionId");
    return this.http.get(url).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.error);
  }
}
