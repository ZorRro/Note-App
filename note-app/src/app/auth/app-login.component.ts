import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html'
})
export class AppLoginComponent {
  constructor(private authService: AuthService) { }

  onLoginSubmit(loginForm: NgForm) {
    const loginUser: any = {};
    loginUser.username = loginForm.value.username;
    loginUser.password = loginForm.value.password;
    console.log(loginUser);
    this.authService.doLogin(loginUser)
      .subscribe(
        userData => { console.log(userData); },
        err => console.error(err)
      );
  }
}
