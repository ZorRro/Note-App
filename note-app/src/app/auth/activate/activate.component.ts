import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-activate",
  templateUrl: "./activate.component.html",
  styleUrls: ["./activate.component.css"]
})
export class ActivateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(queryParam => {
      console.log(queryParam);
      const identity = queryParam.identity;
      const info = queryParam.info;
      this.authService.doActivate(identity, info).subscribe(
        res => {
          console.log(res);
          this.router.navigate([
            "auth/login",
            { message: "User Activated. Please login." }
          ]);
        },
        err => {
          console.error(err);
        }
      );
    });
  }
}
