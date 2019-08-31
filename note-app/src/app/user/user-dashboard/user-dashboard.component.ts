import { Component, OnInit } from "@angular/core";
import { Router, Route, Data, ActivatedRoute } from "@angular/router";
import { User } from "../../model/user.model";
import { Note } from "src/app/model/note.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
  user: User = null;
  notes: Note[];
  message: string;
  filterValue: string;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.user = data["user"].user;
        this.notes = this.user.notes;
        this.userService.setUser(this.user);
      },
      err => {
        console.log(`Error occurred : ${err}`);
        this.message = err;
      }
    );
  }

  filterNotes(value) {
    console.log(value);
    this.filterValue = value;
  }
}
