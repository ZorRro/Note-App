import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { User } from "../model/user.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./app-login.component.html"
})
export class AppLoginComponent implements OnInit {
  loginMessage: string;
  forgotPass: boolean = false;
  resetPass: boolean = false;

  private identity: string;
  private token: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if (param.get("message")) {
        this.loginMessage = param.get("message");
      }
    });

    this.activatedRoute.queryParams.subscribe(query => {
      if (query.identity) {
        this.resetPass = true;
        this.identity = query.identity;
        this.token = query.info;
      }
    });
  }

  onLoginSubmit(loginForm: NgForm) {
    if (!this.validate(loginForm.value)) {
      this.loginMessage = "Username/Password not submitted.";
    } else {
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

  forgottenPasswordFormSubmit(forgottenPasswordForm: NgForm) {
    console.log(forgottenPasswordForm.value);
    this.authService
      .doInitiateResetPassword(forgottenPasswordForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (res.status === 200) {
            this.loginMessage =
              "An email has been sent. Please reset the password from the link sent on the mail.";
          } else {
            this.loginMessage = "An Error was encountered. Please try again.";
          }
        },
        err => {
          if (err.status === 404) {
            this.loginMessage = "The email is not registered";
          } else {
            this.loginMessage = "An Error was encountered. Please try again.";
          }
        }
      );
  }

  resetPasswordFormSubmit(resetPasswordForm: NgForm) {
    console.log(resetPasswordForm.value);
    const password = resetPasswordForm.value.password;
    this.authService.doResetPassword(this.token, password).subscribe(
      res => {
        console.log(res);
        if (res.status === 400 || res.status === 401 || res.status === 404) {
          this.loginMessage = "Invalid Request. Incorrect information.";
        } else if (res.status === 200) {
          this.loginMessage = "Password has been successfully reset.";
          setTimeout(() => {
            this.forgotPass = this.resetPass = false;
            this.loginMessage = "Please login with new password.";
          }, 2000);
        } else {
          this.loginMessage = "Internal error encountered.";
        }
      },
      err => {}
    );
  }

  validate(input) {
    if (!(input.username || input.password)) {
      return false;
    }
    return true;
  }

  forgotPassword() {
    this.forgotPass = !this.forgotPass;
    this.loginMessage = this.forgotPass
      ? "An email will be sent to your registered email for resetting password."
      : "";
  }
}
