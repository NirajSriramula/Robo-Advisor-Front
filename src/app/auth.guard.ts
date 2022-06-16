import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('checking if a user');
    if (this.authService.IsLoggedIn()) {
      console.log('is a user');
      if (state.url.indexOf('admin') > -1) {
        if (AuthService.role == 'ROLE_ADMIN') return true;
        else {
          console.log('Auth Gaurd', AuthService.role);
          return false;
        }
      }
      return true;
    }
    this.router.navigate(['auth', 'signin']);
    return false;
  }
}
