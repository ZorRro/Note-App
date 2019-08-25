import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { BlackListValidatorFactory } from "../validators/blacklist.validator";
import { PasswordValidator } from "../validators/password.validator";

@Component({
  selector: "app-signup",
  templateUrl: "./app-signup.component.html"
})
export class AppSignupComponent implements OnInit {
  signupForm: FormGroup;
  message: string;
  get username() {
    return this.signupForm.get("username");
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.formbuilder.group(
      {
        name: ["", [Validators.required]],
        username: [
          "",
          [
            Validators.required,
            BlackListValidatorFactory([/admin/, /username/])
          ]
        ],
        password: ["", [Validators.required]],
        confirmPassword: ["", [Validators.required]],
        email: ["", [Validators.email]],
        subscribe: [""]
      },
      { validators: [PasswordValidator] }
    );

    // Conditional validation
    this.signupForm.get("subscribe").valueChanges.subscribe(currentValue => {
      if (currentValue) {
        this.signupForm
          .get("email")
          .setValidators(
            Validators.compose([Validators.required, Validators.email])
          );
      } else {
        this.signupForm.get("email").setValidators(Validators.email);
      }
      this.signupForm.get("email").updateValueAndValidity();
    });
  }

  // RF
  onSignup() {
    console.log(this.signupForm.value);
    this.authService.doSignup(this.signupForm.value).subscribe(
      response => {
        console.log(response);
        if (response.status === 200) {
          this.message = "Signup successfull. Please login";
          setTimeout(() => {
            this.router.navigate(["auth/login"]);
          }, 2000);
        }
      },
      error => {
        console.error("Error occurred.");
        console.error(error);
      }
    );
  }

  /* 
    TDF SUBMISSION
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
  } */
}
