import { Component, OnInit, Input } from "@angular/core";
import { Note } from "../model/note.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.css"]
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.note);
  }

  noteViewClickHandler() {
    this.router.navigate(["user/note_view", this.note["_id"]]);
  }
}
