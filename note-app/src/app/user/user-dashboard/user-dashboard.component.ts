import { Component, OnInit } from "@angular/core";
import { Router, Route, Data, ActivatedRoute } from "@angular/router";
import { User } from "../../model/user.model";
import { Note } from "src/app/model/note.model";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
  user: any = null;
  notes: Note[];
  message: string;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.user = data["user"].user;
        this.notes = this.user.notes;
        this.userService.setUserNotes(this.user.notes);
        // console.dir(`User data received : ${this.user}. Notes = ${this.notes}`);
      },
      err => {
        console.log(`Error occurred : ${err}`);
        this.message = err;
      }
    );
  }
}
