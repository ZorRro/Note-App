import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../service/auth.service";
import { User } from "../model/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./app-login.component.html"
})
export class AppLoginComponent {
  loginMessage: string;
  constructor(private authService: AuthService, private router: Router) {}

  onLoginSubmit(loginForm: NgForm) {
    const loginUser: any = {};
    loginUser.username = loginForm.value.username;
    loginUser.password = loginForm.value.password;
    console.log(loginUser);

    this.authService.doLogin(loginUser).subscribe(
      (user: User) => {
        console.log(user);
        this.authService.setUser(user);
        const userToken = user.token;
        const userId = user.id;
        localStorage.setItem("token", userToken);
        this.authService.updateUserStatus(userId);
        this.router.navigate(["user/dashboard", { data: user }]);
      },
      err => {
        this.loginMessage = err.error.message || "Login Failed. ";
        console.error(err);
      }
    );
  }
}
