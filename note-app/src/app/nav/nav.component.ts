import { Component, OnInit } from "@angular/core";
import { User } from "../model/user.model";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}
  title = "note-app";
  user: User;
  public isLoggedIn() {
    this.authService.getLoginState();
  }

  public handleLogout() {
    this.authService.doLogout();
    this.router.navigate(["/"]);
  }
  ngOnInit() {
    this.authService.updateEvent.subscribe(user => {
      this.user = user;
    });
  }
}
