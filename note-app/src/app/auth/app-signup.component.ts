import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './app-signup.component.html'
})
export class AppSignupComponent {
  message: string;
  constructor(private authService: AuthService,
              private router: Router) { }

  handleSignup(signUpData: NgForm) {
    this.authService.doSignup(signUpData.value)
      .subscribe(response => {
        console.log(response);
        if ( response.status === 200) {
          this.message = 'Signup successfull. Please login';
          setTimeout(() => {
            this.router.navigate(['auth/login']);
          }, 2000);
        }
      }, error => {
        console.error('Error occurred.')
        console.error(error)
      })
  }
}
