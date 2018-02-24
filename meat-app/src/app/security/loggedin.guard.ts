import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService) {

  }

  canLoad(route: Route): boolean {
    console.log('canLoad');

    return this.checkAuthentication(route.path);
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, RouterState: RouterStateSnapshot): boolean {
    console.log('canActivate');

    return this.checkAuthentication(activatedRoute.routeConfig.path);
  }

  checkAuthentication(path: string): boolean {
    const loggedIn = this.loginService.isLoggedIn();

    if(!loggedIn) {
      this.loginService.handleLogin(`/${path}`);
    }

    return loggedIn;
  }
}
