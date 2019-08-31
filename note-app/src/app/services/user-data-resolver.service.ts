import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { User } from "../model/user.model";
import { UserService } from "./user.service";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class UserDataResolverService implements Resolve<any> {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): Observable<User> | Promise<User> | User {
    let user = null;
    const userId = this.authService.getUserId();
    console.log(`In Resolver. Id = ${userId}`);
    return this.userService.retrieveUserData(userId);
  }
}
