import { Injectable } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    activeRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ) {
    if (this.authService.getLoginState()) {
      this.router.navigate(["/user"]);
    } else {
      return true;
    }
  }
}
