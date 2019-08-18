import { Injectable } from "@angular/core";
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
  CanActivateChild
} from "@angular/router";
import { AuthService } from "src/app/service/auth.service";

@Injectable({
  providedIn: "root"
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    activeRouter: ActivatedRouteSnapshot,
    routeState: RouterStateSnapshot
  ) {
    if (this.authService.getLoginState()) {
      return true;
    } else {
      return false;
      // this.router.navigate(['/']);
    }
  }
}

@Injectable({
  providedIn: "root"
})
export class UserChildGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivateChild(
    activeRouter: ActivatedRouteSnapshot,
    routeState: RouterStateSnapshot
  ) {
    if (this.authService.getLoginState()) {
      return true;
    } else {
      return false;
      // this.router.navigate(['/']);
    }
  }
}
