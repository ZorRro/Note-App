import { Component, OnInit } from "@angular/core";
import { User } from "src/app/model/user.model";
import { UserService } from "src/app/services/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-profile-edit",
  templateUrl: "./user-profile-edit.component.html",
  styleUrls: ["./user-profile-edit.component.css"]
})
export class UserProfileEditComponent implements OnInit {
  user: User = null;
  message = null;
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      (updatedUser: User) => {
        console.log("User updated : " + updatedUser);
        this.userService.setUser(updatedUser);
        this.message = "user updated.";
      },
      error => {
        console.log("Unable to update user.");
        console.error(error);
        this.message = "unable to update user.";
      }
    );
  }

  cancelUpdate() {
    this.router.navigate(["../"], { relativeTo: this.activatedRoute });
  }
}
