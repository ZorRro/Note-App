import { Component, OnInit } from "@angular/core";
import { AuthService } from "./service/auth.service";
import { Router } from "@angular/router";
import { User } from "./model/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
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
  ngOnInit() {}
}
