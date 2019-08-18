import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";
import { User } from "src/app/model/user.model";
import { UserService } from "src/app/service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  public user: User;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  deleteUser() {
    this.userService.deleteUser().subscribe(result => {
      console.log(result);
      if (result.status === 200) {
        //success event. User has been removed from system.
        this.userService.setUserNotes(null);
        this.userService.setUser(null);
        this.authService.doLogout();
        // redirect the user to the home page.
        this.router.navigate(["/"]);
      }
    });
  }
}
