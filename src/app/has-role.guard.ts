import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {
  constructor(private http: HttpClient) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let jwt = localStorage.getItem('token');
    let id = localStorage.getItem('campaignId');

    let serverUrl = environment.baseUrl;
    let url = `${serverUrl}/ad/adDetail/` + id;
    console.log(url);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + jwt,
    });
    this.http.get(`${serverUrl}/ad/`, { headers }).subscribe(
      (result) => {
        return true;
      },
      (error) => {
        return false;
      }
    );
    return true;
  }
}
